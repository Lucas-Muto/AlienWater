'use client'

import { useEffect } from 'react';

export default function Home() {
  // Habilitar o scroll na página
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen">
      {/* Primeira seção - Hero */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center p-6">
          {/* "STAY FRESH" - Alpino Black, 80.9% line height, centralizado, cor DCAEFF */}
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-alpino-black line-height-compact text-brand-light-purple">
            STAY<br />FRESH
          </h1>
          
          {/* "Soda Perfected" - Alpino Medium, 80.9% line height, centralizado, cor FFFFFF */}
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-alpino-medium line-height-compact text-white mt-[80px]">
            Soda Perfected
          </h2>
          
          {/* "2-4g sugar..." - Alpino Regular, 80.9% line height, centralizado, cor FFFFFF */}
          <p className="text-xl md:text-1xl lg:text-2xl font-alpino-regular line-height-compact text-white mt-[16px]">
            2-4g sugar. 9g fiber. 3 delicious flavors.
          </p>
          
          {/* "SHOP NOW" button - fill B536F6, text Alpino Bold FFFFFF */}
          <div className="mt-[75px]">
            <button className="shop-now-button font-alpino-bold uppercase text-lg md:text-xl px-8 py-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Segunda seção - "TRY ALL FIVE FLAVORS" */}
      <section className="w-full min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-15">
          <div className="max-w-3xl">
            {/* "TRY ALL FIVE FLAVORS" - Alpino Bold, 88% line height, align left, cor DCAEFF */}
            <h2 className="text-7xl md:text-5xl lg:text-8xl font-alpino-bold text-brand-light-purple text-left" style={{ lineHeight: '88%' }}>
              TRY ALL<br />
              THREE<br />
              FLAVORS
            </h2>
            
            {/* Texto abaixo - Alpino Regular, 100% line height, align left, cor FFFFFF */}
            <p className="text-xl md:text-2xl lg:text-[20px] font-alpino-regular text-white text-left mt-8" style={{ lineHeight: '100%' }}>
              Our soda is made with real fruit juice and a touch of cane<br />
              sugar. We never use artificial sweeteners or high fructose<br />
              corn syrup. Try all three flavors and find your favorite!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
