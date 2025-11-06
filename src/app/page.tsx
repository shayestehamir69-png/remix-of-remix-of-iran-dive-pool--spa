"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Droplets, Flame, Waves as WavesIcon, Wrench, Instagram, FileText, Download, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import WaterWaves from '@/components/WaterWaves';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      title: t('services.pools.title'),
      description: t('services.pools.desc'),
      href: '/pools',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Flame,
      title: t('services.sauna.title'),
      description: t('services.sauna.desc'),
      href: '/sauna',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: WavesIcon,
      title: t('services.jacuzzi.title'),
      description: t('services.jacuzzi.desc'),
      href: '/jacuzzi',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wrench,
      title: t('services.accessories.title'),
      description: t('services.accessories.desc'),
      href: '/accessories',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: t('stats.projects'), value: '500+' },
    { label: t('stats.clients'), value: '300+' },
    { label: t('stats.experience'), value: '15+' },
    { label: t('stats.warranty'), value: '10Y' },
  ];

  const resources = [
    {
      icon: Instagram,
      title: t('resources.instagram'),
      description: t('resources.instagram.desc'),
      handle: t('resources.instagram.handle'),
      action: t('resources.follow'),
      href: 'https://www.instagram.com/irandive.co?igsh=bWZoNWJvcWVuZ3Vn',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      external: true,
    },
    {
      icon: Send,
      title: t('resources.telegram'),
      description: t('resources.telegram.desc'),
      handle: t('resources.telegram.handle'),
      action: t('resources.join'),
      href: 'https://t.me/irandivecompany',
      gradient: 'from-blue-500 to-cyan-500',
      external: true,
    },
    {
      icon: MessageCircle,
      title: t('resources.whatsapp'),
      description: t('resources.whatsapp.desc'),
      handle: t('resources.whatsapp.phone'),
      action: t('resources.message'),
      href: 'https://wa.me/989912905482',
      gradient: 'from-green-500 to-emerald-500',
      external: true,
    },
    {
      icon: FileText,
      title: t('resources.resume'),
      description: t('resources.resume.desc'),
      action: t('resources.download'),
      href: '/resume.pdf',
      gradient: 'from-blue-500 to-cyan-500',
      download: true,
    },
    {
      icon: Download,
      title: t('resources.catalog'),
      description: t('resources.catalog.desc'),
      action: t('resources.download'),
      href: 'https://drive.google.com/uc?export=download&id=14TtylBm0plxG1GqY4HUdCs49y8f5P17l',
      gradient: 'from-green-500 to-emerald-500',
      download: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black">
      <AnimatedBackground />
      <WaterWaves />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-50 md:opacity-100">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-0">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-shimmer px-4">
              {t('hero.title')}
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 animate-fade-in animate-delay-200 px-4">
              <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500" />
              <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-blue-400 font-light tracking-widest">
                {t('hero.subtitle')}
              </p>
              <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in animate-delay-300 px-4 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20 animate-fade-in animate-delay-400 px-4">
            <Link href="/pools">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-base md:text-lg group animate-glow w-full sm:w-auto">
                {t('hero.cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-base md:text-lg w-full sm:w-auto">
                {t('hero.contact')}
              </Button>
            </Link>
          </div>

          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto animate-fade-in animate-delay-500 mb-12 md:mb-0">
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ripple" />
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ripple" style={{ animationDelay: '0.7s' }} />
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ripple" style={{ animationDelay: '1.4s' }} />
            <Droplets className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 text-blue-400" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-20 border-y border-blue-500/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
                <div className="text-center group hover:scale-110 transition-transform duration-300 py-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base px-2">{stat.label}</div>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade">
            <div className="text-center mb-12 md:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {t('services.title')}
              </h2>
              <p className="text-lg sm:text-xl text-blue-400">{t('services.subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 150}>
                  <Link href={service.href}>
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6 md:p-8 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${service.gradient})` }} />
                      
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${service.gradient} p-3 md:p-4 mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">{service.description}</p>

                      <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform text-sm md:text-base">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources & Connect Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 md:opacity-100">
          <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <ScrollReveal animation="fade">
            <div className="text-center mb-12 md:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {t('resources.title')}
              </h2>
              <p className="text-lg sm:text-xl text-blue-400">{t('resources.subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 150}>
                  <a
                    href={resource.href}
                    target={resource.external ? '_blank' : '_self'}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                    download={resource.download}
                  >
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-950/50 to-black border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6 md:p-8 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${resource.gradient})` }} />
                      
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${resource.gradient} p-3 md:p-4 mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mx-auto`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors text-center">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base leading-relaxed text-center">{resource.description}</p>
                      
                      {resource.handle && (
                        <p className="text-blue-400 font-medium text-center mb-3 md:mb-4">
                          {resource.handle}
                        </p>
                      )}

                      <div className="flex items-center justify-center text-blue-400 font-medium group-hover:scale-110 transition-transform text-sm md:text-base">
                        {resource.action}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Card>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm opacity-50 md:opacity-100" />
        <div className="absolute inset-0 opacity-30 md:opacity-100">
          <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <ScrollReveal animation="fade">
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed">
              {t('cta.description')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 md:px-12 py-5 md:py-6 text-base md:text-lg group blue-glow animate-glow">
                {t('cta.button')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}