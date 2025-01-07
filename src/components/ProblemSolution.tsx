import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Users } from 'lucide-react';

export function ProblemSolution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="problem-solution"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to own a ride-hailing app with your logo and name—
            <span className="text-yellow-400">without waiting months or spending heavily on development?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <Users size={48} className="text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">The Problem</h3>
              <p className="text-gray-300">
                Losing customers to digital competitors while struggling with traditional booking methods
                and paper-based management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <Smartphone size={48} className="text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">The Solution</h3>
              <p className="text-gray-300">
                Launch your branded ride-hailing app quickly and affordably with Zappa Rides,
                and stay competitive in the digital age.
              </p>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors"
            onClick={() => {
              const nextSection = document.getElementById('introduction');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}