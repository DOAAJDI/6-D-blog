import { CheckCircle, ChevronRight, TrendingUp } from "lucide-react";

export default function ForInvestors() {
  return (
    <section id="investors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-400 font-semibold text-lg">
              FOR INVESTORS
            </span>
            <h2 className="text-4xl font-bold text-white mb-6 mt-2">
              Discover the Next Big Thing
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access exclusive startup insights, connect with emerging
              companies, and share your expertise with a community of
              forward-thinking professionals.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Early access to promising startups",
                "Exclusive market insights and analysis",
                "Direct communication with founders",
                "Community of verified investors",
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
                    <div className="text-white font-semibold">
                      TechVenture Insights
                    </div>
                    <div className="text-gray-400 text-sm">2 hours ago</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  AI Startup Funding Trends in Q2 2025
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Analysis of the latest funding patterns in artificial
                  intelligence startups...
                </p>
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
  );
}
