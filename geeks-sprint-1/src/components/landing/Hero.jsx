import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-pulse mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 10K+ investors and startups
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Where{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation
          </span>
          <br />
          Meets{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Investment
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The premier blogging platform connecting forward-thinking investors
          with groundbreaking startups. Share insights, discover opportunities,
          and build the future together.
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
  );
}
