import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-slate-950 relative min-h-screen w-full overflow-hidden">
      {/* Animated Grid Background */}
      <div className="bg-[size:14px_24px] absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]">
        <div className="from-slate-950 to-slate-950 absolute inset-0 bg-gradient-to-b via-transparent"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/20 blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>Introducing the future of design</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-5xl font-bold text-white md:text-7xl">
          Build Amazing
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {' '}
            Digital Experiences
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-2xl text-lg text-slate-400 md:text-xl">
          Transform your ideas into stunning reality with our cutting-edge
          platform. Fast, intuitive, and designed for creators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-all hover:bg-blue-700">
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Watch Demo
          </button>
        </div>

        {/* Stats or Social Proof */}
        <div className="mt-16 flex flex-wrap gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-sm text-slate-400">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-slate-400">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-slate-400">User Rating</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="from-slate-950 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent"></div>
    </div>
  );
}
