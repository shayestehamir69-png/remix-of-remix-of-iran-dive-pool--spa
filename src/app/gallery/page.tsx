"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      category: 'pool',
      title: language === 'en' ? 'Luxury Villa Pool' : 'استخر ویلای لوکس',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      category: 'sauna',
      title: language === 'en' ? 'Modern Sauna Installation' : 'نصب سونای مدرن',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      category: 'jacuzzi',
      title: language === 'en' ? 'Outdoor Jacuzzi' : 'جکوزی فضای باز',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      category: 'pool',
      title: language === 'en' ? 'Indoor Swimming Pool' : 'استخر شنای سرپوشیده',
      image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      category: 'pool',
      title: language === 'en' ? 'Infinity Pool Design' : 'طراحی استخر بی‌نهایت',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      category: 'sauna',
      title: language === 'en' ? 'Traditional Finnish Sauna' : 'سونای سنتی فنلاندی',
      image: 'https://images.unsplash.com/photo-1521225099409-8e1efc95321d?w=800&h=600&fit=crop',
    },
    {
      id: 7,
      category: 'jacuzzi',
      title: language === 'en' ? 'Rooftop Jacuzzi' : 'جکوزی پشت بام',
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      category: 'pool',
      title: language === 'en' ? 'Resort Pool Complex' : 'مجموعه استخر ریزورت',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      category: 'jacuzzi',
      title: language === 'en' ? 'Garden Jacuzzi' : 'جکوزی باغ',
      image: 'https://images.unsplash.com/photo-1596178060810-7d4fb9b0e139?w=800&h=600&fit=crop',
    },
  ];

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Projects' : 'همه پروژه‌ها' },
    { id: 'pool', label: language === 'en' ? 'Pools' : 'استخرها' },
    { id: 'sauna', label: language === 'en' ? 'Saunas' : 'سوناها' },
    { id: 'jacuzzi', label: language === 'en' ? 'Jacuzzis' : 'جکوزی‌ها' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              {language === 'en' ? 'Our Gallery' : 'گالری ما'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Explore our portfolio of stunning swimming pools, saunas, and jacuzzis. Each project showcases our commitment to excellence and attention to detail.'
                : 'نمونه کارهای خیره‌کننده ما از استخرهای شنا، سوناها و جکوزی‌ها را کاوش کنید. هر پروژه تعهد ما به برتری و توجه به جزئیات را نشان می‌دهد.'}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-blue-950/30 text-gray-300 border border-blue-500/30 hover:bg-blue-950/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm">
                  {categories.find(c => c.id === project.category)?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Inspired by What You See?' : 'از آنچه می‌بینید الهام گرفتید؟'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Let us create something extraordinary for you too.'
              : 'اجازه دهید برای شما نیز چیزی خارق‌العاده بسازیم.'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all blue-glow"
          >
            {language === 'en' ? 'Start Your Project' : 'پروژه خود را شروع کنید'}
          </a>
        </div>
      </section>
    </div>
  );
}
