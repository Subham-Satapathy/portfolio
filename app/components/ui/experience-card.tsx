'use client';

import React from 'react';

interface ExperienceCardProps {
  designation: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  designation,
  company,
  description,
  achievements,
  technologies,
}) => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {designation} at {company}
        </h3>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          {description}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
          Key Achievements:
        </h4>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-3 items-start text-gray-300 text-base md:text-lg">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard; 