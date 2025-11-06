"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en' ? 'Thank you! We will contact you soon.' : 'متشکریم! به زودی با شما تماس خواهیم گرفت.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Address' : 'آدرس',
      content: language === 'en' ? 'Tehran, Iran - Premium District' : 'تهران، ایران - منطقه پرمیوم',
      link: 'https://balad.ir/p/5WRDVl95ODcW9q',
      isExternal: true,
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'تلفن',
      content: '+98 21 2221 0973',
      link: 'tel:+982122210973',
      isExternal: false,
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'ایمیل',
      content: 'info@irandive.ir',
      link: 'mailto:info@irandive.ir',
      isExternal: false,
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Working Hours' : 'ساعات کاری',
      content: language === 'en' ? 'Sat-Thu: 9:00 AM - 6:00 PM' : 'شنبه-پنج‌شنبه: ۹:۰۰ - ۱۸:۰۰',
      link: null,
      isExternal: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {language === 'en' ? 'Contact Us' : 'تماس با ما'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Get in touch with us to discuss your project. Our team is ready to help bring your vision to life.'
                : 'برای بحث در مورد پروژه خود با ما تماس بگیرید. تیم ما آماده است تا به شما کمک کند رویای خود را به واقعیت تبدیل کنید.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {language === 'en' ? 'Send Us a Message' : 'پیام خود را ارسال کنید'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {language === 'en' ? 'Full Name' : 'نام کامل'}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-black/50 border-blue-500/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {language === 'en' ? 'Email' : 'ایمیل'}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black/50 border-blue-500/30 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {language === 'en' ? 'Phone' : 'تلفن'}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-black/50 border-blue-500/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {language === 'en' ? 'Subject' : 'موضوع'}
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-black/50 border-blue-500/30 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {language === 'en' ? 'Message' : 'پیام'}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-black/50 border-blue-500/30 text-white min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group"
                  >
                    {language === 'en' ? 'Send Message' : 'ارسال پیام'}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const CardContent = (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3 flex-shrink-0">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    target={info.isExternal ? "_blank" : undefined}
                    rel={info.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <Card className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-6 hover:scale-105 hover:border-blue-400/50 transition-all cursor-pointer">
                      {CardContent}
                    </Card>
                  </a>
                ) : (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-6 hover:scale-105 transition-transform"
                  >
                    {CardContent}
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-4 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              {language === 'en' ? 'Map Location' : 'موقعیت نقشه'}
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://balad.ir/embed?p=5WRDVl95ODcW9q"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}