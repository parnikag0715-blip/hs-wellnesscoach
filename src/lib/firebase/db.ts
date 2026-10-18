// Lead and Booking helper functions (Self-contained / Firebase removed)
// Data submissions can be handled via API routes, WhatsApp or external services.

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

/** Save a new consultation booking */
export async function saveBooking(data: BookingData): Promise<{ id: string }> {
  // Store in localStorage if in browser environment for demo/offline retention
  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('hs_bookings') || '[]');
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem('hs_bookings', JSON.stringify(existing));
    } catch {
      // ignore
    }
  }
  return { id: `booking_${Date.now()}` };
}

/** Save a contact form submission */
export async function saveContact(data: ContactData): Promise<{ id: string }> {
  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('hs_contacts') || '[]');
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem('hs_contacts', JSON.stringify(existing));
    } catch {
      // ignore
    }
  }
  return { id: `contact_${Date.now()}` };
}
