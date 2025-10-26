'use client';

import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black dotted-background">
      {/* Header */}
      <div className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            
            <a
              href="/resume/SubhamSatapathy.pdf"
              download="SubhamSatapathy.pdf"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Resume
          </h1>
          <p className="text-gray-400 text-lg">
            Subham Satapathy - FullStack Developer
          </p>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="/resume/SubhamSatapathy.pdf#toolbar=1&navpanes=1&scrollbar=1"
              width="100%"
              height="900"
              className="w-full"
              title="Subham Satapathy Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
