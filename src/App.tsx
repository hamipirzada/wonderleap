import React, { useState } from 'react';
import { 
  Star, 
  Gamepad2, 
  Target, 
  Globe, 
  BookOpen, 
  Mail, 
  ArrowRight, 
  CheckCircle,
  Users,
  Lightbulb,
  Rocket,
  Heart,
  Sparkles,
  Calendar,
  AlertTriangle,
  Shield,
  Zap,
  Award,
  Crown,
  Gem,
  Diamond
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { FloatingElements } from './components/FloatingElements';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* WonderLeap Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-2xl border-b-2 border-gold-400/30 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-yellow-400/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/IMG_3141[57].jpeg" 
                  alt="WonderLeap Logo" 
                  className="h-14 w-auto drop-shadow-2xl filter brightness-110 contrast-110"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-full blur-lg"></div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Mission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('challenge')}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Challenge</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('founder')}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Founder</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('signup')}
                className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-purple-900 px-8 py-3 rounded-full font-black text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300/50"
              >
                <Crown className="w-5 h-5 inline mr-2" />
                Get Notified
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* WonderLeap Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <FloatingElements />
        
        {/* WonderLeap Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-6 h-6 bg-yellow-400/30 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce shadow-lg shadow-purple-400/50"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-amber-400/25 rounded-full animate-pulse delay-300 shadow-lg shadow-amber-400/50"></div>
          <div className="absolute top-60 right-1/3 w-5 h-5 bg-indigo-400/35 rounded-full animate-bounce delay-500 shadow-lg shadow-indigo-400/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
          {/* WonderLeap Coming Soon Badge */}
          <AnimatedSection direction="down" className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-12 py-6 rounded-full font-black text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-yellow-300/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
              <Crown className="w-8 h-8 animate-bounce relative z-10" />
              <span className="tracking-wider relative z-10">COMING VERY SOON!</span>
              <Gem className="w-8 h-8 animate-bounce relative z-10" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={300}>
              <div className="text-center lg:text-left">
                <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-6 leading-tight drop-shadow-2xl">
                  <span className="block animate-pulse">WonderLeap</span>
                  <span className="block bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent text-5xl lg:text-6xl animate-bounce">
                    Adventure Edition
                  </span>
                </h1>
                
                <div className="mb-8">
                  <p className="text-4xl text-yellow-300 font-black mb-6 tracking-wide drop-shadow-lg">
                    Discover. Leap. Succeed.
                  </p>
                  <p className="text-2xl text-white/95 leading-relaxed drop-shadow-md font-medium">
                    Enter a majestic realm where career discovery becomes an epic adventure for young minds!
                  </p>
                </div>

                {/* WonderLeap Launch Countdown */}
                <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-8 mb-8 border-2 border-yellow-400/30 shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="flex items-center justify-center space-x-4 mb-6 relative z-10">
                    <Calendar className="w-8 h-8 text-yellow-300 animate-bounce" />
                    <span className="text-white font-black text-2xl tracking-wide">WonderLeap Launch Soon!</span>
                    <Diamond className="w-8 h-8 text-purple-300 animate-bounce delay-300" />
                  </div>
                  <p className="text-white/90 text-center text-lg font-bold relative z-10">
                    👑 Claim your place in the kingdom of career exploration 🏰
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                  <button 
                    onClick={() => scrollToSection('signup')}
                    className="group relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-12 py-6 rounded-full font-black text-2xl hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 flex items-center justify-center space-x-4 border-4 border-yellow-300/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                    <Crown className="w-8 h-8 relative z-10" />
                    <span className="relative z-10">Join WonderLeap!</span>
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={600}>
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/IMG_3102 copy.jpeg" 
                    alt="Wonda the WonderLeap Explorer - WonderLeap Mascot" 
                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
                
                {/* WonderLeap Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 p-4 rounded-full shadow-2xl animate-bounce border-4 border-yellow-300/50">
                  <Crown className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-yellow-300 p-4 rounded-full shadow-2xl animate-bounce delay-300 border-4 border-purple-300/50">
                  <Gem className="w-8 h-8" />
                </div>
                <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-purple-900 p-3 rounded-full shadow-xl animate-pulse border-2 border-amber-300/50">
                  <Diamond className="w-6 h-6" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* WonderLeap Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg className="w-full h-32 fill-current text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#waveGradient)" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="url(#waveGradient)" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="url(#waveGradient)"></path>
          </svg>
        </div>
      </section>

      {/* WonderLeap Introduction */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up" className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-8">
              <Crown className="w-12 h-12 text-yellow-400" />
              <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                WonderLeap Career Academy
              </h2>
              <Crown className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              WonderLeap is a majestic learning kingdom where young explorers discover their destined careers through enchanted adventures and epic quests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WonderLeap Key Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection direction="left" delay={0}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-purple-800/50 hover:from-purple-700/60 hover:via-indigo-700/60 hover:to-purple-700/60 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-yellow-400/30 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl border-2 border-yellow-300/50 relative z-10">
                  <Gamepad2 className="w-10 h-10 text-purple-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">WonderLeap Gaming Quests</h3>
                <p className="text-white/80 text-lg relative z-10">Embark on epic Minecraft adventures in our career kingdoms.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-indigo-800/50 via-purple-800/50 to-indigo-800/50 hover:from-indigo-700/60 hover:via-purple-700/60 hover:to-indigo-700/60 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-purple-400/30 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-500/10 rounded-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl border-2 border-purple-300/50 relative z-10">
                  <Lightbulb className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Enchanted Learning Realms</h3>
                <p className="text-white/80 text-lg relative z-10">Develop skills through magical challenges and mystical activities.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-amber-800/50 via-yellow-800/50 to-amber-800/50 hover:from-amber-700/60 hover:via-yellow-700/60 hover:to-amber-700/60 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-amber-400/30 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl border-2 border-amber-300/50 relative z-10">
                  <Globe className="w-10 h-10 text-purple-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Kingdom Career Exploration</h3>
                <p className="text-white/80 text-lg relative z-10">Discover noble professions explained for young minds.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={600}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-emerald-800/50 via-teal-800/50 to-emerald-800/50 hover:from-emerald-700/60 hover:via-teal-700/60 hover:to-emerald-700/60 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-emerald-400/30 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl border-2 border-emerald-300/50 relative z-10">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">WonderLeap Curriculum</h3>
                <p className="text-white/80 text-lg relative z-10">Built around future skills and career development.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WonderLeap Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <Crown className="w-12 h-12 text-yellow-400" />
                  <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl">
                    WonderLeap Mission
                  </h2>
                </div>
                <div className="space-y-6 text-white/95 text-xl leading-relaxed font-medium">
                  <p className="drop-shadow-lg">
                    WonderLeap's mission is to establish the grandest kingdom of early career exploration, where every young soul discovers their calling through majestic adventures.
                  </p>
                  <p className="drop-shadow-lg">
                    By transforming career discovery into an enchanted quest within Minecraft realms, WonderLeap ignites curiosity, builds confidence, and helps children envision a future filled with infinite possibilities.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-2xl rounded-2xl p-4 border-2 border-yellow-400/30 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-2xl"></div>
                    <Heart className="w-8 h-8 text-yellow-300 relative z-10" />
                    <span className="text-white font-bold text-lg relative z-10">Inclusivity</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-2xl p-4 border-2 border-purple-400/30 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-500/10 rounded-2xl"></div>
                    <Rocket className="w-8 h-8 text-purple-300 relative z-10" />
                    <span className="text-white font-bold text-lg relative z-10">Future Ready</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-800/50 to-yellow-800/50 backdrop-blur-2xl rounded-2xl p-4 border-2 border-amber-400/30 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-2xl"></div>
                    <Users className="w-8 h-8 text-amber-300 relative z-10" />
                    <span className="text-white font-bold text-lg relative z-10">Global Reach</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-800/50 to-teal-800/50 backdrop-blur-2xl rounded-2xl p-4 border-2 border-emerald-400/30 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-2xl"></div>
                    <Target className="w-8 h-8 text-emerald-300 relative z-10" />
                    <span className="text-white font-bold text-lg relative z-10">Early Start</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={300}>
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/IMG_3138.jpeg" 
                    alt="Wonda the WonderLeap Explorer" 
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
                </div>
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WonderLeap Challenge Section */}
      <section id="challenge" className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/15 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up" className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl mb-8 border-2 border-red-400/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              <AlertTriangle className="w-8 h-8 relative z-10" />
              <span className="relative z-10">WONDERLEAP DECREE: URGENT CHALLENGE</span>
              <AlertTriangle className="w-8 h-8 relative z-10" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              The Challenge We're Conquering
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              A critical gap in the education system that affects millions of young minds worldwide
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <AnimatedSection direction="left" delay={200}>
              <div className="h-full">
                <div className="bg-gradient-to-br from-red-800/50 via-orange-800/50 to-red-800/50 p-10 rounded-3xl shadow-2xl border-4 border-red-400/50 h-full transform hover:scale-105 transition-all duration-500 backdrop-blur-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-500/10 rounded-3xl"></div>
                  <div className="flex items-center space-x-4 mb-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-red-300/50">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">The Crisis</h3>
                  </div>
                  <ul className="space-y-6 text-white/90 relative z-10">
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-red-700/30 to-orange-700/30 p-4 rounded-2xl shadow-lg border border-red-400/30">
                      <div className="w-4 h-4 bg-red-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-red-400/50"></div>
                      <span className="text-lg font-semibold">Young minds form career dreams as early as ages 4-7</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-orange-700/30 to-red-700/30 p-4 rounded-2xl shadow-lg border border-orange-400/30">
                      <div className="w-4 h-4 bg-orange-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-orange-400/50"></div>
                      <span className="text-lg font-semibold">By age 7, many limit their potential due to stereotypes</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-red-700/30 to-orange-700/30 p-4 rounded-2xl shadow-lg border border-red-400/30">
                      <div className="w-4 h-4 bg-red-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-red-400/50"></div>
                      <span className="text-lg font-semibold">Most career guidance only begins in secondary schools</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-orange-700/30 to-red-700/30 p-4 rounded-2xl shadow-lg border border-orange-400/30">
                      <div className="w-4 h-4 bg-orange-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-orange-400/50"></div>
                      <span className="text-lg font-semibold">Limited role models and career exposure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={400}>
              <div className="h-full">
                <div className="bg-gradient-to-br from-emerald-800/50 via-teal-800/50 to-emerald-800/50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-400/50 h-full transform hover:scale-105 transition-all duration-500 backdrop-blur-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-3xl"></div>
                  <div className="flex items-center space-x-4 mb-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-emerald-300/50">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">Our WonderLeap Solution</h3>
                  </div>
                  <ul className="space-y-6 text-white/90 relative z-10">
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-emerald-700/30 to-teal-700/30 p-4 rounded-2xl shadow-lg border border-emerald-400/30">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0 animate-pulse shadow-lg shadow-emerald-400/50" />
                      <span className="text-lg font-semibold">Immersive Minecraft Academy for young explorers</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-teal-700/30 to-emerald-700/30 p-4 rounded-2xl shadow-lg border border-teal-400/30">
                      <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0 animate-pulse shadow-lg shadow-teal-400/50" />
                      <span className="text-lg font-semibold">AI-guided advisors for personalized career quests</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-emerald-700/30 to-teal-700/30 p-4 rounded-2xl shadow-lg border border-emerald-400/30">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0 animate-pulse shadow-lg shadow-emerald-400/50" />
                      <span className="text-lg font-semibold">Inclusive platform for all learning styles</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-gradient-to-r from-teal-700/30 to-emerald-700/30 p-4 rounded-2xl shadow-lg border border-teal-400/30">
                      <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0 animate-pulse shadow-lg shadow-teal-400/50" />
                      <span className="text-lg font-semibold">Curriculum aligned and globally scalable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* WonderLeap Impact Statistics */}
          <AnimatedSection direction="up" delay={600} className="mt-16">
            <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 rounded-3xl p-10 text-center shadow-2xl border-4 border-yellow-400/30 backdrop-blur-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
              <h3 className="text-3xl font-black text-white mb-8 drop-shadow-lg relative z-10">Why This WonderLeap Mission Matters</h3>
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-gradient-to-r from-yellow-800/30 to-amber-800/30 rounded-2xl p-6 border-2 border-yellow-400/30">
                  <div className="text-4xl font-black text-yellow-300 mb-2">4-7</div>
                  <div className="text-white font-semibold">Years when aspirations form</div>
                </div>
                <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl p-6 border-2 border-purple-400/30">
                  <div className="text-4xl font-black text-purple-300 mb-2">70%</div>
                  <div className="text-white font-semibold">Of young minds limit options by age 7</div>
                </div>
                <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 rounded-2xl p-6 border-2 border-emerald-400/30">
                  <div className="text-4xl font-black text-emerald-300 mb-2">0</div>
                  <div className="text-white font-semibold">Early career academies like WonderLeap</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WonderLeap Founder Section */}
      <section id="founder" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up" className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Crown className="w-12 h-12 text-yellow-400" />
              <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                Meet Our WonderLeap Founder
              </h2>
              <Crown className="w-12 h-12 text-yellow-400" />
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/IMG_3486.jpeg" 
                    alt="Finneen Bradley - Founder of WonderLeap" 
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
                </div>
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                
                {/* WonderLeap Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 p-3 rounded-full shadow-xl animate-bounce border-2 border-yellow-300/50">
                  <Award className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-yellow-300 p-3 rounded-full shadow-xl animate-bounce delay-300 border-2 border-purple-300/50">
                  <Crown className="w-6 h-6" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={300}>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-white">Finneen Bradley</h3>
                <p className="text-2xl text-yellow-400 font-bold">Founding Director, Finnesse Careers and Empowerment</p>
                
                <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                  <p>
                    As a distinguished graduate of Ulster University Magee campus with a first-class Business Studies degree and a distinction in a Level 7 Postgraduate Qualification in Career Guidance (QCG), I have combined academic excellence with decades of service empowering young minds.
                  </p>
                  <p>
                    With decades of experience as a careers specialist, youth mentor, and social enterprise leader, I've dedicated my career to helping young people explore new possibilities with confidence. As founder of Finnesse Careers and Empowerment, I have delivered award-winning programmes across the UK and Ireland and was the first ever finalist from Northern Ireland in the UK Careers Impact Award.
                  </p>
                  <p>
                    My work has reached thousands of learners and educators. This unique blend of expertise and visionary leadership led me to create WonderLeap, a powerful yet accessible tool designed to inspire future generations.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-purple-800/50 p-8 rounded-3xl border-2 border-yellow-400/30 shadow-xl backdrop-blur-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
                  <p className="text-white/90 italic text-lg font-medium leading-relaxed relative z-10">
                    "I'm thrilled to launch WonderLeap and introduce Wonda, our inspiring mascot who embodies curiosity and adventure. Together, WonderLeap and Wonda aim to create a movement where every child feels seen, inspired, and ready to explore their future fearlessly."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WonderLeap Email Signup */}
      <section id="signup" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <FloatingElements />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection direction="up">
            <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-12 border-4 border-yellow-400/30 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
              <div className="mb-8 relative z-10">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-12 py-6 rounded-full font-black text-2xl shadow-2xl mb-8 border-4 border-yellow-300/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                  <Crown className="w-8 h-8 animate-bounce relative z-10" />
                  <span className="relative z-10">WONDERLEAP LAUNCH APPROACHING!</span>
                  <Gem className="w-8 h-8 animate-bounce relative z-10" />
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-8 drop-shadow-2xl relative z-10">
                Join WonderLeap!
              </h2>
              <p className="text-2xl text-white/95 mb-8 leading-relaxed font-semibold drop-shadow-lg relative z-10">
                Be the first to meet Wonda, explore our Wonder Kingdoms, and unlock a future of possibilities.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-8 py-5 rounded-full text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                      required
                    />
                    <button
                      type="submit"
                      className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 text-purple-900 px-10 py-5 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 whitespace-nowrap border-4 border-yellow-300/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                      <span className="relative z-10">Join Now!</span>
                    </button>
                  </div>
                  
                  {/* WonderLeap Launch Day Text */}
                  <div className="mt-8 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 backdrop-blur-2xl rounded-3xl p-6 border-2 border-yellow-400/30 shadow-2xl">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <Users className="w-10 h-10 text-yellow-300 animate-bounce" />
                      <Crown className="w-8 h-8 text-amber-300 animate-pulse" />
                      <Users className="w-10 h-10 text-yellow-300 animate-bounce delay-300" />
                    </div>
                    <p className="text-white text-center text-3xl font-black tracking-wide drop-shadow-2xl animate-pulse">
                      👑 Join thousands awaiting WonderLeap launch day! 🏰
                    </p>
                    <div className="flex items-center justify-center space-x-3 mt-4">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
                      <div className="w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-100 shadow-lg shadow-amber-400/50"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-200 shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce delay-300 shadow-lg shadow-amber-500/50"></div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto relative z-10">
                  <div className="bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-emerald-600/30 border-4 border-emerald-400/50 rounded-3xl p-8 backdrop-blur-2xl">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
                    <h3 className="text-3xl font-black text-white mb-4">Welcome to WonderLeap!</h3>
                    <p className="text-white/95 text-xl font-semibold">
                      Your invitation has been sent! We'll notify you as soon as WonderLeap's kingdom opens.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WonderLeap Contact & Footer */}
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative">
                <img 
                  src="/IMG_3141[57].jpeg" 
                  alt="WonderLeap Logo" 
                  className="h-16 w-auto mb-6 drop-shadow-2xl filter brightness-110 contrast-110"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-lg blur-lg"></div>
              </div>
              <p className="text-white/90 text-xl leading-relaxed mb-6 font-medium">
                Championing early career exploration by opening up the kingdom of work to every young mind through immersive, majestic, and meaningful learning adventures.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={200}>
              <h4 className="text-2xl font-bold mb-6 text-yellow-400">WonderLeap Contact</h4>
              <div className="space-y-4 text-white/90 text-lg">
                <p className="font-semibold">Finneen Bradley</p>
                <p>Founding Director</p>
                <p>📞 07936 777312</p>
                <p>📧 info@finnesse.co.uk</p>
                <p>🌐 www.finnesse.co.uk</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={400}>
              <h4 className="text-2xl font-bold mb-6 text-purple-400">Join WonderLeap</h4>
              <div className="space-y-4">
                <button className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform duration-200">
                  School Partnerships
                </button>
                <button 
                  onClick={() => scrollToSection('signup')}
                  className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform duration-200"
                >
                  WonderLeap Newsletter
                </button>
                <button className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform duration-200">
                  Partner Enquiries
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="border-t border-yellow-400/30 pt-8 text-center">
            <p className="text-white/80 text-lg">
              © 2025 WonderLeap Academy. All rights reserved. | Discover, Leap and Succeed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;