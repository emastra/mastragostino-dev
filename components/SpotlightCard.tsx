'use client';

import { ReactNode } from 'react';

export default function SpotlightCard({ children }: { children: ReactNode }) {
  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: '<angle>';
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>
      <div className="flex w-full items-center justify-center p-4">
        <div className="animate-border mx-auto w-full max-w-[422px] rounded-2xl border border-transparent [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.teal.500)_86%,theme(colors.cyan.300)_90%,theme(colors.teal.500)_94%,theme(colors.slate.600/.48))_border-box]">
          {/* TODO: improve responsiveness - lg:min-h-[228px] */}
          <div className="relative z-10 mx-auto h-full w-full rounded-2xl bg-background px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
