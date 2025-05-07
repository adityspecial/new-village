import React, { useState, useRef, Children } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, Landmark, PackageSearch, TrendingUp, Files, Handshake, IndianRupee
} from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState<string | null>(null);

  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subSubmenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnterSubmenu = (itemName: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(itemName);
  };
  const [mobileOpenMenus, setMobileOpenMenus] = useState<{ [key: string]: boolean }>({});
const toggleMobileMenu = (name: string) => {
  setMobileOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
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
            { name: 'Farmer Tranning', path: '/work/agriculture/farmer-training' },
            { name: 'Soil Health', path: '/work/agriculture/soil' }
          ]
        },
        { name: 'Environment', path: '/work/environment' },
        { name: 'Health', path: '/work/health',
          children:[
            { name: 'Hygiene Campaign', path: '/work/health/hygiene-campaign' },
            { name: 'Yoga', path: '/work/health/yoga' }
          ]
         },
        { name: 'Livelihood', path: '/work/livelihood' },
        { name: 'Gram Siri', path: '/work/gram-siri' },
        { name: 'KIF Chapters', path: '/work/chapters' },
        { name: 'Adopted Villages', path: '/work/villages' }
      ]
    },
    {
      name: 'Impact',
      path: '/impact',
      icon: TrendingUp,
      submenu: [
        { name: 'Newsletter', path: '/impact/newsletter' },
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Reports', path: '/impact/reports' },
        { name: 'Gallery', path: '/impact/gallery' },
        { name: 'Share Experience', path: '/impact/share' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon:   Files,
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
        { name: 'NGO Partnership', path: '/get-involved/ngo' },
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
            <span className="text-xl text-white font-heading">KIF</span>
          </Link>

          <div className="hidden md:flex space-x-8">
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
                        onMouseEnter={() =>
                          subItem.children && handleMouseEnterSubSubmenu(subItem.name)
                        }
                        onMouseLeave={handleMouseLeaveSubSubmenu}
                      >
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-400"
                        >
                          {subItem.name}
                        </Link>

                        {subItem.children && activeSubSubmenu === subItem.name && (
                          <div className="absolute left-full top-0 w-56 bg-white shadow-lg border border-amber-200 rounded-md">
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

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
  <div className="md:hidden mt-2 pb-4 space-y-2">
    {navItems.map((item) => (
      <div key={item.name} className="px-2">
        {/* Main menu always navigates */}
        <Link
          to={item.path}
          className="flex justify-between items-center text-white py-2 hover:bg-amber-600 rounded px-2"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>

        {/* If submenu exists, render toggle separately */}
        {item.submenu && (
          <>
            <div
              className="flex justify-between items-center text-sm text-white px-4 py-2 cursor-pointer"
              onClick={() => toggleMobileMenu(item.name)}
            >
              <span>Show {item.name} Options</span>
              <span>{mobileOpenMenus[item.name] ? '▲' : '▼'}</span>
            </div>

            {mobileOpenMenus[item.name] && (
              <div className="pl-6 space-y-1">
                {item.submenu.map((subItem) => (
                  <div key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className="block text-white text-sm py-1 hover:bg-amber-500 rounded px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>

                    {subItem.children && (
                      <div className="pl-4 space-y-1">
                        {subItem.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block text-white text-xs py-1 hover:bg-amber-400 rounded px-2"
                            onClick={() => setIsOpen(false)}
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
          </>
        )}
      </div>
    ))}
  </div>
)}
      </div>
    </nav>
  );
};

export default Navbar;
