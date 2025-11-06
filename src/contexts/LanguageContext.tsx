"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.pools': 'Pools',
    'nav.sauna': 'Sauna',
    'nav.jacuzzi': 'Jacuzzi',
    'nav.accessories': 'Accessories',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'IRAN DIVE',
    'hero.subtitle': 'Dive Into Luxury',
    'hero.description': 'Premium Swimming Pools, Saunas, and Jacuzzis',
    'hero.cta': 'Explore Our Services',
    'hero.contact': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Excellence in Every Drop',
    'services.pools.title': 'Swimming Pools',
    'services.pools.desc': 'Custom-designed luxury pools for your dream space',
    'services.sauna.title': 'Saunas',
    'services.sauna.desc': 'Traditional and modern sauna installations',
    'services.jacuzzi.title': 'Jacuzzis',
    'services.jacuzzi.desc': 'Premium hot tubs and spa solutions',
    'services.accessories.title': 'Accessories',
    'services.accessories.desc': 'Complete range of pool and spa equipment',
    
    // Stats
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years of Experience',
    'stats.warranty': 'Warranty Period',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Space?',
    'cta.description': 'Let us bring your dream pool, sauna, or jacuzzi to life with our expert craftsmanship.',
    'cta.button': 'Get Started Today',
    
    // Resources
    'resources.title': 'Resources & Connect',
    'resources.subtitle': 'Stay Connected and Learn More',
    'resources.instagram': 'Follow us on Instagram',
    'resources.instagram.desc': 'See our latest projects and behind-the-scenes content',
    'resources.instagram.handle': '@irandive',
    'resources.telegram': 'Join our Telegram Channel',
    'resources.telegram.desc': 'Get updates and exclusive content',
    'resources.telegram.handle': '@irandivecompany',
    'resources.whatsapp': 'WhatsApp Business',
    'resources.whatsapp.desc': 'Direct messaging for quick support',
    'resources.whatsapp.phone': '+98 991 290 5482',
    'resources.resume': 'Download Resume',
    'resources.resume.desc': 'Company profile and credentials',
    'resources.catalog': 'Download Catalog',
    'resources.catalog.desc': 'Complete product catalog and pricing',
    'resources.follow': 'Follow Us',
    'resources.join': 'Join Channel',
    'resources.message': 'Message Us',
    'resources.download': 'Download',
    
    // Footer
    'footer.about': 'About IRAN DIVE',
    'footer.about.text': 'Leading provider of luxury swimming pools, saunas, and jacuzzis in Iran.',
    'footer.quick': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact.title': 'Contact Info',
    'footer.connect.title': 'Connect With Us',
    'footer.whatsapp': 'WhatsApp Business',
    'footer.telegram': 'Telegram Channel',
    'footer.location': 'Location',
    'footer.map': 'View on Balad Map',
    'footer.rights': '© 2024 IRAN DIVE. All rights reserved.',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.about': 'درباره ما',
    'nav.gallery': 'گالری',
    'nav.pools': 'استخر',
    'nav.sauna': 'سونا',
    'nav.jacuzzi': 'جکوزی',
    'nav.accessories': 'اکسسوری',
    'nav.contact': 'تماس با ما',
    
    // Hero Section
    'hero.title': 'ایران دایو',
    'hero.subtitle': 'شیرجه در لوکس',
    'hero.description': 'استخرهای شنا، سونا و جکوزی‌های پرمیوم',
    'hero.cta': 'خدمات ما',
    'hero.contact': 'تماس با ما',
    
    // Services
    'services.title': 'خدمات ما',
    'services.subtitle': 'برتری در هر قطره',
    'services.pools.title': 'استخرهای شنا',
    'services.pools.desc': 'استخرهای لوکس سفارشی برای فضای رویایی شما',
    'services.sauna.title': 'سونا',
    'services.sauna.desc': 'نصب سوناهای سنتی و مدرن',
    'services.jacuzzi.title': 'جکوزی',
    'services.jacuzzi.desc': 'راه‌حل‌های جکوزی و اسپای پرمیوم',
    'services.accessories.title': 'اکسسوری',
    'services.accessories.desc': 'طیف کاملی از تجهیزات استخر و اسپا',
    
    // Stats
    'stats.projects': 'پروژه تکمیل شده',
    'stats.clients': 'مشتری راضی',
    'stats.experience': 'سال تجربه',
    'stats.warranty': 'دوره گارانتی',
    
    // CTA Section
    'cta.title': 'آماده تحول فضای خود هستید؟',
    'cta.description': 'اجازه دهید استخر، سونا یا جکوزی رویایی شما را با مهارت تخصصی خود به واقعیت تبدیل کنیم.',
    'cta.button': 'همین امروز شروع کنید',
    
    // Resources
    'resources.title': 'منابع و ارتباط',
    'resources.subtitle': 'با ما در ارتباط باشید و بیشتر بدانید',
    'resources.instagram': 'ما را در اینستاگرام دنبال کنید',
    'resources.instagram.desc': 'آخرین پروژه‌ها و محتوای پشت صحنه ما',
    'resources.instagram.handle': '@irandive',
    'resources.telegram': 'عضویت در کانال تلگرام',
    'resources.telegram.desc': 'دریافت به‌روزرسانی‌ها و محتوای ویژه',
    'resources.telegram.handle': '@irandivecompany',
    'resources.whatsapp': 'واتساپ بیزینس',
    'resources.whatsapp.desc': 'پیام مستقیم برای پشتیبانی سریع',
    'resources.whatsapp.phone': '۰۹۹۱۲۹۰۵۴۸۲',
    'resources.resume': 'دانلود رزومه',
    'resources.resume.desc': 'پروفایل و مدارک شرکت',
    'resources.catalog': 'دانلود کاتالوگ',
    'resources.catalog.desc': 'کاتالوگ کامل محصولات و قیمت‌ها',
    'resources.follow': 'دنبال کنید',
    'resources.join': 'عضویت',
    'resources.message': 'پیام دهید',
    'resources.download': 'دانلود',
    
    // Footer
    'footer.about': 'درباره ایران دایو',
    'footer.about.text': 'ارائه‌دهنده پیشرو استخرهای شنا، سونا و جکوزی‌های لوکس در ایران.',
    'footer.quick': 'لینک‌های سریع',
    'footer.services': 'خدمات',
    'footer.contact.title': 'اطلاعات تماس',
    'footer.connect.title': 'ارتباط با ما',
    'footer.whatsapp': 'واتساپ بیزینس',
    'footer.telegram': 'کانال تلگرام',
    'footer.location': 'موقعیت مکانی',
    'footer.map': 'مشاهده در بلد',
    'footer.rights': '© ۲۰۲۴ ایران دایو. تمامی حقوق محفوظ است.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set HTML direction based on language
    document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}