import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Smartphone, Settings, CreditCard, Users } from 'lucide-react';

const features = [
  { icon: Smartphone, text: 'Custom Branded Apps' },
  { icon: Settings, text: 'Easy Customization' },
  { icon: CreditCard, text: 'Secure Payments' },
  { icon: Users, text: 'Driver Management' },
];

export function Introduction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="introduction"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to the
            <span className="text-yellow-400"> Zappa Rides</span>
            <br />
            Software Distribution Network!
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Your one-stop solution to launching a professional transportation app in days, not months.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {features.map((Feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <Feature.icon size={48} className="text-yellow-400 mb-4" />
                <p className="text-sm md:text-base">{Feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 p-8 rounded-xl"
          >
            <Clock size={48} className="text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Launch in Days, Not Months</h3>
            <div className="h-2 bg-gray-700 rounded-full max-w-md mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="h-full bg-yellow-400 rounded-full"
              />
            </div>
            <p className="mt-4 text-gray-300">
              Get your customized ride-hailing solution up and running in less than a week
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}