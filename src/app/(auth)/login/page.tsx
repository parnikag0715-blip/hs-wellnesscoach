'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-stone-100 bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-2xl font-bold text-amber-700 shadow-inner">
          HS
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
            Welcome to HS Wellness
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Client portal login is currently offline. For personalized consultations or product
            inquiries, please connect with us directly.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
