import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    
   
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-purple-400">TechVerse</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="relative group">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center hover:text-purple-400"
                  >
                    {item.label} <ChevronDown size={18} className="ml-1" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-10 left-0 bg-gray-800 rounded shadow-md py-2 w-40">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={index} href={item.href} className="hover:text-purple-400">
                  {item.label}
                </a>
              )
            )}

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 px-3 py-1 rounded focus:outline-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-full hover:text-purple-400"
                >
                  {item.label} <ChevronDown size={18} className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block hover:text-purple-400"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={index} href={item.href} className="block hover:text-purple-400">
                {item.label}
              </a>
            )
          )}

          <input
            type="text"
            placeholder="Search..."
            className="mt-2 w-full bg-gray-700 px-3 py-1 rounded focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
