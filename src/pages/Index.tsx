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
      description: "Energy-efficient windows that enhance comfort and reduce utility costs.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/House Work2.jpeg",
      link: "/servicios/window-replacement",
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting to refresh and protect your home.",
      icon: <Paintbrush className="h-8 w-8" />,
      image: "/images/Living Room.jpeg",
      link: "/servicios/painting-services",
    },
    {
      title: "Junk Removal",
      description: "Fast and efficient junk removal services to clear your space quickly.",
      icon: <Sparkles className="h-8 w-8" />,
      image: "/images/Junk Removal.jpeg",
      link: "/servicios/junk-removal",
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#8ba5c8] via-[#7a95b8] to-[#8ba5c8]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-[#f5d47a] text-[#8ba5c8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Serving Boston, MA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <br />
                  <span className="text-[#f5d47a]">Home Today</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-50 font-light max-w-lg">
                  Professional home improvement services in Boston, MA. Quality craftsmanship you can trust.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#f5d47a] text-[#8ba5c8] hover:bg-[#fcd47a] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all"
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

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#f5d47a]" />
                  <span className="text-white">Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-[#f5d47a]" />
                  <span className="text-white">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8ba5c8]/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8ba5c8] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home improvement solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-[#f5d47a] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-[#8ba5c8] transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8ba5c8]/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#f5d47a] text-[#8ba5c8] p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#8ba5c8] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-[#8ba5c8] font-semibold hover:text-[#f5d47a] transition-colors flex items-center gap-2"
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
      <section className="py-20 bg-gradient-to-br from-[#8ba5c8] to-[#7a95b8]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose A&K Development
            </h2>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Excellence in every project, satisfaction in every home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border-l-4 border-[#f5d47a]"
              >
                <div className="bg-[#f5d47a] w-14 h-14 rounded-xl flex items-center justify-center text-[#8ba5c8] mb-4">
                  {feature.icon}
                </div>
                <div className="text-4xl font-bold text-[#f5d47a] mb-2">
                  {feature.number}
                </div>
                <div className="text-white/80 text-sm mb-3">{feature.label}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-50 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8ba5c8] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by homeowners in Boston, MA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#8ba5c8] hover:shadow-xl transition-all bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#f5d47a] text-[#f5d47a]"
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
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-[#8ba5c8]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8ba5c8] via-[#7a95b8] to-[#8ba5c8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f5d47a] text-[#8ba5c8] hover:bg-[#fcd47a] text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transition-all"
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

export default Index;
