import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const PaintingServices = () => {
  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Quality Paint Materials",
    "Clean Professional Finish",
    "Color Consultation",
    "Surface Preparation",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#a5bdd8] via-[#9ba5c8] to-[#a5bdd8] py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <div className="inline-block">
              <span className="bg-[#fef08a] text-[#a5bdd8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Painting Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Painting Services
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Refresh and protect your home with our professional interior and exterior painting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#fef08a] text-[#a5bdd8] hover:bg-[#fbbf24] text-lg px-8 py-6 font-bold shadow-lg">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#a5bdd8] mb-6">Our Painting Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#fef08a] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/Living Room.jpeg" alt="Painting Services" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintingServices;
