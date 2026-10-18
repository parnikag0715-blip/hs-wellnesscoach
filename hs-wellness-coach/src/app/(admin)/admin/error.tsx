'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AdminError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Something went wrong in Admin</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        {error.message ?? 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        style={{
          padding: '0.5rem 1.25rem',
          borderRadius: '6px',
          border: 'none',
          background: '#0070f3',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  );
}
