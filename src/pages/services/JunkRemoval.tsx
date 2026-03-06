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
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#6d7fa8] via-[#6d7fa8] to-[#6d7fa8] py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <div className="inline-block">
              <span className="bg-[#f5d47a] text-[#6d7fa8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
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
              <Button asChild size="lg" className="bg-[#f5d47a] text-[#6d7fa8] hover:bg-[#fcd47a] text-lg px-8 py-6 font-bold shadow-lg">
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#6d7fa8] mb-6">Our Junk Removal Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#f5d47a] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
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
