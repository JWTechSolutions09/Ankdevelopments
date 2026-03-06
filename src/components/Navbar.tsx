import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Home, Hammer, Image as ImageIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/nosotros", icon: Hammer },
    { name: "Services", path: "/servicios", icon: Hammer },
    { name: "Gallery", path: "/proyectos", icon: ImageIcon },
    { name: "Contact", path: "/contacto", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar-ak sticky top-0 z-50 bg-[#0f172a] border-b border-[#2563eb]/20 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-[#2563eb]/10' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:opacity-90 transition-opacity"
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Logo.jpg"
                alt="A&K Development Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-[#2563eb] leading-tight group-hover:text-[#1e40af] transition-colors">
                A&K DEVELOPMENT
              </span>
              <span className="text-xs text-[#fbbf24] font-semibold hidden sm:block">
                YOUR HOME SOLUTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-semibold shadow-md"
                      : "text-gray-700 hover:bg-[#fbbf24]/20 hover:text-[#2563eb]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <Button
              asChild
              className="bg-[#fbbf24] hover:bg-[#fcd34d] text-[#0f172a] px-6 py-2.5 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                {brand.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
