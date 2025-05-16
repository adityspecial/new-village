import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, Landmark, PackageSearch, TrendingUp, Files, Handshake, IndianRupee,
  ChevronDown, ChevronUp
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState<string | null>(null);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [expandedSubmenus, setExpandedSubmenus] = useState<string[]>([]);

  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subSubmenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnterSubmenu = (itemName: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(itemName);
  };

  const handleMouseLeaveSubmenu = () => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
      setActiveSubSubmenu(null);
    }, 300);
  };

  const handleMouseEnterSubSubmenu = (subItemName: string) => {
    if (subSubmenuTimeout.current) clearTimeout(subSubmenuTimeout.current);
    setActiveSubSubmenu(subItemName);
  };

  const handleMouseLeaveSubSubmenu = () => {
    subSubmenuTimeout.current = setTimeout(() => {
      setActiveSubSubmenu(null);
    }, 300);
  };

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName) 
        : [...prev, menuName]
    );
  };

  const toggleSubmenu = (submenuName: string) => {
    setExpandedSubmenus(prev => 
      prev.includes(submenuName) 
        ? prev.filter(name => name !== submenuName) 
        : [...prev, submenuName]
    );
  };

  const navItems = [
    {
      name: 'About Us',
      path: '/about',
      icon: Landmark,
      submenu: [
        { name: 'Our Story', path: '/about/ourstory' },
        { name: 'Team', path: '/about/team' },
        { name: 'Model Village', path: '/about/modelvillage' },
        { name: 'Financial Reports', path: '/about/reports' }
      ]
    },
    {
      name: 'Our Work',
      path: '/work',
      icon: PackageSearch,
      submenu: [
        {
          name: 'Education',
          path: '/work/education',
          children: [
            { name: 'Akshar Prabhavam', path: '/work/education/akshar-prabhavam' },
            { name: 'Digital Literacy', path: '/work/education/digital-literacy' },
            { name: 'Spoken English', path: '/work/education/spoken-english' }
          ]
        },
        {
          name: 'Agriculture',
          path: '/work/agriculture',
          children: [
            { name: 'Farmer Training', path: '/work/agriculture/farmer-training' },
            { name: 'Farmers Field School', path: '/work/agriculture/farmers-field-school' }
          ]
        },
        { name: 'Environment', path: '/work/environment' },
        {
          name: 'Health',
          path: '/work/health',
          children: [
            { name: 'Hygiene Campaign', path: '/work/health/hygiene-campaign' },
            { name: 'Yoga', path: '/work/health/yoga' }
          ]
        },
        {
          name: 'Gram-Siri',
          path: '/work/gramsiri',
          children: [
            { name: 'Pada Pooja', path: '/work/gramsiri/Padapooja' },
            { name: 'Kreedotsava', path: '/work/gramsiri/kreedotsava' }
          ]
        },
        { name: 'Livelihood', path: '/work/livelihood' }
      ]
    },
    {
      name: 'Impact',
      path: '/impact',
      icon: TrendingUp,
      submenu: [
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Gallery', path: '/impact/gallery' },
        { name: 'Share Experience', path: '/impact/share' },
        { name: 'Activities', path: '/impact/activities' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: Files,
      submenu: [
        { name: 'Publications', path: '/resources/publications' },
        { name: 'Videos', path: '/resources/videos' }
      ]
    },
    {
      name: 'Get Involved',
      path: '/get-involved',
      icon: Handshake,
      submenu: [
        { name: 'Volunteering', path: '/get-involved/volunteer' },
        { name: 'CSR Partnerships', path: '/get-involved/csr' },
        { name: 'Internships', path: '/get-involved/internships' },
        { name: 'Events', path: '/get-involved/events' }
      ]
    },
    {
      name: 'Donate',
      path: '/donate',
      icon: IndianRupee
    }
  ];

  return (
    <nav className="bg-orange-800 text-white pattern-bg shadow-md z-50 font-body font-semibold relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/Navbar/logo.jpg" alt="Logo" className="h-8 w-8 object-cover" />
            <span className="text-sm text-white font-heading max-sm:text-[12px]">Karnataka Incubation Foundation</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnterSubmenu(item.name)}
                onMouseLeave={handleMouseLeaveSubmenu}
              >
                <Link
                  to={item.path}
                  className="relative text-white hover:text-amber-400 transition duration-200 py-2 flex items-center"
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  <span className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-amber-400 before:transition-all before:duration-300">
                    {item.name}
                  </span>
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 top-full w-56 bg-white border border-amber-200 rounded shadow-lg mt-2 py-2 z-40">
                    {item.submenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        className="relative group"
                        onMouseEnter={() => subItem.children && handleMouseEnterSubSubmenu(subItem.name)}
                        onMouseLeave={handleMouseLeaveSubSubmenu}
                      >
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-400"
                        >
                          {subItem.name}
                        </Link>

                        {subItem.children && activeSubSubmenu === subItem.name && (
                          <div className="absolute top-0 left-full w-56 bg-white border border-amber-200 rounded shadow-lg ml-1">
                            {subItem.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-400"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-orange-700/50 last:border-b-0">
                <div className="flex items-center justify-between px-2">
                  <Link
                    to={item.path}
                    className="flex items-center text-white py-2 hover:text-amber-400 transition-colors duration-200 flex-grow"
                    onClick={() => {
                      setIsOpen(false);
                      setExpandedMenus([]);
                      setExpandedSubmenus([]);
                    }}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {item.submenu && (
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className="p-2 text-white hover:text-amber-400 transition-colors duration-200"
                    >
                      {expandedMenus.includes(item.name) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>

                {item.submenu && expandedMenus.includes(item.name) && (
                  <div className="pl-8">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="border-t border-orange-700/30">
                        <div className="flex items-center justify-between py-1">
                          <Link
                            to={subItem.path}
                            className="text-white hover:text-amber-400 flex-grow transition-colors duration-200 text-sm pl-2"
                            onClick={() => {
                              setIsOpen(false);
                              setExpandedMenus([]);
                              setExpandedSubmenus([]);
                            }}
                          >
                            {subItem.name}
                          </Link>
                          
                          {subItem.children && (
                            <button
                              onClick={() => toggleSubmenu(subItem.name)}
                              className="p-1 text-white hover:text-amber-400 transition-colors duration-200"
                            >
                              {expandedSubmenus.includes(subItem.name) ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                          )}
                        </div>

                        {subItem.children && expandedSubmenus.includes(subItem.name) && (
                          <div className="pl-4">
                            {subItem.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className="block text-white py-1 pl-2 text-sm hover:text-amber-400 transition-colors duration-200"
                                onClick={() => {
                                  setIsOpen(false);
                                  setExpandedMenus([]);
                                  setExpandedSubmenus([]);
                                }}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;