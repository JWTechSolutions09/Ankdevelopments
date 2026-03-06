import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const JunkRemoval = () => {
  const services = [
    "Same Day Service",
    "Eco-Friendly Disposal",
    "All Types Accepted",
    "Affordable Rates",
    "Residential & Commercial",
    "Heavy Item Removal",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] via-[#0f1b2e] to-[#1a2f4a] py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 via-[#3b82f6]/30 via-[#2563eb]/20 to-[#1e40af]/20 animate-gradient-shift"></div>
        {/* Animated blue orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <div className="inline-block">
              <span className="bg-[#fbbf24] text-[#2563eb] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Junk Removal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast & Efficient Junk Removal
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Clear your space quickly with our professional junk removal services. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#fbbf24] text-[#2563eb] hover:bg-[#fcd34d] text-lg px-8 py-6 font-bold shadow-lg">
                <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {brand.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-8 py-6 font-bold">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Junk Removal Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#fbbf24] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/Junk Removal.jpeg" alt="Junk Removal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JunkRemoval;
