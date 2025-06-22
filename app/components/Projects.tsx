'use client';

import React from 'react';
import ProjectCard from './ui/project-card';

const Projects = () => {
  const projectsData = [
    {
      title: "Job Scheduler Microservice",
      type: "Backend • Microservices",
      description: "A high-performance, scalable job scheduler microservice built with Node.js, TypeScript, and BullMQ. Features comprehensive rate limiting, job management, and load testing capabilities for enterprise-grade applications.",
      achievements: [
        "Built scalable microservice handling 100+ RPS average with 200 RPS peak capacity and <200ms p95 response time",
        "Implemented multi-layer rate limiting system with IP-based, service-based, and global protection mechanisms",
        "Developed comprehensive job scheduling system supporting one-time and recurring jobs with cron expressions",
        "Created robust load testing suite validating performance targets with 99.9% availability requirements",
        "Architected Redis-based caching layer achieving >80% cache hit rate for optimized performance",
        "Built Docker-containerized deployment with PostgreSQL and Redis integration for production scalability"
      ],
      technologies: ["Node.js", "TypeScript", "BullMQ", "PostgreSQL", "Redis", "Docker", "Jest", "Express", "Drizzle ORM"],
      githubUrl: "https://github.com/Subham-Satapathy/job-scheduler",
      status: "Completed" as const,
    },
    {
      title: "ORO - Trading Platform",
      type: "FinTech • Trading",
      description: "A comprehensive cryptocurrency trading platform featuring a high-performance matching engine and modern web client. Built with TypeScript, it implements sophisticated order matching algorithms and real-time trading capabilities.",
      achievements: [
        "Developed high-performance trading engine with price-time priority matching algorithm for optimal trade execution",
        "Built comprehensive order management system supporting CREATE and DELETE operations with real-time processing",
        "Implemented sophisticated order book maintenance with live updates and trade generation capabilities",
        "Created modern Next.js web client with responsive trading interface and real-time market data visualization",
        "Architected dual-component system with separate engine and web-client for scalable trading operations",
        "Designed robust order processing pipeline handling BTC/USDC pair trading with precise limit price execution"
      ],
      technologies: ["TypeScript", "Next.js", "Node.js", "React", "Trading Algorithms", "Order Matching", "Real-time Processing"],
      githubUrl: "https://github.com/Subham-Satapathy/oro",
      status: "Completed" as const,
    },
    {
      title: "Momentum - Web3 Task Manager",
      type: "Web3 • DApp",
      description: "A decentralized task management platform that revolutionizes productivity by rewarding users with MOM tokens for completing tasks. Combines blockchain technology with modern web interface to build habits through tokenized incentives.",
      achievements: [
        "Developed comprehensive Web3 task management DApp with ERC20 token rewards system for productivity gamification",
        "Built secure smart contracts (TaskManager.sol & MOMToken.sol) with EIP-712 signed messages and replay attack protection",
        "Implemented gasless operations using permit functionality and nonce tracking for enhanced user experience",
        "Created full-stack application with Next.js 15, React 19, and MongoDB handling task verification and blockchain interactions",
        "Architected security-first smart contracts with OpenZeppelin standards, access control, and maximum reward limits",
        "Deployed production-ready DApp with responsive design, MetaMask integration, and GraphQL data management"
      ],
      technologies: ["Solidity", "Next.js", "React", "TypeScript", "Ethers.js", "MongoDB", "GraphQL", "Hardhat", "OpenZeppelin", "TailwindCSS"],
      githubUrl: "https://github.com/Subham-Satapathy/Momentum",
      liveUrl: "https://momentum.subhs.xyz",
      status: "Completed" as const,
    },
    {
      title: "Job Scraper & API Service",
      type: "Data Engineering • API",
      description: "A high-performance job scraping service that extracts job listings from Amazon, Google, and Microsoft career pages. Built with Bun runtime, it processes data and serves results through a REST API with automated scheduling capabilities.",
      achievements: [
        "Built enterprise-grade web scraper extracting job listings from Amazon, Google, and Microsoft career pages using Puppeteer",
        "Developed high-performance REST API with Bun runtime for ultra-fast job data retrieval and filtering capabilities",
        "Implemented robust data processing pipeline storing job listings in PostgreSQL database via Prisma ORM",
        "Created automated cron-based scheduling system for continuous job data synchronization and updates",
        "Architected scalable API endpoints supporting advanced filtering and search functionality for job discovery",
        "Designed resilient scraping infrastructure handling dynamic web content and anti-bot protection mechanisms"
      ],
      technologies: ["Bun", "TypeScript", "Puppeteer", "PostgreSQL", "Prisma", "REST API", "Axios", "Cron Jobs", "Web Scraping"],
      githubUrl: "https://github.com/Subham-Satapathy/job-scraper",
      status: "Completed" as const,
    },
    {
      title: "Optimal Bridge Path Finder",
      type: "Web3 • DeFi Infrastructure",
      description: "A sophisticated blockchain infrastructure service that finds the most cost-efficient bridge paths for cross-chain asset transfers. Built with TypeScript and Bun, it optimizes DeFi operations through intelligent route calculations and fee analysis.",
      achievements: [
        "Developed advanced bridge path optimization algorithm for cross-chain asset transfers with cost-efficiency analysis",
        "Built comprehensive blockchain interaction service supporting multiple chains and bridge protocols",
        "Implemented intelligent route calculation system analyzing bridge fees, gas costs, and transfer times",
        "Created robust API service processing bridge path requests with user balance verification and validation",
        "Architected high-performance backend with Bun runtime achieving optimal response times for DeFi operations",
        "Deployed production-ready service with comprehensive testing suite and real-time bridge fee monitoring"
      ],
      technologies: ["TypeScript", "Bun", "Blockchain APIs", "DeFi Protocols", "Bridge Networks", "Cost Optimization", "REST API"],
      githubUrl: "https://github.com/Subham-Satapathy/find-optimal-bridge-path",
      status: "Completed" as const,
    },
    {
      title: "Task Manager - Kanban Board",
      type: "Full-Stack • Enterprise",
      description: "A modern and responsive task management application featuring a Kanban board interface. Built with React, TypeScript, and Material-UI, it provides comprehensive task management capabilities with enterprise-level features and user experience.",
      achievements: [
        "Developed comprehensive full-stack task management application with modern Kanban board interface",
        "Built responsive React frontend with Material-UI components ensuring optimal experience across all devices",
        "Implemented advanced task management features including creation, editing, deletion, and status tracking",
        "Created intuitive user interface with drag-and-drop functionality for seamless task organization",
        "Architected backend API for efficient task data management and real-time synchronization",
        "Integrated snackbar notifications and confirmation dialogs for enhanced user experience and data safety"
      ],
      technologies: ["React", "TypeScript", "Material-UI", "JavaScript", "CSS", "API Integration", "Kanban Board", "Responsive Design"],
      githubUrl: "https://github.com/Subham-Satapathy/Task-Manager-Zoho",
      status: "Completed" as const,
    }
  ];

  return (
    <section
      id="projects"
      className="bg-black dotted-background py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A showcase of innovative solutions spanning Web3, AI/ML, and Full-stack development,
            demonstrating technical expertise and real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/70"
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                description={project.description}
                achievements={project.achievements}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                status={project.status}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 