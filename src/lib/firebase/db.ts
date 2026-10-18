// Firestore database helper functions
// All data written here is viewable in Firebase Console → Firestore

import {
  collection,
  addDoc,
  serverTimestamp,
  type DocumentReference,
} from 'firebase/firestore';
import { db } from './client';

// ── Types ────────────────────────────────────────────────────────────────────

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  note: string;
  goal: string;
  slot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ── Collections ───────────────────────────────────────────────────────────────

/** Save a new consultation booking to Firestore → /bookings */
export async function saveBooking(data: BookingData): Promise<DocumentReference> {
  return addDoc(collection(db, 'bookings'), {
    ...data,
    status: 'pending',
    createdAt: serverTimestamp(),
  });
}

/** Save a contact form submission to Firestore → /contacts */
export async function saveContact(data: ContactData): Promise<DocumentReference> {
  return addDoc(collection(db, 'contacts'), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
