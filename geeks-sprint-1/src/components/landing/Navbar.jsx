import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Menu, X } from "lucide-react";

export default function Navbar({ scrollY }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              InvestorConnect
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#investors"
              className="text-gray-300 hover:text-white transition-colors"
            >
              For Investors
            </a>
            <a
              href="#startups"
              className="text-gray-300 hover:text-white transition-colors"
            >
              For Startups
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <Link to="/login">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#investors"
              className="block text-gray-300 hover:text-white"
            >
              For Investors
            </a>
            <a
              href="#startups"
              className="block text-gray-300 hover:text-white"
            >
              For Startups
            </a>
            <a
              href="#testimonials"
              className="block text-gray-300 hover:text-white"
            >
              Testimonials
            </a>
            <Link to="/login" className="block">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
