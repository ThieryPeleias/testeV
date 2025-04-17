'use client';

import { useTranslation } from 'next-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  const { t } = useTranslation('common');

  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://virtuart4d.com/wp-content/uploads/2024/08/BackgroundMenu-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
        }}
      ></div>
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white" style={{ opacity: 1 }}>
          {t('cta.title')}
        </h2>
        <p className="text-lg text-white mb-6">
          {t('cta.description')}
        </p>
        <Link href={'/contact'}>
          <Button
            className="bg-[#444444] text-white hover:bg-[#007586] transition-colors duration-300"
            variant="default"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}

