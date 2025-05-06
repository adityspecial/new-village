import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61556159143910'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/kifdwd'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kifdwd'
    },
    {
      name: 'Youtube',
      icon: Youtube,
      url: 'https://www.youtube.com/@kifdwd'
    }
  ];

  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-xl font-semibold">KIF</span>
            </div>
            <p className="text-amber-200 mb-4">
              Empowering rural communities through sustainable development and preserving traditional values.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-amber-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-amber-200 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-amber-200 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-amber-200 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-amber-200 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-200" />
                <span className="text-amber-200">KIF Office Address</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-200" />
                <span className="text-amber-200">Contact Number</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-200" />
                <span className="text-amber-200">contact@kif.org</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-amber-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm">
            © {new Date().getFullYear()} KIF. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-amber-800 hover:bg-amber-700 text-white p-2 rounded-full transition-colors"
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