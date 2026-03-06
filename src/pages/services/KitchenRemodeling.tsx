import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Wrench, Award, Clock, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const KitchenRemodeling = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/Kitchen Work 2.jpeg",
    "/images/Kitchen Work.jpeg",
    "/images/Kitchen Work2.jpeg",
    "/images/Kitchen Work3.jpeg",
    "/images/Kitchen Work4.jpeg",
    "/images/Kitchen Work 6.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Custom Design",
      description: "Tailored kitchen designs to match your style",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Materials",
      description: "Premium cabinets, countertops, and fixtures",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Expert Installation",
      description: "Professional installation by skilled craftsmen",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Timely Completion",
      description: "We deliver on time, every time",
    },
  ];

  const services = [
    "Custom Cabinet Installation",
    "Countertop Replacement",
    "Appliance Installation",
    "Backsplash & Tile Work",
    "Plumbing & Electrical Updates",
    "Kitchen Island Design",
    "Lighting Installation",
    "Flooring Options",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] via-[#0f1b2e] to-[#1a2f4a] py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 via-[#3b82f6]/30 via-[#2563eb]/20 to-[#1e40af]/20 animate-gradient-shift"></div>
        {/* Animated blue orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-[#fbbf24] text-[#0f172a] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Kitchen Remodeling
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Kitchen Into Your Dream Space
              </h1>
              <p className="text-xl text-white">
                Create a modern, functional kitchen with custom designs, quality materials, and expert craftsmanship. From concept to completion, we bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#fbbf24] text-[#0f172a] hover:bg-[#fcd34d] text-lg px-8 py-6 font-bold shadow-2xl hover:shadow-[#fbbf24]/50 transition-all hover:scale-105 border-2 border-[#fbbf24]"
                >
                  <a href={`tel:${brand.phoneE164}`} className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {brand.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-8 py-6 font-bold"
                >
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
                  <img
                    key={index}
                    src={img}
                    alt={`Kitchen ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] via-[#1e3a5f] to-[#0f1b2e] relative overflow-hidden">
        {/* Animated blue orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Kitchen Remodeling
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Professional kitchen renovation services you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-700 hover:border-[#3b82f6] transition-all hover:shadow-xl text-center bg-[#1e293b]"
              >
                <CardContent className="p-6">
                  <div className="bg-[#fbbf24]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#3b82f6]">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f1b2e] via-[#1a2f4a] to-[#1e3a5f] relative overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/10 via-[#3b82f6]/20 via-[#2563eb]/10 to-[#1e40af]/10 animate-gradient-shift"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Kitchen Services
              </h2>
              <p className="text-lg text-white mb-8">
                We offer comprehensive kitchen remodeling services to transform your space into a modern, functional, and beautiful kitchen you'll love.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#fbbf24] mt-0.5 flex-shrink-0" />
                    <span className="text-white">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <img
                    src={img}
                    alt={`Kitchen ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1b2e] via-[#1a2f4a] via-[#1e3a5f] to-[#0a1628] relative overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/15 via-[#3b82f6]/25 via-[#2563eb]/15 to-[#1e40af]/15 animate-gradient-shift"></div>
        {/* Blue orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Remodel Your Kitchen?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#fbbf24] text-[#0f172a] hover:bg-[#fcd34d] text-lg px-10 py-6 font-bold shadow-2xl hover:shadow-[#fbbf24]/50 transition-all hover:scale-105 border-2 border-[#fbbf24]"
            >
              <a href={`tel:${brand.phoneE164}`} className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                Call {brand.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-lg px-10 py-6 font-bold"
            >
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

export default KitchenRemodeling;
