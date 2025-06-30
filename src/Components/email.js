// email.js
import emailjs from '@emailjs/browser';

export function sendEmail(formData) {
  return emailjs.send(
    'service_n4o3qt8',    // e.g., 'service_xxx123'
    'template_ewy42m8',   // e.g., 'template_abcd'
    formData,
    '5DIc3xt5b2_lr3pSS'     // e.g., 'ABC123xyz456'
  );
}
