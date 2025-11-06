"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Waves, Zap, Music, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function JacuzziPage() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Waves,
      title: language === 'en' ? 'Hydrotherapy Jets' : 'جت‌های آب‌درمانی',
      description: language === 'en' ? 'Powerful adjustable massage jets' : 'جت‌های ماساژ قابل تنظیم قدرتمند',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Energy Efficient' : 'کم‌مصرف',
      description: language === 'en' ? 'Advanced insulation and heating' : 'عایق‌بندی و گرمایش پیشرفته',
    },
    {
      icon: Music,
      title: language === 'en' ? 'Audio System' : 'سیستم صوتی',
      description: language === 'en' ? 'Bluetooth speakers and lighting' : 'بلندگوهای بلوتوث و نورپردازی',
    },
    {
      icon: Star,
      title: language === 'en' ? 'Premium Materials' : 'مواد پرمیوم',
      description: language === 'en' ? 'Acrylic and high-grade components' : 'اکریلیک و اجزای با کیفیت بالا',
    },
  ];

  const jacuzziTypes = [
    {
      title: language === 'en' ? 'Indoor Jacuzzi' : 'جکوزی داخلی',
      description: language === 'en' ? 'Integrated into your bathroom or spa room' : 'ادغام شده در حمام یا اتاق اسپای شما',
      image: 'https://th.bing.com/th/id/R.291c23438546b91749784446c5c98e31?rik=efPbxzePa3R0SQ&pid=ImgRaw&r=0',
      price: language === 'en' ? '' : '',
    },
    {
      title: language === 'en' ? 'Outdoor Hot Tub' : 'وان داغ بیرونی',
      description: language === 'en' ? 'Weather-resistant design for outdoor enjoyment' : 'طراحی مقاوم در برابر آب و هوا برای لذت در فضای باز',
      image: 'https://th.bing.com/th/id/R.4f424067e9ee0c812b8a173af1b4d0b0?rik=i3EgBifv34F3Hw&pid=ImgRaw&r=0',
      price: language === 'en' ? '' : '',
    },
    {
      title: language === 'en' ? 'Swim Spa' : 'اسپای شنا',
      description: language === 'en' ? 'Combined swimming pool and hot tub features' : 'ترکیب ویژگی‌های استخر شنا و جکوزی',
      image: 'https://hydropooldevon.co.uk/wp-content/uploads/2021/04/Swim-Spa-01-scaled.jpg',
      price: language === 'en' ? '' : '',
    },
    {
      title: language === 'en' ? 'Luxury Spa' : 'اسپای لوکس',
      description: language === 'en' ? 'High-end features with seating for 6-8 people' : 'ویژگی‌های پیشرفته با ظرفیت ۶-۸ نفر',
      image: 'https://www.rawcorporatehealth.com/wp-content/uploads/2015/12/Joule-Dallas.jpg',
      price: language === 'en' ? '' : '',
    },
  ];

  const benefits = [
    language === 'en' ? 'Multiple hydrotherapy jet configurations' : 'پیکربندی‌های متعدد جت آب‌درمانی',
    language === 'en' ? 'Digital control panels with wifi' : 'پانل‌های کنترل دیجیتال با وای‌فای',
    language === 'en' ? 'Ozone and UV water purification' : 'تصفیه آب با ازن و اشعه UV',
    language === 'en' ? 'LED mood lighting systems' : 'سیستم‌های نورپردازی LED',
    language === 'en' ? 'Insulated covers for energy savings' : 'پوشش‌های عایق برای صرفه‌جویی در انرژی',
    language === 'en' ? 'Comprehensive warranty and service' : 'گارانتی و خدمات جامع',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop"
            alt="Jacuzzi Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Waves className="w-20 h-20 text-purple-400 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {language === 'en' ? 'Luxury Jacuzzis' : 'جکوزی‌های لوکس'}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {language === 'en'
              ? 'Indulge in the ultimate relaxation experience with our premium jacuzzi and hot tub installations. Hydrotherapy meets luxury design.'
              : 'با نصب جکوزی‌ها و وان‌های داغ پرمیوم ما در تجربه آرامش نهایی غوطه‌ور شوید. آب‌درمانی با طراحی لوکس ترکیب می‌شود.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Request Quote' : 'درخواست قیمت'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Jacuzzi Features' : 'ویژگی‌های جکوزی'}
            </h2>
            <p className="text-xl text-purple-400">
              {language === 'en' ? 'Designed for your comfort' : 'طراحی شده برای راحتی شما'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-950/50 to-black border-purple-500/30 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-6">
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

      {/* Jacuzzi Types */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Jacuzzi Collections' : 'مجموعه‌های جکوزی'}
            </h2>
            <p className="text-xl text-purple-400">
              {language === 'en' ? 'Discover your perfect spa experience' : 'تجربه اسپای مناسب خود را کشف کنید'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jacuzziTypes.map((jacuzzi, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-950/50 to-black border-purple-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={jacuzzi.image}
                    alt={jacuzzi.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{jacuzzi.title}</h3>
                  <p className="text-gray-300 mb-4">{jacuzzi.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">{jacuzzi.price}</span>
                    <Link href="/contact">
                      <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
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
      <section className="relative py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-y border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {language === 'en' ? 'Premium Inclusions' : 'موارد پرمیوم شامل'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-black/30 p-6 rounded-lg">
                  <Check className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Create Your Spa Oasis' : 'نخلستان اسپای خود را بسازید'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Experience the therapeutic benefits of hydrotherapy in your own backyard.'
              : 'مزایای درمانی آب‌درمانی را در حیاط خلوت خود تجربه کنید.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Get Started' : 'شروع کنید'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
