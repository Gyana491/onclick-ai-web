'use client';

import React from 'react';
import ModernHero from '../components/ModernHero';
import KeyboardShortcut from '../components/KeyboardShortcut';

export default function Home() {
  const useCases = [
    {
      title: "Stuck? Get Unstuck in Seconds",
      description: "No more endless Google searches. Hit Ctrl+X and get instant answers.",
      icon: "🚀",
      example: "Coding problem? Get the exact solution in 3 seconds instead of 30 minutes of Stack Overflow browsing.",
      beforeAfter: "Before: 30 min → After: 3 sec"
    },
    {
      title: "Excel Mastery at Your Fingertips",
      description: "Screenshot + Ask = Instant Excel expertise. No more YouTube tutorials.",
      icon: "📊",
      example: "\"How do I filter column B?\" → Get step-by-step instructions instantly, no video watching required.",
      beforeAfter: "Before: 15 min tutorial → After: Instant answer"
    },
    {
      title: "LeetCode? More Like LeetEasy",
      description: "Stop banging your head against algorithm problems. Get optimal solutions instantly.",
      icon: "🧠",
      example: "Struggling with dynamic programming? Get the best approach, time complexity, and clean code in seconds.",
      beforeAfter: "Before: 2 hours stuck → After: Solution in 10 sec"
    },
    {
      title: "Design Decisions Made Easy",
      description: "Can't choose between options? Get expert-level feedback instantly.",
      icon: "🎨",
      example: "\"Which thumbnail converts better?\" → Get data-driven design advice without hiring a consultant.",
      beforeAfter: "Before: Guesswork → After: Expert advice"
    },
    {
      title: "Never Send a Cringy Text Again",
      description: "Relationship saved by AI. Craft perfect responses every time.",
      icon: "💬",
      example: "Stuck on what to reply? Get contextually perfect responses that actually work.",
      beforeAfter: "Before: Overthinking → After: Perfect response"
    },
    {
      title: "Invisible Productivity Mode",
      description: "Get work done without anyone knowing you're getting AI help.",
      icon: "👻",
      example: "Look like a genius while getting instant answers. Your secret productivity weapon.",
      beforeAfter: "Before: Obvious help → After: Look like a pro"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black">
      {/* Modern Hero Section with 3D Background */}
      <ModernHero />

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-br from-red-950 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tired of This Daily Nightmare?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-300/20">
                <div className="text-3xl mb-2">😤</div>
                <div className="font-semibold text-white">15+ Browser Tabs</div>
                <div className="text-sm text-red-200">Just to find one answer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-300/20">
                <div className="text-3xl mb-2">⏰</div>
                <div className="font-semibold text-white">30 Min Searches</div>
                <div className="text-sm text-red-200">For simple questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-300/20">
                <div className="text-3xl mb-2">🤯</div>
                <div className="font-semibold text-white">Context Switching</div>
                <div className="text-sm text-red-200">Killing your focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-300/20">
                <div className="text-3xl mb-2">😱</div>
                <div className="font-semibold text-white">Looking Stupid</div>
                <div className="text-sm text-red-200">Asking obvious questions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What If You Could Look Like a Genius?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Imagine having the world's smartest assistant watching your screen, ready to help instantly. No more embarrassing moments, no more wasted time.
            </p>
            <div className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              🎯 This is your unfair advantage
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 font-medium">
                  {useCase.description}
                </p>
                <div className="bg-blue-500/20 border border-blue-400/30 p-4 rounded-lg mb-4">
                  <p className="text-blue-200 text-sm font-medium mb-2">
                    Real Example:
                  </p>
                  <p className="text-blue-100 text-sm">
                    {useCase.example}
                  </p>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 p-3 rounded-lg">
                  <p className="text-green-200 text-sm font-bold text-center">
                    ⚡ {useCase.beforeAfter}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts Demo */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Master These 2 Shortcuts, 10x Your Productivity
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Seriously, just these two shortcuts will change your life
          </p>
        </div>
        
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Essential Shortcuts</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                  <span className="text-white font-medium">Ask anything instantly</span>
                  <KeyboardShortcut keys={['Ctrl', 'Enter']} className="text-white" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                  <span className="text-white font-medium">Screenshot + analyze</span>
                  <KeyboardShortcut keys={['Win', 'X']} className="text-white" />
                </div>
                <div className="bg-green-500/20 border border-green-400/30 p-4 rounded-lg">
                  <p className="text-green-200 font-bold text-center">
                    ⚡ That's it! You're now 10x more productive
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Power User Shortcuts</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <span className="text-white font-medium">Research mode</span>
                  <KeyboardShortcut keys={['Ctrl', 'R']} className="text-white" />
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <span className="text-white font-medium">Code analysis</span>
                  <KeyboardShortcut keys={['Ctrl', 'Alt', 'C']} className="text-white" />
                  </div>
                <div className="flex items-center justify-between p-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <span className="text-white font-medium">Stealth mode</span>
                  <KeyboardShortcut keys={['Ctrl', 'Alt', 'I']} className="text-white" />
                  </div>
                <div className="bg-purple-500/20 border border-purple-400/30 p-4 rounded-lg">
                  <p className="text-purple-200 font-bold text-center">
                    🚀 Advanced users save 5+ hours daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Oneclick AI. All rights reserved. Information at your fingertip anytime anywhere. 🚀</p>
          </div>
        </div>
      </footer>
      </div>
  );
}
