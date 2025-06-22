'use client';

import React from 'react';
import { Calendar, MessageCircle, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your project, explore collaboration opportunities, or just chat about technology.
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-6">
          {/* Calendly Link */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Schedule a Meeting</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Book a convenient time for a focused discussion about your project or ideas.
                  </p>
                  <a
                    href="https://calendly.com/subhamsatapathy/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    calendly.com/subhamsatapathy/new-meeting
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Send an Email</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Prefer email? Drop me a message and I&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@subhs.xyz"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
                >
                  hello@subhs.xyz
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Message */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Quick Response</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Need a quick answer? The fastest way to reach me is through the calendar link above.
                </p>
                <span className="text-purple-400 text-sm font-medium">
                  Typically respond within a few hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 