import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="cta"
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
            Let's Get You Started!
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Your digital transformation begins today. Take the leap and modernize your
            transportation business with Zappa Rides.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <Phone size={48} className="text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-300 mb-6">
                See Zappa Rides in action with a personalized demo
              </p>
              <a 
                href="tel:+1234567890"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Schedule Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <Mail size={48} className="text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Contact Sales</h3>
              <p className="text-gray-300 mb-6">
                Get in touch with our sales team for custom solutions
              </p>
              <a
                href="mailto:sales@zapprides.com"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Contact Sales
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <MessageCircle size={48} className="text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">WhatsApp Us</h3>
              <p className="text-gray-300 mb-6">
                Chat with us directly on WhatsApp for quick responses
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Open WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}