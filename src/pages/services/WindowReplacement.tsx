import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const WindowReplacement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const windowImages = [
    "/images/window.jpeg",
    "/images/window2.jpeg",
    "/images/window3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % windowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    "Professional Installation",
    "Warranty Included",
    "Various Styles & Materials",
    "Custom Sizing",
    "Weatherproofing",
    "Quality Materials",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] via-[#0f1b2e] to-[#1a2f4a] py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 via-[#3b82f6]/30 via-[#2563eb]/20 to-[#1e40af]/20 animate-gradient-shift pointer-events-none"></div>
        {/* Animated blue orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-blue-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl animate-blue-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center text-white space-y-6 relative z-10">
            <div className="inline-block">
              <span className="bg-[#fbbf24] text-[#0f172a] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Window Replacement
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Window Replacement
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Enhance your home's comfort and appearance with our professional window replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button asChild size="lg" className="bg-[#fbbf24] text-[#0f172a] hover:bg-[#fcd34d] text-lg px-8 py-6 font-bold shadow-2xl hover:shadow-[#fbbf24]/50 transition-all hover:scale-105 border-2 border-[#fbbf24]">
                <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {brand.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-[#1e293b]/90 backdrop-blur-md text-white hover:bg-[#3b82f6]/30 border-2 border-[#3b82f6] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/contacto" className="flex items-center">
                  Request Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0a1628] via-[#1e3a5f] to-[#0f1b2e] relative overflow-hidden">
        {/* Animated blue orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Window Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#fbbf24] mt-0.5 flex-shrink-0" />
                    <span className="text-white">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-[#0a1628]">
              {windowImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Window Replacement ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {windowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-8 bg-[#fbbf24]"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowReplacement;
