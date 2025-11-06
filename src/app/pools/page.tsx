"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Droplets, Waves, Sparkles, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PoolsPage() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Droplets,
      title: language === 'en' ? 'Custom Design' : 'طراحی سفارشی',
      description: language === 'en' ? 'Tailored to your space and preferences' : 'متناسب با فضا و ترجیحات شما',
    },
    {
      icon: Waves,
      title: language === 'en' ? 'Advanced Filtration' : 'فیلتراسیون پیشرفته',
      description: language === 'en' ? 'Crystal clear water guaranteed' : 'آب کریستالی تضمین شده',
    },
    {
      icon: Sparkles,
      title: language === 'en' ? 'LED Lighting' : 'نورپردازی LED',
      description: language === 'en' ? 'Customizable underwater lighting' : 'نورپردازی زیر آب قابل تنظیم',
    },
    {
      icon: Shield,
      title: language === 'en' ? '10-Year Warranty' : 'گارانتی ۱۰ ساله',
      description: language === 'en' ? 'Comprehensive coverage and support' : 'پوشش و پشتیبانی جامع',
    },
  ];

  const poolTypes = [
    {
      title: language === 'en' ? 'Infinity Pool' : 'استخر بی‌نهایت',
      description: language === 'en' ? 'Stunning edge design with panoramic views' : 'طراحی لبه خیره‌کننده با منظره پانوراما',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      price: language === 'en' ? '' : ' ',
    },
    {
      title: language === 'en' ? 'Lap Pool' : 'استخر ورزشی',
      description: language === 'en' ? 'Perfect for exercise and training' : 'مناسب برای ورزش و تمرین',
      image: 'https://th.bing.com/th/id/R.e60932df51b28af3ecb29d2255bda33f?rik=9xhrytYH%2ffJgdg&riu=http%3a%2f%2fi0.wp.com%2fwww.myaustinelite.com%2fwp-content%2fuploads%2f2015%2f01%2frooftop-lap-pool-designs-with-wood-deck.jpg%3fresize%3d1024%252C768&ehk=J0CxoJOrOahWk70n1F7LDW04%2b9vbAmnxnB13xuiLrCU%3d&risl=&pid=ImgRaw&r=0',
      price: language === 'en' ? 'From $35,000' : 'از ۳۵،۰۰۰ دلار',
    },
    {
      title: language === 'en' ? 'Resort Pool' : 'استخر ریزورت',
      description: language === 'en' ? 'Large-scale luxury pool complexes' : 'مجموعه‌های استخر لوکس در مقیاس بزرگ',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop',
      price: language === 'en' ? 'From $80,000' : 'از ۸۰،۰۰۰ دلار',
    },
    {
      title: language === 'en' ? 'Indoor Pool' : 'استخر سرپوشیده',
      description: language === 'en' ? 'Year-round swimming comfort' : 'راحتی شنا در تمام فصول',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
      price: language === 'en' ? 'From $60,000' : 'از ۶۰،۰۰۰ دلار',
    },
  ];

  const benefits = [
    language === 'en' ? 'Professional design and consultation' : 'طراحی و مشاوره حرفه‌ای',
    language === 'en' ? 'High-quality materials and equipment' : 'مواد و تجهیزات با کیفیت بالا',
    language === 'en' ? 'Expert installation team' : 'تیم نصب متخصص',
    language === 'en' ? 'Automated control systems' : 'سیستم‌های کنترل خودکار',
    language === 'en' ? 'Energy-efficient heating' : 'گرمایش کم‌مصرف',
    language === 'en' ? 'Lifetime maintenance support' : 'پشتیبانی تعمیر و نگهداری مادام‌العمر',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&h=1080&fit=crop"
            alt="Pool Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Droplets className="w-20 h-20 text-blue-400 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {language === 'en' ? 'Swimming Pools' : 'استخرهای شنا'}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {language === 'en'
              ? 'Transform your backyard into a luxurious oasis with our custom-designed swimming pools. From infinity pools to lap pools, we create aquatic masterpieces.'
              : 'حیاط خلوت خود را به یک نخلستان لوکس با استخرهای شنای سفارشی ما تبدیل کنید. از استخرهای بی‌نهایت تا استخرهای ورزشی، ما شاهکارهای آبی می‌سازیم.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-lg blue-glow">
              {language === 'en' ? 'Request Quote' : 'درخواست قیمت'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Premium Features' : 'ویژگی‌های پرمیوم'}
            </h2>
            <p className="text-xl text-blue-400">
              {language === 'en' ? 'Excellence in every detail' : 'برتری در هر جزئیات'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pool Types */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Pool Collections' : 'مجموعه‌های استخر'}
            </h2>
            <p className="text-xl text-blue-400">
              {language === 'en' ? 'Choose the perfect pool for your space' : 'استخر مناسب برای فضای خود را انتخاب کنید'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {poolTypes.map((pool, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={pool.image}
                    alt={pool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{pool.title}</h3>
                  <p className="text-gray-300 mb-4">{pool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">{pool.price}</span>
                    <Link href="/contact">
                      <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                        {language === 'en' ? 'Learn More' : 'بیشتر بدانید'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-y border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {language === 'en' ? 'Why Choose IRAN DIVE?' : 'چرا ایران دایو را انتخاب کنیم؟'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-black/30 p-6 rounded-lg">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Ready to Dive In?' : 'آماده شیرجه هستید؟'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Contact us today for a free consultation and bring your dream pool to life.'
              : 'همین امروز برای مشاوره رایگان با ما تماس بگیرید و استخر رویایی خود را به واقعیت تبدیل کنید.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-lg blue-glow">
              {language === 'en' ? 'Get Started' : 'شروع کنید'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
