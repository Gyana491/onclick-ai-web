"use client";

import React from 'react';
import { Scene } from '@/components/ui/hero-section';
import { Badge } from '@/components/ui/badge';
import { Cpu, Zap, Eye, ShieldCheck, Download } from 'lucide-react';
import KeyboardShortcut from './KeyboardShortcut';
import WindowsKeyboard from './ui/windows-animated-shortcut-keyboard';

const ModernHero = () => {
  const features = [
    {
      icon: Zap,
      title: "3-Second Responses",
      description: "Instant answers to any question",
    },
    {
      icon: Eye,
      title: "Screen Aware",
      description: "Sees what you see, helps contextually",
    },
    {
      icon: ShieldCheck,
      title: "Invisible Mode",
      description: "Your secret productivity weapon",
    },
    {
      icon: Cpu,
      title: "No Browser Needed",
      description: "Zero tabs, maximum productivity",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#000] to-[#1A2428] text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="w-full bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg">
              <Zap size={24} className="text-black" />
            </div>
            <span className="text-2xl font-bold text-white">OneclickAI</span>
          </div>
          
          {/* Download Button */}
          <a 
            href="https://drive.google.com/drive/folders/1RCcY0Ix9gpzpBHd86PUmulUFhjalfcoI?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-center text-center sm:ml-4 ml-2 text-base sm:text-base text-sm min-w-0"
            style={{height: '40px'}}
          >
            <span className="sm:hidden"><Download size={20} /></span>
            <span className="hidden sm:inline">Download for Windows</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-7xl space-y-16 relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 hover:bg-yellow-400/30 px-6 py-2 rounded-full">
            No Need to Open 100s of Tabs IN your Browser Again
          </Badge>
          
          <div className="space-y-8 flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
              
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                INFORMATION
              </span>
              <br />
              <span className="text-white">JUST AT YOUR</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                FINGERTIP
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
              Your smart Desktop Assistant. Just press <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-lg font-semibold">Ctrl+Enter</span> and get instant answers to anything, anytime, anywhere.
            </p>

            {/* Keyboard Shortcuts */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3">
                <KeyboardShortcut 
                  keys={['Ctrl', 'Enter']} 
                  className="text-white"
                />
                <span className="text-white/80 text-sm">Ask anything instantly</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3">
                <KeyboardShortcut 
                  keys={['Win', 'X']} 
                  className="text-white"
                />
                <span className="text-white/80 text-sm">Screenshot + analyze</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <a 
                href="https://drive.google.com/drive/folders/1RCcY0Ix9gpzpBHd86PUmulUFhjalfcoI?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-10 py-4 rounded-xl bg-yellow-400 text-black border-0 shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 font-semibold"
              >
                🚀 Download for Windows
              </a>
              
            </div>

            {/* Windows Keyboard with Ctrl+Enter Highlight */}
            <div className="w-full flex justify-center pt-16 pb-24">
              <WindowsKeyboard />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-64">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">3 sec</div>
                <div className="text-white/60 text-sm">Average response</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-white/60 text-sm">Browser tabs</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-white/60 text-sm">Productivity boost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 h-48 flex flex-col justify-start items-start space-y-3 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <feature.icon size={20} className="text-white/90" />
              </div>
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center space-y-4">
          <p className="text-white/60">Join thousands of professionals who save 3+ hours daily</p>
          <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <span>✅ Free download</span>
            <span>✅ No credit card required</span>
            <span>✅ 2-minute setup</span>
            <span>✅ Desktop ready now • macOS soon</span>
          </div>
        </div>
        </div>
      </div>

      {/* 3D Background */}
      <div className='absolute inset-0 opacity-30'>
        <Scene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default ModernHero; 