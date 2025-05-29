import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VC Partner at Nexus Capital",
    text: "This platform has become my go-to source for discovering promising startups and sharing insights with the community.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, TechFlow",
    text: "We connected with three investors through the platform. The quality of connections is unmatched.",
  },
  {
    name: "Emma Thompson",
    role: "Angel Investor",
    text: "The content quality and networking opportunities here are exceptional. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            See what our community has to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/70 transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="text-white font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
