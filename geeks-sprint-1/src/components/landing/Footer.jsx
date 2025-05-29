import { TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                InvestorConnect
              </span>
            </div>
            <p className="text-gray-400">
              Connecting the dots between innovation and investment.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                For Investors
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                For Startups
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                API Docs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Community
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 InvestorConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
