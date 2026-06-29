import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100, 'Company name is too long').optional(),
  role: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the privacy policy' }),
  }),
  turnstileToken: z.string().min(1, 'Please complete the CAPTCHA'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
