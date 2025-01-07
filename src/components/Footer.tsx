import { Mail, Phone, MapPin } from 'lucide-react';
import { Newsletter } from './Newsletter';
import { SocialLinks } from './SocialLinks';

const contactInfo = [
  { icon: Mail, text: 'contact@zapprides.com', href: 'mailto:contact@zapprides.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: '123 Tech Street, Digital City', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Zappa Rides</h3>
            <p className="text-gray-400">
              Empowering transportation businesses with cutting-edge technology solutions
              for the digital age.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#cta" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <item.icon size={20} className="mr-2" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Newsletter />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zappa Rides. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}