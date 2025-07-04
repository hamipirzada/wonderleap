import React from 'react';
import { Star, Heart, Sparkles, Zap } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      <div className="absolute top-20 left-10 animate-float">
        <Star className="w-8 h-8 text-yellow-300/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 text-pink-300/40" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-cyan-300/30" />
      </div>
      <div className="absolute top-60 right-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
        <Zap className="w-7 h-7 text-purple-300/35" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <Star className="w-5 h-5 text-orange-300/40" />
      </div>
      <div className="absolute top-32 left-1/3 animate-float" style={{ animationDelay: '2.5s' }}>
        <Heart className="w-9 h-9 text-red-300/25" />
      </div>
      
      {/* Floating Circles */}
      <div className="absolute top-16 right-1/4 w-4 h-4 bg-yellow-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-blue-400/25 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-8 w-3 h-3 bg-green-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 right-1/4 w-5 h-5 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
};