'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: '/media/home_hero_slider/7844852-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/9473225-hd_720_1280_24fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/9472813-hd_720_1280_24fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/3444429-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/8522878-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/8523229-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/8522882-hd_1280_720_30fps.mp4',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slides[currentSlide].src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slides[currentSlide].src}
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Pattern Overlay - More Subtle */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            THE #1 OVEN CLEANING SERVICE IN SURREY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Professional, eco-friendly cleaning services for your oven and BBQ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#fb5a25] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#e04d1d] transition-colors duration-200">
              Book Now
            </button>
            <button className="bg-white text-[#fb5a25] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#ffecdc] transition-colors duration-200">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 