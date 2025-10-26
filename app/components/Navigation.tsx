'use client';

import React from 'react';
import { Home, User, Briefcase, FileText, Code, MessageSquare, FileUser } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const Navigation = () => {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Resume', url: '/resume', icon: FileUser },
    { name: 'Contact', url: '#contact', icon: MessageSquare },
  ];

  return <NavBar items={navItems} />;
};

export default Navigation; 