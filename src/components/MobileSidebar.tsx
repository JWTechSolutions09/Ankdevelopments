import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Home, Hammer, Image as ImageIcon, Mail, Phone, Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cerrar sidebar cuando cambia la ruta
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevenir scroll del body cuando el sidebar está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/nosotros", icon: Hammer },
    { name: "Services", path: "/servicios", icon: Hammer },
    { name: "Gallery", path: "/proyectos", icon: ImageIcon },
    { name: "Contact", path: "/contacto", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-[#2563eb] hover:bg-[#fbbf24]/20 p-2"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#0f172a] border-r border-[#2563eb]/20 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#2563eb]/20 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
            <div className="flex items-center space-x-3">
              <img
                src="/images/Logo.jpg"
                alt="A&K Development Logo"
                className="h-10 w-10 object-contain rounded-lg bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-tight">
                  A&K DEVELOPMENT
                </span>
                <span className="text-xs text-[#fbbf24] font-semibold">
                  YOUR HOME SOLUTION
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                      active
                        ? "bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white shadow-lg"
                        : "text-gray-700 hover:bg-[#fbbf24]/10 hover:text-[#2563eb]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          active
                            ? "bg-white/20"
                            : "bg-[#fbbf24]/10 group-hover:bg-[#fbbf24]/20"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            active ? "text-white" : "text-[#2563eb]"
                          }`}
                        />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                        active ? "text-white" : "text-gray-400"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-6 px-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Quick Contact */}
            <div className="px-4 space-y-3">
              <div className="bg-gradient-to-br from-[#fbbf24]/10 to-[#fde68a]/10 p-4 rounded-xl border border-[#fbbf24]/20">
                <p className="text-sm font-semibold text-[#2563eb] mb-2">
                  Need Help?
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  Call us now for a free consultation
                </p>
                <Button
                  asChild
                  className="w-full bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold"
                >
                  <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {brand.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#2563eb]/20 bg-[#1e293b]">
            <p className="text-xs text-center text-gray-400">
              © 2026 A&K Development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
