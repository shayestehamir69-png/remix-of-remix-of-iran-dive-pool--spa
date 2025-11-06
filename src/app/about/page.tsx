"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, Target, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: language === 'en' ? 'Excellence' : 'برتری',
      description: language === 'en' ? 'We strive for perfection in every project we undertake.' : 'ما در هر پروژه‌ای که انجام می‌دهیم به دنبال کمال هستیم.',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Customer Focus' : 'تمرکز بر مشتری',
      description: language === 'en' ? 'Your satisfaction is our top priority and drives everything we do.' : 'رضایت شما اولویت اصلی ما است و همه کارهای ما را هدایت می‌کند.',
    },
    {
      icon: Target,
      title: language === 'en' ? 'Innovation' : 'نوآوری',
      description: language === 'en' ? 'We embrace cutting-edge technology and design trends.' : 'ما از فناوری‌های پیشرفته و روندهای طراحی استفاده می‌کنیم.',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Passion' : 'اشتیاق',
      description: language === 'en' ? 'We love what we do and it shows in our craftsmanship.' : 'ما عاشق کاری هستیم که انجام می‌دهیم و این در کار ما نمایان است.',
    },
  ];

  const team = [
    {
      name: language === 'en' ? 'Mohammad Rezaei' : 'محمد رضایی',
      role: language === 'en' ? 'CEO & Founder' : 'مدیرعامل و بنیانگذار',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: language === 'en' ? 'Sara Ahmadi' : 'سارا احمدی',
      role: language === 'en' ? 'Head of Design' : 'رئیس طراحی',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: language === 'en' ? 'Ali Karimi' : 'علی کریمی',
      role: language === 'en' ? 'Technical Director' : 'مدیر فنی',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: language === 'en' ? 'Nazanin Hosseini' : 'نازنین حسینی',
      role: language === 'en' ? 'Customer Relations' : 'روابط مشتریان',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {language === 'en' ? 'About IRAN DIVE' : 'درباره ایران دایو'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'For over 50 years, IRAN DIVE has been the leading provider of luxury swimming pools, saunas, and jacuzzis in Iran. Our commitment to excellence and innovation has made us the trusted choice for homeowners and businesses alike.'
                : 'بیش از ۵۰ سال است که ایران دایو ارائه‌دهنده پیشرو استخرهای شنا، سونا و جکوزی‌های لوکس در ایران بوده است. تعهد ما به برتری و نوآوری باعث شده است که انتخاب مورد اعتماد صاحبان خانه و مشاغل باشیم.'}
            </p>
          </div>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {language === 'en' ? 'Our Story' : 'داستان ما'}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Iran Dive Company joined the Water and Wastewater Syndicate in 1973 (registration No. 16964). With a strong engineering team, the company operates as a contractor in the design and construction of aquatic and sports complexes — including public and private swimming pools, water parks, jacuzzis, and dry and steam saunas — as well as in the development of advanced water and wastewater treatment systems. Iran Dive is also active in operation, maintenance, and sales of all related equipment and spare parts, and is fully prepared to undertake any project throughout Iran and abroad. Stainless steel filtration systems and stainless steel heat exchangers are offered with a 10-year warranty.'
                  : 'ایران دایو در سال ۱۳۸۸ با یک چشم‌انداز ساده تاسیس شد: آوردن لوکس آبی در سطح جهانی به خانه‌ها و مشاغل ایرانی. آنچه به عنوان یک کارگاه کوچک شروع شد به یکی از معتبرترین نام‌ها در صنعت تبدیل شده است.'}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en'
                  ? 'Today, we continue to push boundaries with innovative designs, cutting-edge technology, and uncompromising quality. Every project is a testament to our dedication and passion for creating extraordinary aquatic experiences.'
                  : 'امروزه ما به پیشرفت با طراحی‌های نوآورانه، فناوری پیشرفته و کیفیت بی‌نظیر ادامه می‌دهیم. هر پروژه گواهی بر تعهد و اشتیاق ما برای خلق تجربیات آبی خارق‌العاده است.'}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-10-22-at-23.19.10-1762286894598.jpeg?width=8000&height=8000&resize=contain"
                alt="Company Story"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Founder */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                alt="Mohammad Reza Bagheri Shayesteh"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {language === 'en' ? 'Mohammad Reza Bagheri Shayesteh' : 'محمد رضا باقری شایسته'}
                </h3>
                <p className="text-xl text-blue-400">
                  {language === 'en' ? 'Founder & Visionary' : 'بنیانگذار و چشم‌انداز'}
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">
                {language === 'en' ? 'Our Founder' : 'بنیانگذار ما'}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Mohammad Reza Bagheri Shayesteh founded IRAN DIVE with a passion for excellence and a vision to transform the aquatic luxury industry in Iran. With over 15 years of experience in engineering and design, he has led the company to become a pioneer in creating world-class swimming pools, saunas, and jacuzzis.'
                  : 'محمد رضا باقری شایسته، ایران دایو را با اشتیاق به برتری و چشم‌اندازی برای تحول صنعت لوکس آبی در ایران تاسیس کرد. با بیش از ۱۵ سال تجربه در مهندسی و طراحی، او شرکت را به پیشگامی در ایجاد استخرهای شنا، سونا و جکوزی‌های درجه یک جهانی تبدیل کرده است.'}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {language === 'en'
                  ? 'His commitment to innovation and quality has set new standards in the industry. Under his leadership, IRAN DIVE has completed hundreds of prestigious projects, earning the trust of clients across the country.'
                  : 'تعهد او به نوآوری و کیفیت، استانداردهای جدیدی را در صنعت تعیین کرده است. تحت رهبری او، ایران دایو صدها پروژه معتبر را به اتمام رسانده و اعتماد مشتریان را در سراسر کشور به دست آورده است.'}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en'
                  ? 'Beyond business, Mohammad Reza believes in creating spaces that enhance people\'s quality of life and bring joy to families. His philosophy of "Excellence in Every Detail" continues to drive IRAN DIVE forward.'
                  : 'فراتر از کسب‌وکار، محمد رضا به ایجاد فضاهایی اعتقاد دارد که کیفیت زندگی مردم را ارتقا داده و شادی را به خانواده‌ها می‌آورد. فلسفه او «برتری در هر جزئیات» همچنان ایران دایو را به جلو می‌برد.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Our Values' : 'ارزش‌های ما'}
            </h2>
            <p className="text-xl text-blue-400">
              {language === 'en' ? 'What drives us forward' : 'آنچه ما را پیش می‌برد'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-5 mx-auto mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'ّIn Memory Of Hossein Bagheri Shayesteh' : 'به یاد حسین باقری شایسته '}
            </h2>
            <p className="text-xl text-blue-400">
              {language === 'en' ? 'Meet the experts behind IRAN DIVE' : 'با متخصصان ایران دایو آشنا شوید'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Ready to Start Your Project?' : 'آماده شروع پروژه خود هستید؟'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Let our experienced team turn your vision into reality.'
              : 'اجازه دهید تیم با تجربه ما رویای شما را به واقعیت تبدیل کند.'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all blue-glow"
          >
            {t('nav.contact')}
          </a>
        </div>
      </section>
    </div>
  );
}