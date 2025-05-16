'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ViewCanvas from '../components/ViewCanvas';

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Referências para os elementos que serão animados
  const stayRef = useRef(null);
  const freshRef = useRef(null);
  const sodaTextRef = useRef(null);
  const descTextRef = useRef(null);
  const buttonRef = useRef(null);
  
  // Referências para a segunda seção
  const secondSectionRef = useRef(null);
  
  // Estado para guardar o progresso da animação do título
  const [titleComplete, setTitleComplete] = useState(false);
  
  // Estado para guardar os textos parciais e letras animadas
  const [tryAllText, setTryAllText] = useState("");
  const [threeText, setThreeText] = useState("");
  const [flavorsText, setFlavorsText] = useState("");
  const [showAboutText, setShowAboutText] = useState(false);
  
  // Referências para as letras animadas
  const letterRefs = useRef({
    tryAll: [],
    three: [],
    flavors: []
  });

  // Configuração da animação GSAP
  useGSAP(() => {
    // Timeline para as animações da primeira seção
    const introTl = gsap.timeline();
    
    // Definir estado inicial de todos os elementos
    introTl.set([stayRef.current, freshRef.current], { opacity: 0, scale: 3 })
           .set([sodaTextRef.current, buttonRef.current], { opacity: 0, y: 50 })
           .set(descTextRef.current, { opacity: 0 });
    
    // Sequência de animações
    // 1. Animar "STAY"
    introTl.to(stayRef.current, { 
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    
    // 2. Animar "FRESH" (só começa quando "STAY" terminar)
    .to(freshRef.current, { 
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "+=0.1") // pequeno atraso após a animação anterior
    
    // 3. Animar "Soda Perfected" (movimento de baixo para cima)
    .to(sodaTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "back.out(1.2)"
    }, "+=0.2")
    
    // 4. Animar texto descritivo (apenas fade in)
    .to(descTextRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.inOut"
    }, "+=0.1")
    
    // 5. Animar botão "SHOP NOW" (movimento de baixo para cima)
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "back.out(1.2)"
    }, "+=0.1");
    
    // Animações para a segunda seção baseadas no scroll
    if (secondSectionRef.current) {
      // Configurar ScrollTrigger para a revelação letra por letra
      ScrollTrigger.create({
        trigger: secondSectionRef.current,
        start: "top bottom", // Começa quando o topo da seção está no fundo da tela
        end: "top 30%", // Termina quando o topo da seção está a 30% do topo da tela
        scrub: 0.3,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Definir quais linhas e caracteres aparecem com base no progresso
          // Linha 1: "TRY ALL"
          const line1 = "TRY ALL";
          // Linha 2: "THREE"
          const line2 = "THREE";
          // Linha 3: "FLAVORS"
          const line3 = "FLAVORS";
          
          // Tamanho total em caracteres
          const totalLength = line1.length + line2.length + line3.length;
          
          // Número de caracteres a mostrar com base no progresso
          const charsToShow = Math.round(progress * totalLength);
          
          // Distribuir os caracteres entre as linhas
          if (charsToShow <= line1.length) {
            // Mostrar apenas parte da primeira linha
            const newText = line1.substring(0, charsToShow);
            if (newText.length > tryAllText.length) {
              // Animar nova letra
              animateElasticLetter('tryAll', newText.length - 1);
            }
            setTryAllText(newText);
            setThreeText("");
            setFlavorsText("");
          } else if (charsToShow <= line1.length + line2.length) {
            // Mostrar toda a primeira linha e parte da segunda
            const newText = line2.substring(0, charsToShow - line1.length);
            if (newText.length > threeText.length) {
              // Animar nova letra
              animateElasticLetter('three', newText.length - 1);
            }
            setTryAllText(line1);
            setThreeText(newText);
            setFlavorsText("");
          } else {
            // Mostrar as duas primeiras linhas completas e parte/toda a terceira
            const newText = line3.substring(0, charsToShow - line1.length - line2.length);
            if (newText.length > flavorsText.length) {
              // Animar nova letra
              animateElasticLetter('flavors', newText.length - 1);
            }
            setTryAllText(line1);
            setThreeText(line2);
            setFlavorsText(newText);
          }
        }
      });
      
      // ScrollTrigger para o texto explicativo
      ScrollTrigger.create({
        trigger: secondSectionRef.current,
        start: "top 60%", // Alterado: Começa mais cedo
        end: "top 20%", // Alterado: Termina mais cedo
        scrub: 0.2,
        // markers: true,
        onUpdate: (self) => {
          // Mostrar texto com fade in baseado no progresso
          setShowAboutText(self.progress > 0.7); // Alterado: Diminui o threshold para mostrar o texto mais cedo
        }
      });
    }
  }, [titleComplete]);
  
  // Função para animar uma letra com efeito elástico sutil
  const animateElasticLetter = (line: string, index: number): void => {
    // Dar tempo para o DOM atualizar
    setTimeout(() => {
      // Selecionar a letra pelo índice
      const letterElement = document.querySelector(`.${line}-letter-${index}`);
      if (letterElement) {
        // Configuração inicial - levemente torta
        gsap.set(letterElement, { 
          rotation: gsap.utils.random(-20, 20),
          y: gsap.utils.random(5, 15),
          scale: gsap.utils.random(0.8, 1.2),
          transformOrigin: "center bottom"
        });
        
        // Animação elástica sutil
        gsap.to(letterElement, {
          rotation: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 0.8,
        });
      }
    }, 10);
  };

  // Habilitar o scroll na página
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  // Renderizar caracteres individualmente para animação
  const renderLetters = (text: string, lineClass: string) => {
    return text.split('').map((char: string, index: number) => (
      <span 
        key={`${lineClass}-${index}`}
        className={`inline-block ${lineClass}-letter-${index}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen w-full overflow-hidden">
      {/* Primeira seção - Hero */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center" style={{ position: 'relative'}}>
        {/* Canvas 3D posicionado como um fundo */}
        <div className="absolute inset-0 z-50">
          <ViewCanvas />
        </div>
        
        <div className="text-center p-6">
          {/* "STAY FRESH" dividido em duas partes para animação separada */}
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-alpino-black line-height-compact text-brand-light-purple mt-[-100px]">
            <span ref={stayRef} className="inline-block">STAY</span><br />
            <span ref={freshRef} className="inline-block">FRESH</span>
          </h1>
          
          {/* "Soda Perfected" - Alpino Medium, 80.9% line height, centralizado, cor FFFFFF */}
          <h2 
            ref={sodaTextRef}
            className="text-5xl md:text-6xl lg:text-6xl font-alpino-medium line-height-compact text-white mt-[80px]"
          >
            Soda Perfected
          </h2>
          
          {/* "2-4g sugar..." - Alpino Regular, 80.9% line height, centralizado, cor FFFFFF */}
          <p 
            ref={descTextRef}
            className="text-xl md:text-1xl lg:text-2xl font-alpino-regular line-height-compact text-white mt-[16px]"
          >
            2-4g sugar. 9g fiber. 3 delicious flavors.
          </p>
        </div>

        {/* Botão em uma camada separada com pointer-events habilitados */}
        <div className="absolute z-[100] bottom-[18%] pointer-events-auto">
          <div ref={buttonRef}>
            <button className="shop-now-button font-alpino-bold uppercase text-lg md:text-xl px-8 py-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Segunda seção - "TRY ALL THREE FLAVORS" */}
      <section ref={secondSectionRef} className="w-full min-h-screen flex items-start pt-24 pb-16" style={{ position: 'relative', zIndex: 50 }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-15">
          <div className="max-w-3xl">
            {/* "TRY ALL THREE FLAVORS" com efeito elástico em cada letra */}
            <h2 
              className="text-7xl md:text-5xl lg:text-8xl font-alpino-bold text-brand-light-purple text-left" 
              style={{ lineHeight: '88%' }}
            >
              <div className="overflow-hidden">
                {renderLetters(tryAllText, 'tryAll')}
              </div>
              <div className="overflow-hidden">
                {renderLetters(threeText, 'three')}
              </div>
              <div className="overflow-hidden">
                {renderLetters(flavorsText, 'flavors')}
              </div>
            </h2>
            
            {/* Texto abaixo - Alpino Regular, 100% line height, align left, cor FFFFFF */}
            <p 
              className={`text-xl md:text-2xl lg:text-[20px] font-alpino-regular text-white text-left mt-8 transition-opacity duration-300 ${showAboutText ? 'opacity-100' : 'opacity-0'}`}
              style={{ lineHeight: '100%' }}
            >
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
