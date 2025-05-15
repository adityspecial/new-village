import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import TranslateWidget from './TranslateWidget';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61556159143910',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/kifdwd',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kifdwd',
    },
    {
      name: 'Youtube',
      icon: Youtube,
      url: 'https://www.youtube.com/@kifdwd',
    },
  ];

  return (
    <footer className="bg-orange-800 text-amber-50 pattern-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-semibold">KIF</span>
            </div>
            <p className="text-amber-200">
              "Empowering rural communities through education, sustainable
              agriculture, and preservation of traditional crafts while creating economic opportunities for villagers"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/work', 'Our Work'],
                ['/impact', 'Impact'],
                ['/get-involved', 'Get Involved'],
                ['/donate', 'Donate'],
              ].map(([path, label]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 text-amber-200" />
                <span className="text-amber-200">
                  #371, Hebballi Road, Maradagi Village - 580112
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-200" />
                <span className="text-amber-200">+91 99021 29083</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-200" />
                <span className="text-amber-200">namaste@kifdwd.org</span>
              </li>
            </ul>
          </div>

          {/* Social + Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Language</h3>
              <TranslateWidget />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-amber-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-amber-200 text-center sm:text-left">
            © {new Date().getFullYear()} KIF. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-amber-700 hover:bg-amber-600 text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
