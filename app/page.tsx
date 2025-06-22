import Navigation from './components/Navigation';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppleHelloEnglishEffect } from './components/ui/apple-hello-effect';

export default function Home() {
  return (
    <div className="min-h-screen bg-black dotted-background">
      <Navigation />  
      
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            <div className="flex justify-center mb-2">
              <AppleHelloEnglishEffect className="text-white h-12 sm:h-16 lg:h-20" speed={1.1} />
            </div>
            <div className="mb-2">
              <span>I&apos;m Subham Satapathy, a</span>
            </div>
            <div>
              <span className="gradient-text">
                Software Engineer 
              </span>
            </div>
          </div>

          {/* Experience Text */}
          <div className="mb-8">
            <p className="text-gray-400 text-lg font-normal">
              with more than 3.2 years of experience
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-6 sm:mb-8 px-2 sm:px-0">
            <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed sm:leading-normal text-center">
              <span className="marker-highlight whitespace-nowrap inline-block">
                I turn ideas into reality through pressing keys
              </span>
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed px-4 sm:px-0">
            Results-oriented achiever with proven ability to exceed targets and drive success in
            fast-paced environments. Combines strategic thinking with hands-on experience to
            deliver impactful solutions and enhance organizational performance.
            </p>
          </div>
        </div>
      </main>

      {/* Tech Stack Section */}
      <TechStack />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
