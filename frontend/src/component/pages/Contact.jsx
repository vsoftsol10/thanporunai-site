import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HeadBG from '../../assets/contact-back.png';
import { Phone, Twitter, Instagram, Mail } from 'lucide-react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function ContactComponent() {

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Illustration */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* Fully Responsive Illustration */}
          <div className="relative mb-6 sm:mb-8 flex justify-center">
            <img
              src={HeadBG}
              alt="LoveHand"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 object-contain"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4">
            Join hands with us for social change. Share your ideas, requests, or feedback – we are here to listen and act.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">

          {/* Contact Info */}
          <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-sm border order-2 md:order-1">
            {/* Phone Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Phone</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-gray-900 font-medium break-all sm:break-normal">
                  Office: +91 7708927245 |+91 9655162224
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Email</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-900 font-medium break-all">
                admin@thanporunaiarakattalai.com
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Follow us</span>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                  <a 
                    href='#' 
                    className='text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full'
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 px-2">
              Our Service Highlights
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0">1.</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Riverside cleanup for a cleaner environment.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0">2.</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Skill development programs for students.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0">3.</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Tree planting for a greener future.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0">4.</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Social welfare drives for community care.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg flex-shrink-0">5.</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Sports activities to empower youth.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Quote Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 text-center">
            <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <div className="relative">
                {/* Decorative quote marks - responsive sizing */}
                <div className="absolute -top-2 sm:-top-3 md:-top-4 -left-1 sm:-left-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 opacity-80">
                  "
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-1 sm:-right-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 opacity-80">
                  "
                </div>

                {/* Quote text - fully responsive */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 italic leading-relaxed px-4 sm:px-6 md:px-8 lg:px-10">
                  A small action can be the beginning of a big social change.
                </h3>
              </div>

              {/* Attribution */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-200">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-700 font-semibold">
                  - Thanporunai Arakattalai
                </p>
              </div>

              {/* CTA Button - fully responsive */}
              <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
                <Link to="/needus">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-12 lg:py-6 lg:px-16 rounded-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Need Us 
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}