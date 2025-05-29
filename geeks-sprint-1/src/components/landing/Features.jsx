import { TrendingUp, Users, MessageCircle, Star } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Market Insights",
    desc: "Real-time analysis and trends from industry experts",
  },
  {
    icon: Users,
    title: "Network Building",
    desc: "Connect with like-minded investors and innovative startups",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "Seamless messaging between investors and entrepreneurs",
  },
  {
    icon: Star,
    title: "Quality Content",
    desc: "Curated articles and insights from verified professionals",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to connect, share, and grow in the startup
            ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/70 transition-all hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
