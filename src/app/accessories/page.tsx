"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wrench, Package, Settings, Zap, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Link from 'next/link';

export default function AccessoriesPage() {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

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
      details: language === 'en' 
        ? 'Professional-grade stainless steel filtration system designed for maximum water purity. Features corrosion-resistant materials, multi-layer filtering, and easy maintenance access. Suitable for residential and commercial pools.'
        : 'سیستم تصفیه استیل ضدزنگ حرفه‌ای طراحی شده برای حداکثر خلوص آب. دارای مواد مقاوم در برابر خوردگی، فیلتراسیون چندلایه و دسترسی آسان برای نگهداری. مناسب برای استخرهای مسکونی و تجاری.'
    },
    {
      title: language === 'en' ? 'Pool Ladders' : 'انواع نردبان استخری',
      description: language === 'en' ? 'Stainless steel safety ladders' : 'نردبان‌های ایمنی استیل ضدزنگ',
      image: 'https://th.bing.com/th/id/OIP.FvoW55_ETV5OpwxJrEoH6AHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$399' : '۳۹۹ دلار',
      details: language === 'en'
        ? 'Heavy-duty pool ladders constructed from marine-grade stainless steel. Non-slip steps, comfortable handrails, and secure mounting system. Available in 3 to 6 step configurations.'
        : 'نردبان‌های استخر سنگین ساخته شده از استیل ضدزنگ دریایی. پله‌های ضدلغزش، دسته‌های راحت و سیستم نصب ایمن. در پیکربندی ۳ تا ۶ پله موجود است.'
    },
    {
      title: language === 'en' ? 'Pump Strainers' : 'انواع صافی پمپ',
      description: language === 'en' ? 'Heavy-duty pump basket strainers' : 'صافی‌های سبدی پمپ سنگین',
      image: 'https://th.bing.com/th/id/R.428e1761450cb97a72fcf31271d913ee?rik=SJHB9sWMPB7WYw&pid=ImgRaw&r=0',
      price: language === 'en' ? '$129' : '۱۲۹ دلار',
      details: language === 'en'
        ? 'High-capacity strainer baskets that protect your pump from debris. Easy-to-clean design with transparent lid for visual inspection. Compatible with most standard pool pumps.'
        : 'سبدهای صافی با ظرفیت بالا که از پمپ شما در برابر آلودگی محافظت می‌کنند. طراحی آسان برای تمیز کردن با درپوش شفاف برای بازرسی بصری. سازگار با اکثر پمپ‌های استاندارد.'
    },
    {
      title: language === 'en' ? 'Pool Grills' : 'انواع گریل استخری',
      description: language === 'en' ? 'Stainless steel pool drain grills' : 'گریل تخلیه استخر از استیل ضدزنگ',
      image: 'https://tse2.mm.bing.net/th/id/OIP.qXk2bPcpZQVqNWR9E8J7xAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$179' : '۱۷۹ دلار',
      details: language === 'en'
        ? 'Premium stainless steel drain grills with anti-vortex design. Prevents debris accumulation and ensures efficient water circulation. Various sizes available to fit different pool configurations.'
        : 'گریل‌های تخلیه استیل ضدزنگ پرمیوم با طراحی ضد گردابی. از تجمع آلودگی جلوگیری می‌کند و گردش مؤثر آب را تضمین می‌کند. اندازه‌های مختلف برای پیکربندی‌های مختلف استخر موجود است.'
    },
    {
      title: language === 'en' ? 'Pool Skimmers' : 'انواع اسکیمر',
      description: language === 'en' ? 'Automatic surface cleaning skimmers' : 'اسکیمرهای تمیزکاری سطح خودکار',
      image: 'https://tse4.mm.bing.net/th/id/OIP.6ecL9w3djKS6UD7rp1PhTwHaHG?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$449' : '۴۴۹ دلار',
      details: language === 'en'
        ? 'Automatic surface skimming system that continuously removes leaves, debris, and contaminants. Wide-mouth design for maximum collection efficiency. Built-in weir gate for optimal performance.'
        : 'سیستم اسکیم سطحی خودکار که به طور مداوم برگ‌ها، آلودگی‌ها و آلاینده‌ها را برمی‌دارد. طراحی دهان گشاد برای حداکثر کارایی جمع‌آوری. دروازه سد داخلی برای عملکرد بهینه.'
    },
    {
      title: language === 'en' ? 'Fountain Nozzles' : 'انواع نازل های فواره',
      description: language === 'en' ? 'Decorative water fountain nozzles' : 'نازل‌های تزئینی فواره آب',
      image: 'https://tse2.mm.bing.net/th/id/OIP._uyt85ZQ6Ps9cG4PU-PZIAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$249' : '۲۴۹ دلار',
      details: language === 'en'
        ? 'Professional fountain nozzles creating stunning water displays. Multiple spray patterns available including mushroom, geyser, and cascade. Brass construction with chrome finish.'
        : 'نازل‌های فواره حرفه‌ای که نمایش‌های آب خیره‌کننده ایجاد می‌کنند. الگوهای اسپری متعدد شامل قارچی، آبفشان و آبشاری. ساخت برنجی با پرداخت کروم.'
    },
    {
      title: language === 'en' ? 'Curtain Fountains' : 'انواع فواره های پرده ای',
      description: language === 'en' ? 'Water curtain fountain systems' : 'سیستم‌های فواره پرده آب',
      image: 'https://i5.walmartimages.com/asr/03f04c5f-0bec-4b82-9b0c-ac269794a2d3.a95bb2baf7731b8b1d29757dd98b1fb1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: language === 'en' ? '$1,299' : '۱،۲۹۹ دلار',
      details: language === 'en'
        ? 'Elegant water curtain systems creating mesmerizing falling water effects. LED lighting compatible for nighttime displays. Customizable width and flow patterns.'
        : 'سیستم‌های پرده آب زیبا که جلوه‌های مسحورکننده آب در حال سقوط ایجاد می‌کنند. سازگار با نورپردازی LED برای نمایش‌های شبانه. عرض و الگوهای جریان قابل تنظیم.'
    },
    {
      title: language === 'en' ? 'Pool Covers' : 'انواع کاورهای استخری',
      description: language === 'en' ? 'Automatic safety covers with motor' : 'پوشش‌های ایمنی خودکار با موتور',
      image: 'https://th.bing.com/th/id/R.fb8dbbcce17e4a69deff891541f50c8d?rik=wZOX3VPa72BmsQ&pid=ImgRaw&r=0',
      price: language === 'en' ? '$2,999' : '۲،۹۹۹ دلار',
      details: language === 'en'
        ? 'Premium automatic pool covers with powerful motor system. Safety-rated to support weight, reduces evaporation, maintains temperature, and keeps debris out. Remote control operation.'
        : 'پوشش‌های خودکار استخر پرمیوم با سیستم موتور قدرتمند. دارای رتبه ایمنی برای تحمل وزن، کاهش تبخیر، حفظ دما و جلوگیری از ورود آلودگی. کنترل از راه دور.'
    },
    {
      title: language === 'en' ? 'Chlorine Floaters' : 'انواع شناورهای کلر',
      description: language === 'en' ? 'Automatic chlorine dispensing floaters' : 'شناورهای توزیع خودکار کلر',
      image: 'https://tse3.mm.bing.net/th/id/OIP.orkt9ayCCmixcWzgbntf-wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$49' : '۴۹ دلار',
      details: language === 'en'
        ? 'Adjustable chlorine dispenser floaters for consistent sanitization. Holds 3-inch tablets, adjustable flow rate, UV-resistant construction. Keeps your pool water balanced automatically.'
        : 'شناورهای توزیع‌کننده کلر قابل تنظیم برای ضدعفونی یکنواخت. نگهدارنده قرص‌های ۳ اینچی، نرخ جریان قابل تنظیم، ساخت مقاوم در برابر اشعه UV. آب استخر شما را به طور خودکار متعادل نگه می‌دارد.'
    },
    {
      title: language === 'en' ? 'Analog & Digital Waterproof Thermometers' : 'دماسنج واترپروف آنالوگ و دیجیتال',
      description: language === 'en' ? 'Digital and analog waterproof thermometers' : 'دماسنج‌های ضدآب دیجیتال و آنالوگ',
      image: 'https://th.bing.com/th/id/OIP.WPXef49VXkSfNtn8rnouHwHaIB?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$79' : '۷۹ دلار',
      details: language === 'en'
        ? 'Precision temperature measurement devices available in both digital and analog formats. Floating design, easy-to-read displays, accurate readings. Essential for maintaining optimal water temperature.'
        : 'دستگاه‌های اندازه‌گیری دمای دقیق موجود در قالب‌های دیجیتال و آنالوگ. طراحی شناور، نمایشگرهای خوانا، خوانش دقیق. ضروری برای حفظ دمای بهینه آب.'
    },
    {
      title: language === 'en' ? 'Powder & Tablet Chlorine' : 'انواع کلر پودری و قرصی',
      description: language === 'en' ? 'Pool chlorine in powder and tablet form' : 'کلر استخر به صورت پودر و قرص',
      image: 'https://bsg-i.nbxc.com/product/9f/03/3f/3af906dcf3108d6f523fd780c7.jpg',
      price: language === 'en' ? '$39' : '۳۹ دلار',
      details: language === 'en'
        ? 'High-quality pool chlorine available in convenient powder and tablet forms. Fast-dissolving formula, stabilized for longer-lasting effect. Kills bacteria and algae effectively.'
        : 'کلر استخر با کیفیت بالا موجود در اشکال راحت پودر و قرص. فرمول سریع حل‌شونده، پایدار برای اثر طولانی‌تر. باکتری‌ها و جلبک‌ها را به طور مؤثر از بین می‌برد.'
    },
    {
      title: language === 'en' ? 'Water pH Reducers' : 'انواع کاهش دهنده pH آب',
      description: language === 'en' ? 'Water pH balance reducers' : 'کاهش‌دهنده‌های تعادل pH آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$29' : '۲۹ دلار',
      details: language === 'en'
        ? 'Professional-grade pH reducers to maintain optimal water chemistry. Prevents scale buildup, cloudy water, and skin irritation. Easy application with precise dosing instructions.'
        : 'کاهش‌دهنده‌های pH حرفه‌ای برای حفظ شیمی بهینه آب. از رسوب، کدورت آب و تحریک پوست جلوگیری می‌کند. کاربرد آسان با دستورالعمل‌های دقیق دوز.'
    },
    {
      title: language === 'en' ? 'Water Revival Consumables' : 'انواع مواد مصرفی جهت احیای آب',
      description: language === 'en' ? 'Consumables for water treatment and revival' : 'مواد مصرفی برای تصفیه و احیای آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$69' : '۶۹ دلار',
      details: language === 'en'
        ? 'Complete water revival system including clarifiers, algaecides, and oxidizers. Restores cloudy or green water to crystal clarity. Professional formula for quick results.'
        : 'سیستم کامل احیای آب شامل شفاف‌کننده‌ها، ضد جلبک‌ها و اکسیدکننده‌ها. آب کدر یا سبز را به شفافیت کریستالی بازمی‌گرداند. فرمول حرفه‌ای برای نتایج سریع.'
    },
    {
      title: language === 'en' ? 'First Grade Mineral Silica' : 'سیلیس معدنی درجه یک',
      description: language === 'en' ? 'Premium grade filter silica sand' : 'شن سیلیسی فیلتر درجه پرمیوم',
      image: 'https://greenvistaliving.com/cdn/shop/files/WHF3T-FG.png?v=1760262816',
      price: language === 'en' ? '$89' : '۸۹ دلار',
      details: language === 'en'
        ? 'Top-grade silica sand specifically graded for pool filtration. Removes fine particles and debris, long-lasting performance. Available in 50lb bags.'
        : 'شن سیلیسی درجه یک به طور خاص برای فیلتراسیون استخر درجه‌بندی شده. ذرات ریز و آلودگی را حذف می‌کند، عملکرد طولانی‌مدت. در کیسه‌های ۵۰ پوندی موجود است.'
    },
    {
      title: language === 'en' ? 'LED Pool Lights' : 'چراغ‌های LED استخر',
      description: language === 'en' ? 'RGB color-changing underwater lighting' : 'نورپردازی زیر آب با تغییر رنگ RGB',
      image: 'https://i5.walmartimages.com/asr/03f04c5f-0bec-4b82-9b0c-ac269794a2d3.a95bb2baf7731b8b1d29757dd98b1fb1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: language === 'en' ? '$299' : '۲۹۹ دلار',
      details: language === 'en'
        ? 'Energy-efficient LED underwater lights with full RGB color spectrum. Remote-controlled with multiple lighting modes and effects. Waterproof up to 30 feet, easy installation.'
        : 'چراغ‌های LED زیرآبی کم‌مصرف با طیف کامل رنگ RGB. کنترل از راه دور با حالت‌ها و جلوه‌های نوری متعدد. ضدآب تا ۳۰ فوت، نصب آسان.'
    },
    {
      title: language === 'en' ? 'Automatic Pool Cleaner' : 'تمیزکننده خودکار استخر',
      description: language === 'en' ? 'Robotic cleaning system for pools' : 'سیستم تمیزکاری روباتیک برای استخرها',
      image: 'https://tse3.mm.bing.net/th/id/OIP.fbmFpdgP-XyY8TjQvErnDQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$1,499' : '۱،۴۹۹ دلار',
      details: language === 'en'
        ? 'Advanced robotic pool cleaner with smart navigation. Cleans floors, walls, and waterline. Programmable timer, energy efficient, and includes remote control.'
        : 'تمیزکننده روباتیک پیشرفته استخر با ناوبری هوشمند. کف، دیوارها و خط آب را تمیز می‌کند. تایمر قابل برنامه‌ریزی، کم‌مصرف و شامل کنترل از راه دور.'
    },
    {
      title: language === 'en' ? 'Sauna Heater' : 'بخاری سونا',
      description: language === 'en' ? 'Electric or wood-burning heaters' : 'بخاری برقی یا چوب‌سوز',
      image: 'https://tse2.mm.bing.net/th/id/OIP.U0qgUv6xAYxbv-ZEkP4QBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$1,299' : '۱،۲۹۹ دلار',
      details: language === 'en'
        ? 'Professional sauna heaters available in electric and wood-burning models. Fast heat-up time, precise temperature control, stainless steel construction. Suitable for 6-12 person saunas.'
        : 'بخاری‌های حرفه‌ای سونا موجود در مدل‌های برقی و چوب‌سوز. زمان گرم‌شدن سریع، کنترل دقیق دما، ساخت استیل ضدزنگ. مناسب برای سوناهای ۶ تا ۱۲ نفره.'
    },
    {
      title: language === 'en' ? 'Jacuzzi Jets' : 'جت‌های جکوزی',
      description: language === 'en' ? 'Replacement hydrotherapy jets' : 'جت‌های جایگزین آب‌درمانی',
      image: 'https://www.greatbayspas.com/wp-content/uploads/2022/11/bg-jet-underwater.jpg',
      price: language === 'en' ? '$199' : '۱۹۹ دلار',
      details: language === 'en'
        ? 'High-performance hydrotherapy jets with adjustable pressure and direction. Multiple massage patterns, durable construction. Compatible with most jacuzzi brands.'
        : 'جت‌های آب‌درمانی با کارایی بالا با فشار و جهت قابل تنظیم. الگوهای ماساژ متعدد، ساخت بادوام. سازگار با اکثر برندهای جکوزی.'
    },
    {
      title: language === 'en' ? 'Control Panel' : 'پانل کنترل',
      description: language === 'en' ? 'Digital spa control systems' : 'سیستم‌های کنترل دیجیتال اسپا',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      price: language === 'en' ? '$749' : '۷۴۹ دلار',
      details: language === 'en'
        ? 'Advanced digital control panels for complete spa management. Touch-screen interface, temperature control, jet control, lighting settings. Wi-Fi enabled for mobile app control.'
        : 'پانل‌های کنترل دیجیتال پیشرفته برای مدیریت کامل اسپا. رابط صفحه لمسی، کنترل دما، کنترل جت، تنظیمات نورپردازی. قابلیت Wi-Fi برای کنترل اپلیکیشن موبایل.'
    },
    {
      title: language === 'en' ? 'Water Testing Kit' : 'کیت تست آب',
      description: language === 'en' ? 'Complete water chemistry analyzer' : 'آنالیزگر کامل شیمی آب',
      image: 'https://tse4.mm.bing.net/th/id/OIP.fR-fknol726zeVg9n43-YgHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$89' : '۸۹ دلار',
      details: language === 'en'
        ? 'Professional water testing kit with digital meter. Tests pH, chlorine, alkalinity, and hardness. Includes calibration solutions and carrying case.'
        : 'کیت تست آب حرفه‌ای با متر دیجیتال. تست pH، کلر، قلیائیت و سختی. شامل محلول‌های کالیبراسیون و کیف حمل.'
    },
    {
      title: language === 'en' ? 'Pool Pump' : 'پمپ استخر',
      description: language === 'en' ? 'Energy-efficient circulation pump' : 'پمپ گردش انرژی‌کارآمد',
      image: 'https://tse1.mm.bing.net/th/id/OIP.9Kw-8gTqC4g3XzYvKJx9BAHaE7?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$599' : '۵۹۹ دلار',
      details: language === 'en'
        ? 'Variable-speed pool pump with energy-saving technology. Quiet operation, corrosion-resistant housing, self-priming design. Moves up to 2,400 gallons per hour.'
        : 'پمپ استخر با سرعت متغیر با فناوری صرفه‌جویی در انرژی. عملکرد بی‌صدا، محفظه مقاوم در برابر خوردگی، طراحی خود آغازگر. جابجایی تا ۲۴۰۰ گالن در ساعت.'
    },
    {
      title: language === 'en' ? 'Spa Aromatherapy' : 'رایحه‌درمانی اسپا',
      description: language === 'en' ? 'Essential oils and dispensers' : 'روغن‌های ضروری و توزیع‌کننده‌ها',
      image: 'https://tse1.mm.bing.net/th/id/OIP.6yGZGHiFWLvvNT8UjmXwcAHaE8?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$129' : '۱۲۹ دلار',
      details: language === 'en'
        ? 'Premium aromatherapy set including lavender, eucalyptus, and peppermint oils. Comes with automatic dispenser for consistent fragrance release. Spa-safe formulation.'
        : 'ست رایحه‌درمانی پرمیوم شامل روغن‌های اسطوخودوس، اکالیپتوس و نعناع. همراه با توزیع‌کننده خودکار برای آزادسازی رایحه یکنواخت. فرمولاسیون ایمن برای اسپا.'
    },
    {
      title: language === 'en' ? 'Sauna Accessories' : 'اکسسوری‌های سونا',
      description: language === 'en' ? 'Buckets, ladles, and thermometers' : 'سطل‌ها، ملاقه‌ها و دماسنج‌ها',
      image: 'https://tse2.mm.bing.net/th/id/OIP.h2KkODjCwrCLVQXR8p9CpQHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$159' : '۱۵۹ دلار',
      details: language === 'en'
        ? 'Complete sauna accessory set including wooden bucket, ladle, thermometer, and hygrometer. Made from heat-resistant Nordic pine. Essential for authentic sauna experience.'
        : 'مجموعه کامل اکسسوری سونا شامل سطل چوبی، ملاقه، دماسنج و رطوبت‌سنج. ساخته شده از کاج نوردیک مقاوم در برابر حرارت. ضروری برای تجربه اصیل سونا.'
    },
    {
      title: language === 'en' ? 'Pool Vacuum Head' : 'سر جاروبرقی استخر',
      description: language === 'en' ? 'Heavy-duty cleaning attachment' : 'اتصال تمیزکاری سنگین',
      image: 'https://tse4.mm.bing.net/th/id/OIP.NYBznXSDf5eoXDKlZZCREAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      price: language === 'en' ? '$89' : '۸۹ دلار',
      details: language === 'en'
        ? 'Professional vacuum head with weighted design for thorough cleaning. Wide brush strips capture fine debris, durable wheels protect pool surface. Fits standard poles and hoses.'
        : 'سر جاروبرقی حرفه‌ای با طراحی وزن‌دار برای تمیزکاری کامل. نوارهای برس گشاد آلودگی‌های ریز را جمع می‌کنند، چرخ‌های بادوام از سطح استخر محافظت می‌کنند. متناسب با میله‌ها و شیلنگ‌های استاندارد.'
    },
    {
      title: language === 'en' ? 'Spa Headrest' : 'بالشتک سر اسپا',
      description: language === 'en' ? 'Waterproof comfort pillows' : 'بالشت‌های راحتی ضدآب',
      image: 'https://tse3.mm.bing.net/th/id/OIP.4jhtMz5r8UNFCnr8H4r8AAHaHa?rs=1&pid=ImgDetMain',
      price: language === 'en' ? '$49' : '۴۹ دلار',
      details: language === 'en'
        ? 'Ergonomic spa headrests made from UV-resistant, waterproof material. Suction cup attachment, easy cleaning, provides superior neck support. Available in multiple colors.'
        : 'بالشتک‌های سر اسپا ارگونومیک ساخته شده از مواد مقاوم در برابر اشعه UV و ضدآب. اتصال با ساکشن کاپ، تمیزکاری آسان، پشتیبانی عالی گردن. در رنگ‌های مختلف موجود است.'
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
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                      onClick={() => setSelectedProduct(product)}
                    >
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

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl bg-gradient-to-br from-green-950/95 to-black/95 border-green-500/30 text-white backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-green-400 mb-6" dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8" dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-green-500/30">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      {language === 'en' ? 'Description' : 'توضیحات'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      {language === 'en' ? 'Details' : 'جزئیات'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProduct.details}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-green-500/30 mt-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-400">
                      {language === 'en' ? 'Price' : 'قیمت'}
                    </span>
                    <span className="text-4xl font-bold text-green-400">
                      {selectedProduct.price}
                    </span>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg">
                      {language === 'en' ? 'Contact for Order' : 'تماس برای سفارش'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}