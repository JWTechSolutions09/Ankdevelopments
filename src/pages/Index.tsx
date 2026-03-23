import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Star,
  CheckCircle,
  Home,
  Wrench,
  Paintbrush,
  Sparkles,
  Award,
  Users,
  Clock,
  MapPin,
  Hammer,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/Kitchen Work 2.jpeg",
    "/images/Bathroom Work.jpeg",
    "/images/Living Room.jpeg",
    "/images/House Work2.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Home Improvement",
      description: "Complete home renovation and improvement services to transform your living space.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/House Work7.jpeg",
      link: "/servicios/home-improvement",
    },
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with custom designs, modern appliances, and quality craftsmanship.",
      icon: <Wrench className="h-8 w-8" />,
      image: "/images/Kitchen Work 2.jpeg",
      link: "/servicios/kitchen-remodeling",
    },
    {
      title: "Bathroom Remodeling",
      description: "Create a luxurious bathroom retreat with premium fixtures and elegant finishes.",
      icon: <Sparkles className="h-8 w-8" />,
      image: "/images/Bathroom Work2.jpeg",
      link: "/servicios/bathroom-remodeling",
    },
    {
      title: "Window Replacement",
      description: "Professional window replacement services to enhance your home's comfort and appearance.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/WindowReplacement.jpeg",
      link: "/servicios/window-replacement",
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting to refresh and protect your home.",
      icon: <Paintbrush className="h-8 w-8" />,
      image: "/images/Kitchen Work 2.jpeg",
      link: "/servicios/painting-services",
    },
    {
      title: "Junk Removal",
      description: "Fast and efficient junk removal services to clear your space quickly.",
      icon: <Sparkles className="h-8 w-8" />,
      image: "/images/Junk Removal.jpeg",
      link: "/servicios/junk-removal",
    },
    {
      title: "Structural & Interior Construction",
      description: "Professional structural and interior construction services including framing, insulation, drywall, and electrical/plumbing.",
      icon: <Hammer className="h-8 w-8" />,
      image: "/images/House Work7.jpeg",
      link: "/servicios/structural-construction",
    },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured professionals you can trust",
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled craftsmen with years of experience",
      number: "+50",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Completion",
      description: "We respect your time and deliver on schedule",
      number: "98%",
      label: "On Time",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Satisfaction guaranteed on all our work",
      number: "4.9",
      label: "Rating",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Boston, MA",
      text: "A&K Development transformed our kitchen completely. The attention to detail and quality of work was outstanding. Highly recommend!",
      rating: 5,
      image: "/images/Kitchen Work 2.jpeg",
    },
    {
      name: "Michael R.",
      location: "Boston, MA",
      text: "Professional bathroom remodel from start to finish. The team was clean, efficient, and the results exceeded our expectations.",
      rating: 5,
      image: "/images/Bathroom Work.jpeg",
    },
    {
      name: "Jennifer L.",
      location: "Boston, MA",
      text: "We used A&K for window replacement and painting. Great service, fair pricing, and beautiful results. Will definitely use them again!",
      rating: 5,
      image: "/images/Living Room.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        {/* Animated yellow orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fcd34d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900 space-y-8">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="/images/Logo Horizontal2.png"
                  alt="A&K Development Logo"
                  className="h-32 w-auto sm:h-40 sm:w-auto md:h-48 md:w-auto object-contain drop-shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-[#fbbf24] text-[#0f172a] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Serving Boston, MA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <br />
                  <span className="text-[#fbbf24]">Home Today</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-light max-w-lg">
                  Professional home improvement services in Boston, MA. Quality craftsmanship you can trust.
                </p>
              </div>

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
                  className="bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Link to="/contacto" className="flex items-center">
                    Request Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg shadow-lg">
                  <MapPin className="h-5 w-5 text-[#fbbf24]" />
                  <span className="text-gray-900 font-semibold">Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg shadow-lg">
                  <Clock className="h-5 w-5 text-[#fbbf24]" />
                  <span className="text-gray-900 font-semibold">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <div className="absolute inset-0">
                  {heroImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Home improvement ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0f1b2e] relative overflow-hidden">
        {/* Animated blue orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive home improvement solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-[#fbbf24] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-700 hover:border-[#fbbf24] transition-all duration-300 hover:shadow-xl bg-[#1e293b]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#0f172a] p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-[#3b82f6] font-semibold hover:text-[#fbbf24] transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated yellow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fcd34d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose A&K Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in every project, satisfaction in every home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-md p-8 rounded-2xl hover:bg-gray-50 transition-all border-l-4 border-[#fbbf24] border-2 border-gray-200 shadow-lg hover:shadow-xl"
              >
                  <div className="bg-[#fbbf24] w-14 h-14 rounded-xl flex items-center justify-center text-[#0f172a] mb-4">
                  {feature.icon}
                </div>
                <div className="text-4xl font-bold text-[#fbbf24] mb-2">
                  {feature.number}
                </div>
                <div className="text-gray-600 text-sm font-semibold mb-3">{feature.label}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0f1b2e] relative overflow-hidden">
        {/* Animated blue orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl animate-blue-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#2563eb]/10 rounded-full blur-3xl animate-blue-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by homeowners in Boston, MA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-700 hover:border-[#3b82f6] hover:shadow-xl transition-all bg-[#1e293b]"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]"
                      />
                    ))}
                  </div>
                  <div className="h-32 w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-200 mb-6 italic text-base">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated yellow orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Home?
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
              className="bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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

export default Index;
