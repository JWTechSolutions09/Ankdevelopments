import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const BathroomRemodeling = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/Bathroom Work.jpeg",
    "/images/Bathroom Work2.jpeg",
    "/images/Bathroom Work3.jpeg",
    "/images/Bathroom Work4.jpeg",
    "/images/Bathroom Work5.jpeg",
    "/images/Bathroom Work6.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    "Modern Fixture Installation",
    "Tile & Flooring Work",
    "Vanity & Countertop Installation",
    "Shower & Tub Renovation",
    "Plumbing Updates",
    "Lighting Installation",
    "Mirror & Accessories",
    "Complete Bathroom Design",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#2563eb] py-20 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-[#fbbf24] text-[#2563eb] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Bathroom Remodeling
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Create Your Spa-Like Bathroom Retreat
              </h1>
              <p className="text-xl text-blue-50">
                Transform your bathroom into a luxurious, relaxing space with premium fixtures, elegant finishes, and professional installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#fbbf24] text-[#2563eb] hover:bg-[#fbbf24] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all">
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
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                {images.map((img, index) => (
                  <img key={index} src={img} alt={`Bathroom ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`} />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-6">Our Bathroom Services</h2>
              <p className="text-lg text-gray-700 mb-8">Complete bathroom renovation services to create your dream space.</p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#fbbf24] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, index) => (
                <div key={index} className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <img src={img} alt={`Bathroom ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2563eb] via-[#1e40af] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Remodel Your Bathroom?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#fbbf24] text-[#2563eb] hover:bg-[#fbbf24] text-lg px-10 py-6 font-bold shadow-xl">
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                Call {brand.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-10 py-6 font-bold">
              <Link to="/contacto" className="flex items-center justify-center">
                Request Estimate
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BathroomRemodeling;
