import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="text-gray-400 hover:text-yellow-400 transition-colors"
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
}