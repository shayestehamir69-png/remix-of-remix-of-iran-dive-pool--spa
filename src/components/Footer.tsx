"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-black to-blue-950/20 border-t border-blue-500/20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand with Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-10-22-at-23.19.10-1762286894598.jpeg?width=8000&height=8000&resize=contain"
                  alt="IRAN DIVE Logo"
                  width={48}
                  height={48}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wider">IRAN DIVE</span>
                <span className="text-xs text-blue-400">{language === 'en' ? 'Luxury Aquatics' : 'آبی لوکس'}</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.about.text')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/irandive.co?igsh=bWZoNWJvcWVuZ3Vn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quick')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pools" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.pools')}
                </Link>
              </li>
              <li>
                <Link href="/sauna" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.sauna')}
                </Link>
              </li>
              <li>
                <Link href="/jacuzzi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.jacuzzi')}
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t('nav.accessories')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="https://balad.ir/p/5WRDVl95ODcW9q" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tehran, Iran</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+982122210973"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                  <span className="text-sm">+98 21 2221 0973</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@irandive.ir"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                  <span className="text-sm">info@irandive.ir</span>
                </a>
              </li>
            </ul>

            {/* Connect With Us */}
            <h3 className="text-white font-semibold mb-4">{t('footer.connect.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/989912905482" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm group">
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  {t('footer.whatsapp')}
                </a>
              </li>
              <li>
                <a href="https://t.me/irandivecompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                  <Send className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  {t('footer.telegram')}
                </a>
              </li>
              <li>
                <a href="https://balad.ir/p/5WRDVl95ODcW9q" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  {t('footer.map')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/20 text-center">
          <p className="text-gray-400 text-sm">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}