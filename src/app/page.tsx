"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentModel, setCurrentModel] = useState(0);
  
  const featuredModels = [
    {
      name: "Aurora AI",
      type: "AI Model",
      description: "Futuristic AI companion with advanced personality",
      image: "https://placehold.co/400x600?text=Aurora+AI+Model+with+holographic+features+and+neon+accents"
    },
    {
      name: "Bella Nova",
      type: "Real Creator",
      description: "Top-rated real-life creator with premium content",
      image: "https://placehold.co/400x600?text=Bella+Nova+professional+model+portrait+with+studio+lighting"
    },
    {
      name: "Clone Models",
      type: "Coming Soon",
      description: "Revolutionary AI clones of your favorite creators",
      image: "https://placehold.co/400x600?text=Clone+Models+Coming+Soon+futuristic+preview"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModel((prev) => (prev + 1) % featuredModels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deepdollz-primary-dark via-deepdollz-primary-blue to-deepdollz-primary-dark">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-deepdollz-neon-cyan rounded-full blur-3xl animate-pulse-neon"></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-deepdollz-neon-magenta rounded-full blur-3xl animate-pulse-neon" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-deepdollz-neon-purple rounded-full blur-3xl animate-pulse-neon" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron']">
              <span className="deepdollz-text-gradient">DEEPDOLLZ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-['Exo_2'] font-light">
              AI-CRAFTED PERFECTION TO
            </p>
            <p className="text-2xl md:text-3xl text-white mb-8 font-['Exo_2'] font-semibold">
              HOTTEST REAL-LIFE CREATORS
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-400 mb-8 font-['Exo_2']">
              Experience the future of digital entertainment. Interact with AI-generated models, 
              support real creators, and get ready for revolutionary clone technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-gradient-to-r from-deepdollz-neon-cyan to-deepdollz-neon-magenta text-black font-bold rounded-lg text-lg deepdollz-hover-glow transition-all duration-300 font-['Exo_2']"
              >
                Start Your Journey
              </Link>
              <Link
                href="/deepdollz"
                className="px-8 py-4 border-2 border-deepdollz-neon-cyan text-deepdollz-neon-cyan rounded-lg text-lg deepdollz-hover-glow transition-all duration-300 font-['Exo_2'] font-semibold"
              >
                Explore AI Models
              </Link>
            </div>
          </div>

          {/* Featured Model Carousel */}
          <div className="relative max-w-md mx-auto">
            <div className="deepdollz-glass rounded-2xl p-6 deepdollz-neon-border">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <img
                  src={featuredModels[currentModel].image}
                  alt={`${featuredModels[currentModel].name} - ${featuredModels[currentModel].description}`}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x600?text=Featured+Model";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1 font-['Orbitron']">
                    {featuredModels[currentModel].name}
                  </h3>
                  <p className="text-deepdollz-neon-cyan text-sm font-['Exo_2'] font-semibold">
                    {featuredModels[currentModel].type}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-['Exo_2']">
                {featuredModels[currentModel].description}
              </p>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {featuredModels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModel(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentModel 
                      ? 'bg-deepdollz-neon-cyan deepdollz-glow' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-deepdollz-primary-blue to-deepdollz-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Orbitron']">
              Three Worlds of <span className="deepdollz-text-gradient">Entertainment</span>
            </h2>
            <p className="text-xl text-gray-400 font-['Exo_2']">
              Choose your experience in the future of digital content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DeepDollz */}
            <div className="deepdollz-glass rounded-2xl p-8 deepdollz-hover-glow transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-deepdollz-neon-cyan to-deepdollz-neon-magenta rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black font-['Orbitron']">AI</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">DeepDollz</h3>
                <p className="text-deepdollz-neon-cyan font-['Exo_2'] font-semibold">AI Models</p>
              </div>
              <ul className="space-y-3 text-gray-300 font-['Exo_2']">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-cyan rounded-full mr-3"></span>
                  Interactive AI personalities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-cyan rounded-full mr-3"></span>
                  24/7 availability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-cyan rounded-full mr-3"></span>
                  Customizable experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-cyan rounded-full mr-3"></span>
                  Advanced AI conversations
                </li>
              </ul>
              <Link
                href="/deepdollz"
                className="block w-full mt-6 px-6 py-3 bg-deepdollz-neon-cyan text-black rounded-lg font-semibold text-center deepdollz-hover-glow transition-all duration-300 font-['Exo_2']"
              >
                Explore AI Models
              </Link>
            </div>

            {/* GlowDollz */}
            <div className="deepdollz-glass rounded-2xl p-8 deepdollz-hover-glow transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-deepdollz-neon-magenta to-deepdollz-neon-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white font-['Orbitron']">★</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">GlowDollz</h3>
                <p className="text-deepdollz-neon-magenta font-['Exo_2'] font-semibold">Real Creators</p>
              </div>
              <ul className="space-y-3 text-gray-300 font-['Exo_2']">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-magenta rounded-full mr-3"></span>
                  Verified real creators
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-magenta rounded-full mr-3"></span>
                  Premium content library
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-magenta rounded-full mr-3"></span>
                  Direct creator support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-magenta rounded-full mr-3"></span>
                  Exclusive interactions
                </li>
              </ul>
              <Link
                href="/glowdollz"
                className="block w-full mt-6 px-6 py-3 bg-deepdollz-neon-magenta text-black rounded-lg font-semibold text-center deepdollz-hover-glow transition-all duration-300 font-['Exo_2']"
              >
                Meet Creators
              </Link>
            </div>

            {/* Clone Models */}
            <div className="deepdollz-glass rounded-2xl p-8 deepdollz-hover-glow transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-deepdollz-neon-purple text-black px-3 py-1 rounded-full text-xs font-bold font-['Exo_2']">
                COMING SOON
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-deepdollz-neon-purple to-deepdollz-neon-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white font-['Orbitron']">∞</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">Clone Models</h3>
                <p className="text-deepdollz-neon-purple font-['Exo_2'] font-semibold">AI Clones</p>
              </div>
              <ul className="space-y-3 text-gray-300 font-['Exo_2']">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-purple rounded-full mr-3"></span>
                  AI clones of real creators
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-purple rounded-full mr-3"></span>
                  Revolutionary technology
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-purple rounded-full mr-3"></span>
                  Unlimited availability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-deepdollz-neon-purple rounded-full mr-3"></span>
                  Creator-approved clones
                </li>
              </ul>
              <button
                disabled
                className="block w-full mt-6 px-6 py-3 bg-gray-600 text-gray-400 rounded-lg font-semibold text-center cursor-not-allowed font-['Exo_2']"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deepdollz-primary-dark to-deepdollz-primary-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Orbitron']">
            Ready to Enter the <span className="deepdollz-text-gradient">Future</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-['Exo_2']">
            Join thousands of users already experiencing the next generation of digital entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-gradient-to-r from-deepdollz-neon-cyan to-deepdollz-neon-magenta text-black font-bold rounded-lg text-lg deepdollz-hover-glow transition-all duration-300 font-['Exo_2']"
            >
              Get Started Free
            </Link>
            <Link
              href="/subscription"
              className="px-8 py-4 border-2 border-deepdollz-neon-purple text-deepdollz-neon-purple rounded-lg text-lg deepdollz-hover-glow transition-all duration-300 font-['Exo_2'] font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
