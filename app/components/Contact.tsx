'use client';

import React from 'react';
import { Calendar, MessageCircle, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Let&apos;s discuss your project, explore collaboration opportunities, or just chat about technology.
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-4 sm:space-y-6">
          {/* Calendly Link */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-700 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start sm:items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-1">Schedule a Meeting</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    Book a convenient time for a focused discussion about your project or ideas.
                  </p>
                  <a
                    href="https://calendly.com/subhamsatapathy/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium break-all sm:break-normal"
                  >
                    <span className="hidden sm:inline">calendly.com/subhamsatapathy/new-meeting</span>
                    <span className="sm:hidden">Book Meeting</span>
                    <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Send an Email</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  Prefer email? Drop me a message and I&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@subhs.xyz"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
                >
                  hello@subhs.xyz
                  <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 