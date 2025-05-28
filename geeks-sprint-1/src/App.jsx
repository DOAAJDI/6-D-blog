import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, MessageCircle, Star, CheckCircle, Menu, X, ChevronRight } from 'lucide-react';


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: TrendingUp, title: "Market Insights", desc: "Real-time analysis and trends from industry experts" },
    { icon: Users, title: "Network Building", desc: "Connect with like-minded investors and innovative startups" },
    { icon: MessageCircle, title: "Direct Communication", desc: "Seamless messaging between investors and entrepreneurs" },
    { icon: Star, title: "Quality Content", desc: "Curated articles and insights from verified professionals" }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "VC Partner at Nexus Capital", text: "This platform has become my go-to source for discovering promising startups and sharing insights with the community." },
    { name: "Marcus Rodriguez", role: "CEO, TechFlow", text: "We connected with three investors through the platform. The quality of connections is unmatched." },
    { name: "Emma Thompson", role: "Angel Investor", text: "The content quality and networking opportunities here are exceptional. Highly recommended." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">InvestorConnect</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#investors" className="text-gray-300 hover:text-white transition-colors">For Investors</a>
              <a href="#startups" className="text-gray-300 hover:text-white transition-colors">For Startups</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#investors" className="block text-gray-300 hover:text-white">For Investors</a>
              <a href="#startups" className="block text-gray-300 hover:text-white">For Startups</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white">Testimonials</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10K+ investors and startups
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Where <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Innovation</span>
            <br />Meets <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Investment</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The premier blogging platform connecting forward-thinking investors with groundbreaking startups. 
            Share insights, discover opportunities, and build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to connect, share, and grow in the startup ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/70 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors Section */}
      <section id="investors" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-400 font-semibold text-lg">FOR INVESTORS</span>
              <h2 className="text-4xl font-bold text-white mb-6 mt-2">
                Discover the Next Big Thing
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access exclusive startup insights, connect with emerging companies, and share your expertise 
                with a community of forward-thinking professionals.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Early access to promising startups",
                  "Exclusive market insights and analysis",
                  "Direct communication with founders",
                  "Community of verified investors"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center">
                Join as Investor
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
                <div className="bg-slate-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-semibold">TechVenture Insights</div>
                      <div className="text-gray-400 text-sm">2 hours ago</div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">AI Startup Funding Trends in Q2 2025</h3>
                  <p className="text-gray-300 text-sm mb-4">Analysis of the latest funding patterns in artificial intelligence startups...</p>
                  <div className="flex items-center text-purple-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>Trending in AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Startups Section */}
      <section id="startups" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <span className="text-pink-400 font-semibold text-lg">FOR STARTUPS</span>
              <h2 className="text-4xl font-bold text-white mb-6 mt-2">
                Tell Your Story, Find Your Investors
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Share your vision, showcase your progress, and connect with investors who understand 
                your market. Build credibility through thought leadership.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Showcase your startup journey",
                  "Connect with relevant investors",
                  "Build thought leadership",
                  "Access mentorship opportunities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center">
                Join as Startup
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl p-8 border border-pink-500/30">
                <div className="bg-slate-800 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-semibold">CloudSync Startup</div>
                      <div className="text-gray-400 text-sm">5 hours ago</div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">From Idea to $2M ARR: Our Journey</h3>
                  <p className="text-gray-300 text-sm mb-4">How we built a cloud infrastructure platform that scales...</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-pink-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>324 interested investors</span>
                    </div>
                    <div className="text-gray-400 text-sm">Series A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">See what our community has to say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/70 transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors and startups who are already building the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button className="text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">InvestorConnect</span>
              </div>
              <p className="text-gray-400">Connecting the dots between innovation and investment.</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">For Investors</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">For Startups</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Features</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Pricing</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Blog</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">API Docs</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Community</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Careers</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Terms</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 InvestorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}