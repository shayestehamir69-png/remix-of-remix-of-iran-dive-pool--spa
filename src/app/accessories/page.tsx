"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wrench, Package, Settings, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AccessoriesPage() {
  const { language } = useLanguage();

  const categories = [
    {
      icon: Settings,
      title: language === 'en' ? 'Pool Equipment' : 'تجهیزات استخر',
      description: language === 'en' ? 'Pumps, filters, and cleaning systems' : 'پمپ‌ها، فیلترها و سیستم‌های تمیزکاری',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Heating Systems' : 'سیستم‌های گرمایش',
      description: language === 'en' ? 'Energy-efficient water heaters' : 'آبگرمکن‌های کم‌مصرف',
    },
    {
      icon: Package,
      title: language === 'en' ? 'Chemicals & Care' : 'مواد شیمیایی و مراقبت',
      description: language === 'en' ? 'Water treatment and maintenance' : 'تصفیه آب و نگهداری',
    },
    {
      icon: Wrench,
      title: language === 'en' ? 'Spare Parts' : 'قطعات یدکی',
      description: language === 'en' ? 'Original replacement components' : 'اجزای جایگزین اصلی',
    },
  ];

  const products = [
    {
      title: language === 'en' ? 'Steel Filtration Filters' : 'انواع فیلتر تصویه استیل',
      description: language === 'en' ? 'High-grade stainless steel water filters' : 'فیلترهای آب استیل ضدزنگ درجه یک',
      image: 'https://greenvistaliving.com/cdn/shop/files/WHF3T-FG.png?v=1760262816',
      price: language === 'en' ? '$899' : '۸۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Ladders' : 'انواع نردبان استخری',
      description: language === 'en' ? 'Stainless steel safety ladders' : 'نردبان‌های ایمنی استیل ضدزنگ',
      image: 'https://tse4.mm.bing.net/th/id/OIP.RcxJLy38uTSxdvWu0dYIVAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$399' : '۳۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Pump Strainers' : 'انواع صافی پمپ',
      description: language === 'en' ? 'Heavy-duty pump basket strainers' : 'صافی‌های سبدی پمپ سنگین',
      image: 'https://tse1.mm.bing.net/th/id/OIP.9Kw-8gTqC4g3XzYvKJx9BAHaE7?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$129' : '۱۲۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Grills' : 'انواع گریل استخری',
      description: language === 'en' ? 'Stainless steel pool drain grills' : 'گریل تخلیه استخر از استیل ضدزنگ',
      image: 'https://tse2.mm.bing.net/th/id/OIP.qXk2bPcpZQVqNWR9E8J7xAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$179' : '۱۷۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Skimmers' : 'انواع اسکیمر',
      description: language === 'en' ? 'Automatic surface cleaning skimmers' : 'اسکیمرهای تمیزکاری سطح خودکار',
      image: 'https://tse2.mm.bing.net/th/id/OIP.qXk2bPcpZQVqNWR9E8J7xAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$449' : '۴۴۹ دلار',
    },
    {
      title: language === 'en' ? 'Fountain Nozzles' : 'انواع نازل های فواره',
      description: language === 'en' ? 'Decorative water fountain nozzles' : 'نازل‌های تزئینی فواره آب',
      image: 'https://i5.walmartimages.com/asr/03f04c5f-0bec-4b82-9b0c-ac269794a2d3.a95bb2baf7731b8b1d29757dd98b1fb1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: language === 'en' ? '$249' : '۲۴۹ دلار',
    },
    {
      title: language === 'en' ? 'Curtain Fountains' : 'انواع فواره های پرده ای',
      description: language === 'en' ? 'Water curtain fountain systems' : 'سیستم‌های فواره پرده آب',
      image: 'https://i5.walmartimages.com/asr/03f04c5f-0bec-4b82-9b0c-ac269794a2d3.a95bb2baf7731b8b1d29757dd98b1fb1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: language === 'en' ? '$1,299' : '۱،۲۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Covers' : 'انواع کاورهای استخری',
      description: language === 'en' ? 'Automatic safety covers with motor' : 'پوشش‌های ایمنی خودکار با موتور',
      image: 'https://th.bing.com/th/id/R.fb8dbbcce17e4a69deff891541f50c8d?rik=wZOX3VPa72BmsQ&pid=ImgRaw&r=0',
      price: language === 'en' ? '$2,999' : '۲،۹۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Chlorine Floaters' : 'انواع شناورهای کلر',
      description: language === 'en' ? 'Automatic chlorine dispensing floaters' : 'شناورهای توزیع خودکار کلر',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$49' : '۴۹ دلار',
    },
    {
      title: language === 'en' ? 'Analog & Digital Waterproof Thermometers' : 'دماسنج واترپروف آنالوگ و دیجیتال',
      description: language === 'en' ? 'Digital and analog waterproof thermometers' : 'دماسنج‌های ضدآب دیجیتال و آنالوگ',
      image: 'https://tse2.mm.bing.net/th/id/OIP.VQqMQjKL8dKr9p7U9N2G6gHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$79' : '۷۹ دلار',
    },
    {
      title: language === 'en' ? 'Powder & Tablet Chlorine' : 'انواع کلر پودری و قرصی',
      description: language === 'en' ? 'Pool chlorine in powder and tablet form' : 'کلر استخر به صورت پودر و قرص',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$39' : '۳۹ دلار',
    },
    {
      title: language === 'en' ? 'Water pH Reducers' : 'انواع کاهش دهنده pH آب',
      description: language === 'en' ? 'Water pH balance reducers' : 'کاهش‌دهنده‌های تعادل pH آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$29' : '۲۹ دلار',
    },
    {
      title: language === 'en' ? 'Water Revival Consumables' : 'انواع مواد مصرفی جهت احیای آب',
      description: language === 'en' ? 'Consumables for water treatment and revival' : 'مواد مصرفی برای تصفیه و احیای آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$69' : '۶۹ دلار',
    },
    {
      title: language === 'en' ? 'First Grade Mineral Silica' : 'سیلیس معدنی درجه یک',
      description: language === 'en' ? 'Premium grade filter silica sand' : 'شن سیلیسی فیلتر درجه پرمیوم',
      image: 'https://greenvistaliving.com/cdn/shop/files/WHF3T-FG.png?v=1760262816',
      price: language === 'en' ? '$89' : '۸۹ دلار',
    },
    {
      title: language === 'en' ? 'LED Pool Lights' : 'چراغ‌های LED استخر',
      description: language === 'en' ? 'RGB color-changing underwater lighting' : 'نورپردازی زیر آب با تغییر رنگ RGB',
      image: 'https://i5.walmartimages.com/asr/03f04c5f-0bec-4b82-9b0c-ac269794a2d3.a95bb2baf7731b8b1d29757dd98b1fb1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: language === 'en' ? '$299' : '۲۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Automatic Pool Cleaner' : 'تمیزکننده خودکار استخر',
      description: language === 'en' ? 'Robotic cleaning system for pools' : 'سیستم تمیزکاری روباتیک برای استخرها',
      image: 'https://tse3.mm.bing.net/th/id/OIP.fbmFpdgP-XyY8TjQvErnDQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$1,499' : '۱،۴۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Sauna Heater' : 'بخاری سونا',
      description: language === 'en' ? 'Electric or wood-burning heaters' : 'بخاری برقی یا چوب‌سوز',
      image: 'https://tse2.mm.bing.net/th/id/OIP.U0qgUv6xAYxbv-ZEkP4QBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$1,299' : '۱،۲۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Jacuzzi Jets' : 'جت‌های جکوزی',
      description: language === 'en' ? 'Replacement hydrotherapy jets' : 'جت‌های جایگزین آب‌درمانی',
      image: 'https://www.greatbayspas.com/wp-content/uploads/2022/11/bg-jet-underwater.jpg',
      price: language === 'en' ? '$199' : '۱۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Control Panel' : 'پانل کنترل',
      description: language === 'en' ? 'Digital spa control systems' : 'سیستم‌های کنترل دیجیتال اسپا',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      price: language === 'en' ? '$749' : '۷۴۹ دلار',
    },
    {
      title: language === 'en' ? 'Water Testing Kit' : 'کیت تست آب',
      description: language === 'en' ? 'Complete water chemistry analyzer' : 'آنالیزگر کامل شیمی آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$89' : '۸۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Pump' : 'پمپ استخر',
      description: language === 'en' ? 'Energy-efficient circulation pump' : 'پمپ گردش انرژی‌کارآمد',
      image: 'https://tse1.mm.bing.net/th/id/OIP.9Kw-8gTqC4g3XzYvKJx9BAHaE7?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$599' : '۵۹۹ دلار',
    },
    {
      title: language === 'en' ? 'Spa Aromatherapy' : 'رایحه‌درمانی اسپا',
      description: language === 'en' ? 'Essential oils and dispensers' : 'روغن‌های ضروری و توزیع‌کننده‌ها',
      image: 'https://tse1.mm.bing.net/th/id/OIP.6yGZGHiFWLvvNT8UjmXwcAHaE8?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$129' : '۱۲۹ دلار',
    },
    {
      title: language === 'en' ? 'Sauna Accessories' : 'اکسسوری‌های سونا',
      description: language === 'en' ? 'Buckets, ladles, and thermometers' : 'سطل‌ها، ملاقه‌ها و دماسنج‌ها',
      image: 'https://tse2.mm.bing.net/th/id/OIP.h2KkODjCwrCLVQXR8p9CpQHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$159' : '۱۵۹ دلار',
    },
    {
      title: language === 'en' ? 'Pool Vacuum Head' : 'سر جاروبرقی استخر',
      description: language === 'en' ? 'Heavy-duty cleaning attachment' : 'اتصال تمیزکاری سنگین',
      image: 'https://tse3.mm.bing.net/th/id/OIP.wXTLc0BM3B5gYn2yqZ5pRAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$89' : '۸۹ دلار',
    },
    {
      title: language === 'en' ? 'Spa Headrest' : 'بالشتک سر اسپا',
      description: language === 'en' ? 'Waterproof comfort pillows' : 'بالشت‌های راحتی ضدآب',
      image: 'https://tse3.mm.bing.net/th/id/OIP.4jhtMz5r8UNFCnr8H4r8AAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$49' : '۴۹ دلار',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-green-950/20 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Wrench className="w-20 h-20 text-green-400 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {language === 'en' ? 'Pool & Spa Accessories' : 'اکسسوری‌های استخر و اسپا'}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {language === 'en'
              ? 'Complete your aquatic experience with our extensive range of premium accessories, equipment, and maintenance products.'
              : 'تجربه آبی خود را با طیف گسترده‌ای از اکسسوری‌ها، تجهیزات و محصولات نگهداری پرمیوم ما کامل کنید.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Contact Us' : 'تماس با ما'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Product Categories' : 'دسته‌بندی محصولات'}
            </h2>
            <p className="text-xl text-green-400">
              {language === 'en' ? 'Everything you need for maintenance' : 'همه چیز برای نگهداری'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-green-950/50 to-black border-green-500/30 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Featured Products' : 'محصولات ویژه'}
            </h2>
            <p className="text-xl text-green-400">
              {language === 'en' ? 'Premium quality accessories' : 'اکسسوری‌های با کیفیت پرمیوم'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-green-950/50 to-black border-green-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    <Button size="sm" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                      {language === 'en' ? 'Details' : 'جزئیات'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {language === 'en' ? 'Our Services' : 'خدمات ما'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-5 mx-auto mb-4">
                  <Package className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'en' ? 'Free Delivery' : 'تحویل رایگان'}
                </h3>
                <p className="text-gray-400">
                  {language === 'en' ? 'On orders over $500' : 'برای سفارش‌های بالای ۵۰۰ دلار'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-5 mx-auto mb-4">
                  <Settings className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'en' ? 'Installation' : 'نصب'}
                </h3>
                <p className="text-gray-400">
                  {language === 'en' ? 'Professional setup service' : 'خدمات نصب حرفه‌ای'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-5 mx-auto mb-4">
                  <Wrench className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'en' ? 'Maintenance' : 'نگهداری'}
                </h3>
                <p className="text-gray-400">
                  {language === 'en' ? 'Regular service plans' : 'برنامه‌های خدمات منظم'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Need Help Finding the Right Product?' : 'به کمک برای یافتن محصول مناسب نیاز دارید؟'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Our experts are here to help you choose the perfect accessories for your pool, sauna, or jacuzzi.'
              : 'متخصصان ما اینجا هستند تا به شما در انتخاب اکسسوری‌های مناسب برای استخر، سونا یا جکوزی کمک کنند.'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-lg">
              {language === 'en' ? 'Contact Expert' : 'تماس با متخصص'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}