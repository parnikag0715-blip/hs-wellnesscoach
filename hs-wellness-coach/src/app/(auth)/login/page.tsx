'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithGoogle, signOut, useAuth } from '@/lib/firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      setIsSigningIn(true);
      await signInWithGoogle();
      router.push('/');
    } catch (err: unknown) {
      console.error(err);
      const message = err instanceof Error ? err.message : 'Failed to sign in with Google';
      setError(message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-stone-100 bg-white p-8 shadow-xl transition-all sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-2xl font-bold text-amber-700 shadow-inner">
            HS
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
            Welcome to HS Wellness
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Your personalized wellness & nutrition coaching portal
          </p>
        </div>

        {/* Auth status display if already logged in */}
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : user ? (
          <div className="space-y-4 py-4 text-center">
            <div className="relative inline-block">
              {user.photoURL ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="mx-auto h-20 w-20 rounded-full object-cover shadow ring-4 ring-emerald-100"
                />
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-800">
                  {user.displayName?.[0] || 'U'}
                </div>
              )}
            </div>
            <div>
              <p className="text-lg font-bold text-stone-900">
                {user.displayName || 'Wellness Client'}
              </p>
              <p className="text-sm text-stone-500">{user.email}</p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/"
                className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                Go to Home
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full rounded-xl border border-stone-200 px-4 py-3 font-medium text-stone-700 transition-colors hover:bg-stone-50"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              type="button"
              disabled={isSigningIn}
              onClick={handleGoogleSignIn}
              className="flex w-full cursor-pointer items-center justify-center gap-3.5 rounded-2xl border border-stone-200 bg-white px-4 py-3.5 font-medium text-stone-800 shadow-sm transition-all hover:bg-stone-50 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isSigningIn ? 'Connecting to Google...' : 'Continue with Google'}</span>
            </button>

            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-stone-200" />
              <span className="bg-white px-3 text-xs font-semibold tracking-wider text-stone-400 uppercase">
                Protected by Firebase
              </span>
              <div className="w-full border-t border-stone-200" />
            </div>

            <p className="text-center text-xs leading-relaxed text-stone-500">
              By continuing, you agree to HS Wellness Coach&apos;s Terms of Service and Privacy
              Policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
