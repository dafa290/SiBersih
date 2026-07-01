"use client";

import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";
import heroBg from "../../public/hero-image.png";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[100svh] overflow-hidden bg-zinc-950">
      {/* Background Image - uncropped as requested */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <Image
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-contain"
          priority
          placeholder="blur"
        />
      </div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full max-w-5xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="mt-12 mb-10 sm:mb-12 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md shadow-lg">
            <span className="text-white font-bold mr-2">New</span> POS for everyone <span className="ml-1">→</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] uppercase eclipse-text drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] mb-2">
            Seamless Transactions, <br className="hidden sm:block" />
            Happier Customers
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300 drop-shadow-md">
            The intelligent point-of-sale system that builds customer loyalty and protects your
            reputation. Ready to take your customer service to the next level?
          </p>
          
          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20">
            <AnimatedButton variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-base">
              Join Us Today →
            </AnimatedButton>
            <AnimatedButton variant="outline" className="w-full sm:w-auto px-8 py-3.5 text-base flex items-center gap-3">
              <div className="h-6 w-6 rounded-full overflow-hidden border border-white/40">
                <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className="w-full h-full object-cover" />
              </div>
              How it Works 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
            </AnimatedButton>
          </div>
          
          {/* Trusted By */}
          <div className="mt-20 hidden md:block w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8 drop-shadow-md">
              Trusted by customers at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {/* AI Logos - CSS filters automatically knock out white backgrounds and turn colors into a clean white/grey silhouette */}
              <img src="/chatgpt.png" alt="ChatGPT" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100" />
              <img src="/deepseek.png" alt="DeepSeek" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100" />
              <img src="/gemini.png" alt="Gemini" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100" />
              <img src="/qwen.png" alt="Qwen" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade to blend into the next section (ShowcaseSection which uses bg-zinc-950) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
