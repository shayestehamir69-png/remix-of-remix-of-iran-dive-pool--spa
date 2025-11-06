"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Flame, Thermometer, Wind, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SaunaPage() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Flame,
      title: language === 'en' ? 'Traditional & Modern' : 'سنتی و مدرن',
      description: language === 'en' ? 'Finnish and infrared sauna options' : 'گزینه‌های سونای فنلاندی و مادون قرمز',
    },
    {
      icon: Thermometer,
      title: language === 'en' ? 'Temperature Control' : 'کنترل دما',
      description: language === 'en' ? 'Precise digital temperature management' : 'مدیریت دقیق دمای دیجیتال',
    },
    {
      icon: Wind,
      title: language === 'en' ? 'Ventilation System' : 'سیستم تهویه',
      description: language === 'en' ? 'Advanced air circulation technology' : 'فناوری پیشرفته گردش هوا',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Health Benefits' : 'مزایای سلامتی',
      description: language === 'en' ? 'Detoxification and relaxation' : 'سم‌زدایی و آرامش',
    },
  ];

  const saunaTypes = [
    {
      title: language === 'en' ? 'Traditional Finnish Sauna' : 'سونای سنتی فنلاندی',
      description: language === 'en' ? 'Classic dry heat sauna with wood-burning or electric heater' : 'سونای گرمای خشک کلاسیک با بخاری چوب‌سوز یا برقی',
      image: 'https://th.bing.com/th/id/R.e6e1cbc687e8722047be2900516b7cd8?rik=wiuiy1%2b1Luih%2bA&pid=ImgRaw&r=0',
      price: language === 'en' ? 'From $15,000' : 'از ۱۵،۰۰۰ دلار',
    },
    {
      title: language === 'en' ? 'Infrared Sauna' : 'سونای مادون قرمز',
      description: language === 'en' ? 'Modern infrared technology for deeper penetration' : 'فناوری مادون قرمز مدرن برای نفوذ عمیق‌تر',
      image: 'https://tse3.mm.bing.net/th/id/OIP.bvBLcTCuc96F_2k940qA3gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? 'From $12,000' : 'از ۱۲،۰۰۰ دلار',
    },
    {
      title: language === 'en' ? 'Steam Room' : 'اتاق بخار',
      description: language === 'en' ? 'Luxurious steam room with aromatherapy options' : 'اتاق بخار لوکس با گزینه‌های معطر درمانی',
      image: 'https://th.bing.com/th/id/R.7a780e11d327edd1466ef3b052646c37?rik=47RoFCiAeZVbgA&pid=ImgRaw&r=0',
      price: language === 'en' ? 'From $18,000' : 'از ۱۸،۰۰۰ دلار',
    },
    {
      title: language === 'en' ? 'Outdoor Sauna' : 'سونای فضای باز',
      description: language === 'en' ? 'Weather-resistant outdoor sauna cabins' : 'کابین‌های سونای بیرونی مقاوم در برابر آب و هوا',
      image: 'https://tse1.mm.bing.net/th/id/OIP.Ht7AwhUCyEpaha9TWOnMDQHaFK?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? 'From $20,000' : 'از ۲۰،۰۰۰ دلار',
    },
  ];

  const benefits = [
    language === 'en' ? 'Customizable wood interior finishes' : 'تکمیل‌های داخلی چوبی قابل تنظیم',
    language === 'en' ? 'Energy-efficient heating systems' : 'سیستم‌های گرمایشی کم‌مصرف',
    language === 'en' ? 'LED chromotherapy lighting' : 'نورپردازی رنگ‌درمانی LED',
    language === 'en' ? 'Premium Canadian cedar or hemlock wood' : 'چوب سدر یا همالوک کانادایی پرمیوم',
    language === 'en' ? 'Built-in sound system options' : 'گزینه‌های سیستم صوتی داخلی',
    language === 'en' ? 'Professional installation and training' : 'نصب و آموزش حرفه‌ای',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-orange-950/20 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop"
            alt="Sauna Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Flame className="w-20 h-20 text-orange-400 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {language === 'en' ? 'Luxury Saunas' : 'سوناهای لوکس'}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {language === 'en'
              ? 'Experience ultimate relaxation with our premium sauna installations. From traditional Finnish saunas to modern infrared therapy rooms.'
              : 'آرامش نهایی را با نصب سوناهای پرمیوم ما تجربه کنید. از سوناهای سنتی فنلاندی تا اتاق‌های درمانی مادون قرمز مدرن.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Request Quote' : 'درخواست قیمت'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Sauna Features' : 'ویژگی‌های سونا'}
            </h2>
            <p className="text-xl text-orange-400">
              {language === 'en' ? 'Crafted for your wellness' : 'ساخته شده برای سلامت شما'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-orange-950/50 to-black border-orange-500/30 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-4 mx-auto mb-6">
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

      {/* Sauna Types */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Sauna Collections' : 'مجموعه‌های سونا'}
            </h2>
            <p className="text-xl text-orange-400">
              {language === 'en' ? 'Find your perfect wellness retreat' : 'پناهگاه سلامتی مناسب خود را پیدا کنید'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {saunaTypes.map((sauna, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-orange-950/50 to-black border-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={sauna.image}
                    alt={sauna.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{sauna.title}</h3>
                  <p className="text-gray-300 mb-4">{sauna.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">{sauna.price}</span>
                    <Link href="/contact">
                      <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
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
      <section className="relative py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border-y border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {language === 'en' ? 'What We Offer' : 'آنچه ما ارائه می‌دهیم'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-black/30 p-6 rounded-lg">
                  <Check className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Experience True Relaxation' : 'آرامش واقعی را تجربه کنید'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Transform your home into a wellness sanctuary with our luxury sauna installations.'
              : 'خانه خود را به یک پناهگاه سلامتی با نصب سوناهای لوکس ما تبدیل کنید.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Get Started' : 'شروع کنید'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
