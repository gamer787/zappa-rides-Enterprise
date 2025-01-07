import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹19,999',
    monthly: '₹4,999',
    features: [
      'Single city operations can also be used for multiple cities such as round trips',
      'Driver and customer apps',
      'Basic analytics',
      'Basic admin panal',
      'Email support',
      'Custom Pricing that you set for your customers',
      '24/7 customer service',
    ],
  },
  {
    name: 'Advanced Plan',
    price: '₹29,999',
    monthly: '₹7,999',
    features: [
      'EVERYTHING FROM BASIC PLAN',
      'Multi-city support operations',
      'Enhanced analytics',
      'Priority email support',
      'admin panal and website login',
      'Custom branding',
      'Advanced reporting',
      'Driver verification system',
      'Custom Pricing that you set for your customers'
    ],
    popular: true,
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    monthly: 'Custom',
    features: [
      'All-inclusive features',
      'Advanced customizations',
      'Priority 24/7 support',
      'Dedicated account manager',
      'Custom integration support',
      'White-label solution',
    ],
  },
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleGetStarted = () => {
    const ctaSection = document.getElementById('cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Transparent Pricing Options
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative bg-gray-800 rounded-2xl p-8
                ${plan.popular ? 'border-2 border-yellow-400' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400"> one-time</span>
                <div className="text-gray-400 mt-2">
                  + {plan.monthly}/month maintenance
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-yellow-400 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleGetStarted}
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Add-On Services</h3>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="mb-4">
              <span className="font-semibold">Social Media Marketing Packages</span>
              <p className="text-gray-300">Starting from ₹5,999</p>
            </div>
            <div>
              <span className="font-semibold">Custom Features</span>
              <p className="text-gray-300">Pricing on demand and on useage a detailed report will be given on a monthly or weekly basis </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}