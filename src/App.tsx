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
  Award
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
    <div className="min-h-screen bg-white">
      {/* Fixed Header with Enhanced Visibility */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-xl border-b border-purple-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/IMG_3141[57].jpeg" 
                alt="WonderLeap Logo" 
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-800 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200"
              >
                Mission
              </button>
              <button 
                onClick={() => scrollToSection('challenge')}
                className="text-gray-800 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200"
              >
                Challenge
              </button>
              <button 
                onClick={() => scrollToSection('founder')}
                className="text-gray-800 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200"
              >
                Founder
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('signup')}
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl animate-pulse"
              >
                🚀 Get Notified
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section with Prominent Coming Soon */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <FloatingElements />
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-60 right-1/3 w-8 h-8 bg-purple-300/40 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
          {/* Coming Soon Badge */}
          <AnimatedSection direction="down" className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse border-4 border-white/30">
              <Sparkles className="w-8 h-8 animate-spin" />
              <span className="tracking-wider">COMING VERY SOON!</span>
              <Sparkles className="w-8 h-8 animate-spin" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={300}>
              <div className="text-center lg:text-left">
                <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                  <span className="block animate-pulse">WonderLeap</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent text-5xl lg:text-6xl animate-bounce">
                    is Almost Here!
                  </span>
                </h1>
                
                <div className="mb-8">
                  <p className="text-4xl text-white font-bold mb-6 tracking-wide drop-shadow-lg">
                    Discover. Leap. Succeed.
                  </p>
                  <p className="text-2xl text-white/95 leading-relaxed drop-shadow-md">
                    Get ready to explore a whole new world of career discovery for children — where imagination meets opportunity!
                  </p>
                </div>

                {/* Launch Countdown Visual */}
                <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 mb-8 border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <Calendar className="w-8 h-8 text-yellow-300 animate-bounce" />
                    <span className="text-white font-black text-2xl tracking-wide">Launching Very Soon!</span>
                    <Rocket className="w-8 h-8 text-cyan-300 animate-bounce delay-300" />
                  </div>
                  <p className="text-white/90 text-center text-lg font-semibold">
                    🌟 Be among the first to experience the future of career education 🌟
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                  <button 
                    onClick={() => scrollToSection('signup')}
                    className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-4 animate-bounce border-4 border-white/30 relative z-20"
                  >
                    <Mail className="w-8 h-8" />
                    <span>Notify Me When We Launch!</span>
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={600}>
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/IMG_3102.jpeg" 
                    alt="Wonda the Explorer - WonderLeap Mascot" 
                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-white/30"
                  />
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-2xl animate-bounce border-4 border-white/30">
                  <Star className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-full shadow-2xl animate-bounce delay-300 border-4 border-white/30">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-full shadow-xl animate-pulse border-2 border-white/30">
                  <Heart className="w-6 h-6" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Enhanced Wave Separator - Moved to bottom with proper z-index */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg className="w-full h-32 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              Transforming Career Education
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              WonderLeap is an exciting, immersive learning platform that uses interactive games, storytelling, and child-friendly technology to help young minds dream big and discover future careers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection direction="left" delay={0}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-purple-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Games</h3>
                <p className="text-gray-600 text-lg">Learn while having fun inside Minecraft with engaging career exploration missions.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-cyan-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill-Building Zones</h3>
                <p className="text-gray-600 text-lg">Develop curiosity and creativity through hands-on challenges and activities.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-orange-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Career Exploration</h3>
                <p className="text-gray-600 text-lg">Jobs explained for young minds in an accessible and inspiring way.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={600}>
              <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-green-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum-Aligned</h3>
                <p className="text-gray-600 text-lg">Built around real-world job trends and future skills development.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 drop-shadow-2xl">
                  Our Mission
                </h2>
                <div className="space-y-6 text-white/95 text-xl leading-relaxed font-medium">
                  <p className="drop-shadow-lg">
                    WonderLeap's mission is to champion early career exploration by opening up the world of work to every child. We make career learning fun, imaginative, and meaningful from the earliest years.
                  </p>
                  <p className="drop-shadow-lg">
                    By turning career exploration into an interactive Minecraft adventure, WonderLeap sparks curiosity, builds confidence, and helps children see a future full of possibilities long before traditional career guidance begins.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                    <Heart className="w-8 h-8 text-yellow-300" />
                    <span className="text-white font-bold text-lg">Inclusive & Accessible</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                    <Rocket className="w-8 h-8 text-yellow-300" />
                    <span className="text-white font-bold text-lg">Future-Ready Skills</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                    <Users className="w-8 h-8 text-yellow-300" />
                    <span className="text-white font-bold text-lg">Global Impact</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                    <Target className="w-8 h-8 text-yellow-300" />
                    <span className="text-white font-bold text-lg">Early Intervention</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={300}>
              <div className="relative">
                <img 
                  src="/IMG_3138.jpeg" 
                  alt="Wonda the Explorer" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white/30"
                />
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Challenge Section */}
      <section id="challenge" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-orange-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up" className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl mb-8 animate-pulse">
              <AlertTriangle className="w-8 h-8" />
              <span>URGENT CHALLENGE</span>
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              The Challenge We're Solving
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              A critical gap in early career education that affects millions of children worldwide
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <AnimatedSection direction="left" delay={200}>
              <div className="h-full">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl shadow-2xl border-4 border-red-200/50 h-full transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900">The Problem</h3>
                  </div>
                  <ul className="space-y-6 text-gray-700">
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-lg font-semibold">Children form career aspirations as early as ages 4-7</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-lg font-semibold">By age 7, many already narrow their options due to stereotypes</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-lg font-semibold">Most career guidance only begins in secondary school</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-lg font-semibold">Limited role models and exposure to career possibilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={400}>
              <div className="h-full">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-2xl border-4 border-green-200/50 h-full transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900">Our Solution</h3>
                  </div>
                  <ul className="space-y-6 text-gray-700">
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-lg font-semibold">Immersive Minecraft Education platform for primary-aged children</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-lg font-semibold">AI-guided prompts for personalized career exploration</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-lg font-semibold">Inclusive and accessible for all learning needs</span>
                    </li>
                    <li className="flex items-start space-x-4 bg-white/70 p-4 rounded-2xl shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-lg font-semibold">Curriculum-aligned and globally scalable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Impact Statistics */}
          <AnimatedSection direction="up" delay={600} className="mt-16">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-10 text-center shadow-2xl border-4 border-white/30">
              <h3 className="text-3xl font-black text-white mb-8 drop-shadow-lg">Why This Matters</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-black text-yellow-300 mb-2">4-7</div>
                  <div className="text-white font-semibold">Years old when career aspirations form</div>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-black text-yellow-300 mb-2">70%</div>
                  <div className="text-white font-semibold">Of children limit options by age 7</div>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-black text-yellow-300 mb-2">0</div>
                  <div className="text-white font-semibold">Early career education platforms like ours</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              Meet Our Founder
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img 
                  src="/IMG_3486.jpeg" 
                  alt="Finneen Bradley - Founder of WonderLeap" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-purple-200/50"
                />
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-xl animate-bounce border-2 border-white">
                  <Award className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-full shadow-xl animate-bounce delay-300 border-2 border-white">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={300}>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-gray-900">Finneen Bradley</h3>
                <p className="text-2xl text-purple-600 font-bold">Founding Director, Finnesse Careers and Empowerment</p>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    As a graduate of Ulster University Magee campus with a first-class Business Studies degree and a distinction in a Level 7 Postgraduate Qualification in Career Guidance (QCG), I have combined academic excellence with decades of experience empowering young people.
                  </p>
                  <p>
                    With decades of experience as a careers specialist, youth mentor, and social enterprise leader, I've dedicated my career to helping young people explore new possibilities with confidence. As founder of Finnesse Careers and Empowerment, I have delivered award-winning programmes across the UK and Ireland and was the first ever finalist from Northern Ireland in the UK Careers Impact Award.
                  </p>
                  <p>
                    My work has reached thousands of learners and educators. This unique blend of expertise and visionary drive led me to create WonderLeap, a playful yet powerful tool designed to inspire future generations.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl border-2 border-purple-200/50 shadow-xl">
                  <p className="text-gray-700 italic text-lg font-medium leading-relaxed">
                    "I'm excited to launch WonderLeap and introduce Wonda, our inspiring mascot who embodies curiosity and adventure. Together, WonderLeap and Wonda aim to create a movement where every child feels seen, inspired, and ready to explore their future fearlessly."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Email Signup */}
      <section id="signup" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-12 border-4 border-white/30 shadow-2xl">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-black text-2xl shadow-2xl mb-8 animate-pulse border-4 border-white/30">
                  <Sparkles className="w-8 h-8 animate-spin" />
                  <span>LAUNCHING VERY SOON!</span>
                  <Sparkles className="w-8 h-8 animate-spin" />
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 drop-shadow-2xl">
                Don't Miss Out!
              </h2>
              <p className="text-2xl text-white/95 mb-8 leading-relaxed font-semibold drop-shadow-lg">
                Be the first to meet Wonda, explore our Wonder Zones, and unlock a future of possibilities.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-8 py-5 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 text-xl font-semibold shadow-xl border-2 border-white/30"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-white px-10 py-5 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl whitespace-nowrap border-4 border-white/30"
                    >
                      Notify Me!
                    </button>
                  </div>
                  
                  {/* Enhanced Launch Day Text in Signup Section */}
                  <div className="mt-8 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-red-500/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-yellow-400/50 shadow-2xl">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <Users className="w-10 h-10 text-yellow-200 animate-bounce" />
                      <Sparkles className="w-8 h-8 text-orange-200 animate-pulse" />
                      <Users className="w-10 h-10 text-yellow-200 animate-bounce delay-300" />
                    </div>
                    <p className="text-white text-center text-3xl font-black tracking-wide drop-shadow-2xl animate-pulse">
                      🚀 Join thousands already waiting for launch day! 🎉
                    </p>
                    <div className="flex items-center justify-center space-x-3 mt-4">
                      <div className="w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
                      <div className="w-4 h-4 bg-orange-300 rounded-full animate-bounce delay-100"></div>
                      <div className="w-4 h-4 bg-red-300 rounded-full animate-bounce delay-200"></div>
                      <div className="w-4 h-4 bg-pink-300 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="bg-green-500/30 border-4 border-green-400/50 rounded-3xl p-8 backdrop-blur-lg">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-bounce" />
                    <h3 className="text-3xl font-black text-white mb-4">Thank You!</h3>
                    <p className="text-white/95 text-xl font-semibold">
                      You're all set! We'll notify you as soon as WonderLeap launches.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <img 
                src="/IMG_3141[57].jpeg" 
                alt="WonderLeap Logo" 
                className="h-16 w-auto mb-6 drop-shadow-lg"
              />
              <p className="text-gray-300 text-xl leading-relaxed mb-6 font-medium">
                Championing early career exploration by opening up the world of work to every child through immersive, fun, and meaningful learning experiences.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={200}>
              <h4 className="text-2xl font-bold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="font-semibold">Finneen Bradley</p>
                <p>Founding Director</p>
                <p>📞 07936 777312</p>
                <p>📧 info@finnesse.co.uk</p>
                <p>🌐 www.finnesse.co.uk</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={400}>
              <h4 className="text-2xl font-bold mb-6">Get Involved</h4>
              <div className="space-y-4">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200">
                  School Partnerships
                </button>
                <button 
                  onClick={() => scrollToSection('signup')}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200"
                >
                  Newsletter Signup
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200">
                  Partner Enquiries
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 WonderLeap. All rights reserved. | Discover, Leap and Succeed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;