'use client';
import React, { useState } from 'react';

// Simplified color schemes - using 3 main colors instead of 17
const TECH_COLORS: Record<string, { primary: string; secondary: string; accent: string }> = {
  AWS: { primary: '#FF9900', secondary: '#FF6600', accent: '#FFB84D' },
  'Node.js': { primary: '#68A063', secondary: '#3C873A', accent: '#90C695' },
  JavaScript: { primary: '#F7DF1E', secondary: '#FFD600', accent: '#FFF176' },
  TypeScript: { primary: '#3178C6', secondary: '#2196F3', accent: '#64B5F6' },
  'React.js': { primary: '#61DAFB', secondary: '#00D4AA', accent: '#4DD0E1' },
  PostgreSQL: { primary: '#336791', secondary: '#1565C0', accent: '#5C6BC0' },
  Solidity: { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA' },
  'Express.js': { primary: '#68A063', secondary: '#2D5016', accent: '#90C695' },
  Docker: { primary: '#2496ED', secondary: '#0DB7ED', accent: '#5DADE2' },
  'CI/CD': { primary: '#E74C3C', secondary: '#C0392B', accent: '#F1948A' },
};

const DEFAULT_COLORS = { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA' };

type TechSimpleButtonProps = {
  techName: string;
  iconSrc: string;
  className?: string;
};

export const TechSimpleButton: React.FC<TechSimpleButtonProps> = ({
  techName,
  iconSrc,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = TECH_COLORS[techName] || DEFAULT_COLORS;

  return (
    <div className={`relative inline-block group ${className}`}>
      <div
        className="relative w-32 h-12 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20, ${colors.accent}20)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.primary}40`,
        }}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}60, ${colors.accent}40)`,
            animation: isHovered ? 'gradient-shift 3s ease-in-out infinite' : 'none',
          }}
        />

        {/* Subtle glow effect */}
        <div
          className={`absolute inset-0 rounded-lg transition-all duration-300 ${
            isHovered ? 'shadow-lg' : 'shadow-none'
          }`}
          style={{
            boxShadow: isHovered ? `0 0 20px ${colors.primary}30` : 'none',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2 px-3 h-full">
          <img
            src={iconSrc}
            alt={techName}
            className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              filter: (techName === 'Express.js' || techName === 'CI/CD' || techName === 'Solidity') ? 'brightness(0) invert(1)' : 'none',
            }}
          />
          <span className="text-white text-sm font-medium truncate transition-colors duration-300 group-hover:text-yellow-300">
            {techName}
          </span>
        </div>
      </div>

      {/* CSS animation for gradient shift */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}; 