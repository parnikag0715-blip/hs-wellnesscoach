import type { ReactNode } from 'react';
import Navbar from './_components/Navbar';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '4.5rem' }}>{children}</main>
    </>
  );
}
