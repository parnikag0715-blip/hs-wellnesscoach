'use client';

import { useEffect } from 'react';
import { getFirebaseAnalytics } from '@/lib/firebase/client';

/** Initialises Firebase Analytics once on the client side. */
export default function AnalyticsInit() {
  useEffect(() => {
    getFirebaseAnalytics().catch(console.error);
  }, []);
  return null;
}
