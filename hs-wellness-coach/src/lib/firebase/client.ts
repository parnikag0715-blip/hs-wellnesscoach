// Firebase client-side initialization
// Analytics only runs in the browser (not during SSR)

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyC3D5pRHBAz_fNN5w4pJvFS6Y7NKcwl4xM',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'hs-wellness-coach.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'hs-wellness-coach',
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'hs-wellness-coach.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '569969834204',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:569969834204:web:d9697acdc1052498fa9c19',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-S7R7580TMD',
};

// Prevent duplicate app initialization during hot-reload
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Authentication
export const auth = getAuth(app);

// Analytics — lazy-loaded only in the browser
export async function getFirebaseAnalytics() {
  if (typeof window === 'undefined') return null;
  const { getAnalytics } = await import('firebase/analytics');
  return getAnalytics(app);
}

export default app;
