'use client';

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/client';
import { useState, useEffect } from 'react';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

/**
 * Sign in using Google OAuth Popup.
 * Automatically syncs the user profile into Firestore collection `/users/{uid}`.
 */
export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // Sync user profile to Firestore
  try {
    const userRef = doc(db, 'users', user.uid);
    const existingSnap = await getDoc(userRef);

    if (!existingSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: 'client',
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        userRef,
        {
          lastLoginAt: serverTimestamp(),
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        { merge: true },
      );
    }
  } catch (err) {
    console.error('Error saving user to Firestore:', err);
  }

  return user;
}

/**
 * Sign out current user.
 */
export async function signOut(): Promise<void> {
  await fbSignOut(auth);
}

/**
 * React hook to observe Firebase Auth state in client components.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
