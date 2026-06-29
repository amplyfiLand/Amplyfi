import type { ContactFormData } from '../model/schema';

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitContact(data: ContactFormData): Promise<SubmitResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as { error?: string };
    if (!res.ok) {
      return { ok: false, message: json.error ?? 'Something went wrong. Please try again.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: 'Network error. Please check your connection.' };
  }
}
