'use client';

import { MapPin, MessageCircle, Phone, Mail, FileText } from 'lucide-react';
import { shop } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const mapQuery = encodeURIComponent(shop.address);

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          num="05"
          title="Visit or"
          accent="Reach Out"
          blurb="Drop by the counter, or message us your part number / vehicle model on WhatsApp."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-panel border border-chrome/15 rounded-md p-7 h-full flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-hazard shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-display font-semibold text-paper">Address</p>
                  <p className="text-sm text-chrome/80 mt-1 leading-relaxed">{shop.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="text-hazard shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-display font-semibold text-paper">WhatsApp</p>
                  <a
                    href={`https://wa.me/${shop.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-chrome/80 hover:text-hazard transition-colors"
                  >
                    {shop.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-hazard shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-display font-semibold text-paper">Call</p>
                  <a href={`tel:+${shop.phone}`} className="text-sm text-chrome/80 hover:text-hazard transition-colors">
                    {shop.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-hazard shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-display font-semibold text-paper">Email</p>
                  <p className="text-sm text-chrome/50">{shop.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileText className="text-hazard shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-display font-semibold text-paper">GST No.</p>
                  <p className="text-sm text-chrome/50">{shop.gst}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${shop.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 bg-hazard text-asphalt font-display font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                Message Us Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[360px] rounded-md overflow-hidden border border-chrome/15">
              <iframe
                title="High Power : Automobile location"
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360, filter: 'grayscale(0.3) invert(0.92) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
