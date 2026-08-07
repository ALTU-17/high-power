'use client';

import { MessageCircle } from 'lucide-react';
import { shop } from '@/lib/data';

export default function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${shop.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with High Power : Automobile on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg
       shadow-black/40 animate-pulseRing hover:scale-105 transition-transform"
    >
      <MessageCircle className="text-white" size={26} strokeWidth={2.2} />
    </a>
  );
}
