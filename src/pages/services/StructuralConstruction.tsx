import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Hammer, Award, Clock, Users, Wrench, Zap, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const StructuralConstruction = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/House Work7.jpeg",
    "/images/House Work2.jpeg",
    "/images/House Work3.jpeg",
    "/images/House Work4.jpeg",
    "/images/House Work5.jpeg",
    "/images/House Work6.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Expert Framing",
      description: "Professional structural framing services",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured professionals",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Completion",
      description: "We respect your time and deliver on schedule",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled craftsmen with years of experience",
    },
  ];

  const services = [
    "Framing",
    "Insulation",
    "Drywall",
    "Electrical and Plumbing",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] via-[#0f1b2e] to-[#1a2f4a] py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 via-[#3b82f6]/30 via-[#2563eb]/20 to-[#1e40af]/20 animate-gradient-shift pointer-events-none"></div>
        {/* Animated blue orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-blue-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl animate-blue-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 relative z-10">
              <div className="inline-block">
                <span className="bg-[#fbbf24] text-[#0f172a] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Structural & Interior Construction
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Structural & Interior Construction
              </h1>
              <p className="text-xl text-white">
                Expert structural and interior construction services including framing, insulation, drywall installation, and electrical/plumbing work. We build the foundation of your home improvement project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
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
                    alt={`Structural construction ${index + 1}`}
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
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated yellow orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#fcd34d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Structural & Interior Construction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional structural and interior construction services you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#fbbf24] transition-all hover:shadow-xl text-center bg-white"
              >
                <CardContent className="p-6">
                  <div className="bg-[#fbbf24]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#2563eb]">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                Our Structural & Interior Construction Services
              </h2>
              <p className="text-lg text-white mb-8">
                We offer comprehensive structural and interior construction services to build the foundation of your home improvement project. From framing to finishing, we handle every aspect with precision and expertise.
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
                    alt={`Structural construction ${index + 1}`}
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
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated yellow orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
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
              className="bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 text-lg px-10 py-6 font-bold"
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

export default StructuralConstruction;
