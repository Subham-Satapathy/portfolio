'use client';
import React, { useState } from 'react';
import { Liquid, Colors } from './button-1';

// Color schemes for different technologies
const TECH_COLOR_SCHEMES: Record<string, Colors> = {
  // AWS - Orange theme
  AWS: {
    color1: '#FF9900',
    color2: '#FF6600',
    color3: '#FFB84D',
    color4: '#FFCC80',
    color5: '#FFF3E0',
    color6: '#FF8A50',
    color7: '#E65100',
    color8: '#FF7043',
    color9: '#FFB74D',
    color10: '#FFCC02',
    color11: '#FF5722',
    color12: '#FFAB91',
    color13: '#F57C00',
    color14: '#FFE0B2',
    color15: '#FFC947',
    color16: '#FF8F00',
    color17: '#FF6F00',
  },
  // Node.js - Green theme
  'Node.js': {
    color1: '#68A063',
    color2: '#3C873A',
    color3: '#90C695',
    color4: '#B8D4BA',
    color5: '#E8F5E8',
    color6: '#4CAF50',
    color7: '#2E7D32',
    color8: '#66BB6A',
    color9: '#81C784',
    color10: '#A5D6A7',
    color11: '#388E3C',
    color12: '#C8E6C9',
    color13: '#1B5E20',
    color14: '#DCEDC8',
    color15: '#689F38',
    color16: '#558B2F',
    color17: '#33691E',
  },
  // JavaScript - Yellow theme
  JavaScript: {
    color1: '#F7DF1E',
    color2: '#FFD600',
    color3: '#FFF176',
    color4: '#FFEB3B',
    color5: '#FFFDE7',
    color6: '#FBC02D',
    color7: '#F57F17',
    color8: '#FFEB38',
    color9: '#FFF59D',
    color10: '#FFEE58',
    color11: '#FF8F00',
    color12: '#FFF8E1',
    color13: '#FF6F00',
    color14: '#FFECB3',
    color15: '#FFB300',
    color16: '#FF8F00',
    color17: '#E65100',
  },
  // TypeScript - Blue theme
  TypeScript: {
    color1: '#3178C6',
    color2: '#2196F3',
    color3: '#64B5F6',
    color4: '#90CAF9',
    color5: '#E3F2FD',
    color6: '#1976D2',
    color7: '#0D47A1',
    color8: '#42A5F5',
    color9: '#2196F3',
    color10: '#BBDEFB',
    color11: '#1565C0',
    color12: '#E1F5FE',
    color13: '#0277BD',
    color14: '#B3E5FC',
    color15: '#0288D1',
    color16: '#0097A7',
    color17: '#00695C',
  },
  // React - Cyan theme
  'React.js': {
    color1: '#61DAFB',
    color2: '#00D4AA',
    color3: '#4DD0E1',
    color4: '#80DEEA',
    color5: '#E0F2F1',
    color6: '#26C6DA',
    color7: '#0097A7',
    color8: '#4FC3F7',
    color9: '#29B6F6',
    color10: '#81C784',
    color11: '#00BCD4',
    color12: '#B2EBF2',
    color13: '#0091EA',
    color14: '#E0F7FA',
    color15: '#00ACC1',
    color16: '#00838F',
    color17: '#006064',
  },
  // PostgreSQL - Dark Blue theme
  PostgreSQL: {
    color1: '#336791',
    color2: '#1565C0',
    color3: '#5C6BC0',
    color4: '#7986CB',
    color5: '#E8EAF6',
    color6: '#3F51B5',
    color7: '#1A237E',
    color8: '#5C6BC0',
    color9: '#7986CB',
    color10: '#9FA8DA',
    color11: '#303F9F',
    color12: '#C5CAE9',
    color13: '#283593',
    color14: '#D1C4E9',
    color15: '#512DA8',
    color16: '#4527A0',
    color17: '#311B92',
  },
  // Solidity - Purple theme
  Solidity: {
    color1: '#8B5CF6',
    color2: '#7C3AED',
    color3: '#A78BFA',
    color4: '#C4B5FD',
    color5: '#F3F4F6',
    color6: '#9333EA',
    color7: '#6B21A8',
    color8: '#8B5CF6',
    color9: '#A78BFA',
    color10: '#C4B5FD',
    color11: '#7C3AED',
    color12: '#E9D5FF',
    color13: '#5B21B6',
    color14: '#DDD6FE',
    color15: '#6D28D9',
    color16: '#4C1D95',
    color17: '#3730A3',
  },
  // Express.js - Dark Green theme (Node.js variant)
  'Express.js': {
    color1: '#68A063',
    color2: '#2D5016',
    color3: '#90C695',
    color4: '#B8D4BA',
    color5: '#1F2937',
    color6: '#16A085',
    color7: '#0D4F3C',
    color8: '#27AE60',
    color9: '#58D68D',
    color10: '#A9DFBF',
    color11: '#138D75',
    color12: '#D5F4E6',
    color13: '#0E6B0E',
    color14: '#ABEBC6',
    color15: '#148F77',
    color16: '#0B5345',
    color17: '#1E8449',
  },
  // Docker - Light Blue theme
  Docker: {
    color1: '#2496ED',
    color2: '#0DB7ED',
    color3: '#5DADE2',
    color4: '#85C1E9',
    color5: '#EBF5FB',
    color6: '#3498DB',
    color7: '#1B4F72',
    color8: '#5499C7',
    color9: '#7FB3D3',
    color10: '#AED6F1',
    color11: '#2E86AB',
    color12: '#D6EAF8',
    color13: '#154360',
    color14: '#BBDEFB',
    color15: '#2874A6',
    color16: '#1A5490',
    color17: '#21618C',
  },
  // CI/CD - Red theme
  'CI/CD': {
    color1: '#E74C3C',
    color2: '#C0392B',
    color3: '#F1948A',
    color4: '#F5B7B1',
    color5: '#FDEDEC',
    color6: '#EC7063',
    color7: '#922B21',
    color8: '#E74C3C',
    color9: '#F1948A',
    color10: '#F5B7B1',
    color11: '#CB4335',
    color12: '#FADBD8',
    color13: '#A93226',
    color14: '#F8D7DA',
    color15: '#D5342C',
    color16: '#B03A2E',
    color17: '#943126',
  },
};

// Default fallback color scheme
const DEFAULT_COLORS: Colors = {
  color1: '#8B5CF6',
  color2: '#7C3AED',
  color3: '#A78BFA',
  color4: '#C4B5FD',
  color5: '#F3F4F6',
  color6: '#9333EA',
  color7: '#6B21A8',
  color8: '#8B5CF6',
  color9: '#A78BFA',
  color10: '#C4B5FD',
  color11: '#7C3AED',
  color12: '#E9D5FF',
  color13: '#5B21B6',
  color14: '#DDD6FE',
  color15: '#6D28D9',
  color16: '#4C1D95',
  color17: '#3730A3',
};

type TechLiquidButtonProps = {
  techName: string;
  iconSrc: string;
  className?: string;
};

export const TechLiquidButton: React.FC<TechLiquidButtonProps> = ({
  techName,
  iconSrc,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color scheme for this technology
  const colors = TECH_COLOR_SCHEMES[techName] || DEFAULT_COLORS;

  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Liquid Animation Button */}
      <div
        className="relative w-32 h-12 mx-auto cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background blur effect */}
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[8px] opacity-70">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={colors} uniqueId={`bg-${techName}`} />
          </div>
        </div>

        {/* Main button container */}
        <div className="relative w-full h-full overflow-hidden rounded-lg border border-white/20">
          <span className="absolute inset-0 rounded-lg bg-black/80"></span>
          <Liquid isHovered={isHovered} colors={colors} uniqueId={`main-${techName}`} />
          
          {/* Border effects */}
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-lg border-2 border-white/30 mix-blend-overlay filter ${
                i === 1 ? 'blur-[2px]' : i === 2 ? 'blur-[3px]' : 'blur-[4px]'
              }`}
            ></span>
          ))}
        </div>

        {/* Content - Icon and Text */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-3">
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
    </div>
  );
}; 