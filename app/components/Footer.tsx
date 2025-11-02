'use client';

import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/subham-satapathy',
      icon: Github,
      hoverColor: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/subham-satapathy',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'X',
      url: 'https://x.com/subhsxyz',
      icon: 'custom-twitter',
      hoverColor: 'hover:text-gray-200'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/s.subham_',
      icon: Instagram,
      hoverColor: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="relative z-10 bg-black border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8 mb-20 sm:mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-20 inline-flex items-center justify-center p-3 text-gray-400 ${link.hoverColor} transition-all duration-300 transform hover:scale-110 cursor-pointer rounded-lg hover:bg-gray-800/50`}
                  aria-label={`Visit my ${link.name} profile`}
                >
                  {link.icon === 'custom-twitter' ? (
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" 
                      alt="Twitter/X"
                      className="w-6 h-6 filter invert"
                    />
                  ) : (
                    (() => {
                      const IconComponent = link.icon as React.ComponentType<{ size: number }>;
                      return <IconComponent size={24} />;
                    })()
                  )}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Subham Satapathy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 