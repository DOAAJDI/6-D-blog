import { CheckCircle, ChevronRight, Users } from "lucide-react";

export default function ForStartups() {
  return (
    <section
      id="startups"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <span className="text-pink-400 font-semibold text-lg">
              FOR STARTUPS
            </span>
            <h2 className="text-4xl font-bold text-white mb-6 mt-2">
              Tell Your Story, Find Your Investors
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Share your vision, showcase your progress, and connect with
              investors who understand your market. Build credibility through
              thought leadership.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Showcase your startup journey",
                "Connect with relevant investors",
                "Build thought leadership",
                "Access mentorship opportunities",
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
                    <div className="text-white font-semibold">
                      CloudSync Startup
                    </div>
                    <div className="text-gray-400 text-sm">5 hours ago</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  From Idea to $2M ARR: Our Journey
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  How we built a cloud infrastructure platform that scales...
                </p>
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
  );
}
