'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'Maintained';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  description,
  achievements,
  technologies,
  githubUrl,
  liveUrl,
  status,
}) => {
  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <span className={`text-xs px-3 py-1 rounded-full border ${
              status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
              status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
              'bg-blue-500/10 text-blue-400 border-blue-500/20'
            }`}>
              {status}
            </span>
            <span className="text-sm text-gray-400 font-medium">{type}</span>
          </div>
        </div>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          {description}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
          Key Features & Impact:
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

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
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

      {(githubUrl || liveUrl) && (
        <div className="flex flex-wrap gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 font-medium"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 