// https://nextjs.org/docs/pages/building-your-application/routing/api-routes

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { ok: boolean; message?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  try {
    // body will already be parsed as JSON by Next's default body parser
    const body = req.body;

    const webhookUrl = process.env.N8N_MINIAUDIT_WEBHOOK_URL!;
    const headerName = process.env.N8N_WEBHOOK_AUTH_HEADER_NAME!;
    const headerValue = process.env.N8N_WEBHOOK_AUTH_HEADER_VALUE!;

    // basic validation
    if (
      !body ||
      !body.name ||
      typeof body.name !== 'string' ||
      (!body.phone && !body.email)
    ) {
      return res.status(400).json({ ok: false, message: 'Invalid payload' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [headerName]: headerValue,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('API /api/miniaudit-form-submit error', err);
    return res
      .status(500)
      .json({ ok: false, message: 'Internal Server Error' });
  }
}
