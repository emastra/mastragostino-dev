'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Meta from '~/components/Meta';
import LayoutContainer from '~/components/LayoutContainer';

const MiniAuditPage: React.FC = () => {
  return (
    <>
      <Meta
        title="Request Mini-Audit"
        description="Request a mini-audit for your real estate agency workflows."
      />
      <LayoutContainer>
        test content
      </LayoutContainer>
    </>
  );
};

MiniAuditPage.hideLayout = true;

export default MiniAuditPage;