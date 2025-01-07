import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Users2, Rocket, PiggyBank, Scale, CheckCircle2, Trophy } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Add your company logo, name, and color scheme',
  },
  {
    icon: Users2,
    title: 'User-Friendly Interfaces',
    description: 'Designed for customers and drivers alike',
  },
  {
    icon: Rocket,
    title: 'Fast Go-to-Market',
    description: 'Launch in less than a week',
  },
  {
    icon: PiggyBank,
    title: 'Cost-Effective',
    description: 'Affordable solutions compared to building from scratch',
  },
  {
    icon: Scale,
    title: 'Scalable Systems',
    description: 'Expand with ease as your business grows',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="features"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Choose <span className="text-yellow-400">Zappa Rides</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <feature.icon size={48} className="text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gray-800/50 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Trophy size={32} className="text-yellow-400" />
            <h3 className="text-2xl font-bold">Tried, Tested & Trusted</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Our Own Success Story</h4>
                <p className="text-gray-300">
                  Experience the same technology that powers our successful Zappa Rides app, serving thousands of customers daily.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Battle-Tested Platform</h4>
                <p className="text-gray-300">
                  Built on years of real-world experience and continuous improvements based on user feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.zapparides.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Try our app in action →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors"
            onClick={() => {
              const nextSection = document.getElementById('pricing');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Customizing Your App
          </button>
        </motion.div>
      </div>
    </section>
  );
}