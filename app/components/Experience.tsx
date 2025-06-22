'use client';

import React from 'react';
import { Timeline } from './ui/timeline';
import ExperienceCard from './ui/experience-card';

const Experience = () => {
  const experienceData = [
    {
      title: "March 2025 - May 2025",
      content: (
        <ExperienceCard
          designation="Full Stack Developer"
          company="Kaika (Part-time, Remote)"
          description="Designed and implemented UI/UX for the Kaika agency website, incorporating animations and sliding grids for an engaging user experience."
          achievements={[
            "Designed and implemented UI/UX for the Kaika agency website with animations and sliding grids",
            "Developed a Telegram bot for KOL onboarding and deal management with seamless account management",
            "Integrated brand and KOL onboarding via Privy, linking social accounts for frictionless authentication",
            "Stored and managed 1,000+ KOL profiles in PostgreSQL with structured flow and pre-populated social data",
            "Leveraged Claude AI for NLP-based text parsing, converting unstructured messages into structured deal formats",
            "Implemented JWT authentication with auto-rotation for secure access control across protected endpoints"
          ]}
          technologies={["React", "Node.js", "PostgreSQL", "Telegram Bot API", "Privy", "Claude AI", "JWT", "NLP"]}
        />
      ),
    },
    {
      title: "November 2024 - March 2025",
      content: (
        <ExperienceCard
          designation="Full Stack Developer"
          company="Mercle (Part-time, Remote)"
          description="Engineered scalable infrastructure on AWS using Terraform, automating cloud provisioning for over 50+ services, resulting in a 40% reduction in deployment times."
          achievements={[
            "Engineered scalable AWS infrastructure using Terraform for 50+ services, reducing deployment times by 40%",
            "Developed optimized queries for blockchain data from RPC endpoints, processing 500,000+ user transactions",
            "Built and maintained parsers for 50+ blockchain protocols, processing 10+ million user transactions",
            "Designed secure backend APIs for Web3 wallet authentication, improving user sign-in rates by 30%",
            "Managed domain infrastructure on AWS Route 53 for 10+ domains, reducing content delivery latency by 25%",
            "Architected ECS clusters handling 1 million+ requests per day with reliable, cost-effective deployment",
            "Set up CI/CD pipelines using GitHub Actions and AWS CodeDeploy across 15+ repositories, reducing deployment failures by 20%",
            "Developed advanced scripts analyzing ERC20 transactions for 2+ million users at 1,000 transactions/second"
          ]}
          technologies={["AWS", "Terraform", "PostgreSQL", "Node.js", "Web3", "Blockchain", "ECS", "CloudFront", "GitHub Actions", "ERC20"]}
        />
      ),
    },
    {
      title: "March 2022 - Present",
      content: (
        <ExperienceCard
          designation="Software Engineer"
          company="Travelex (Full-time, Mumbai, India)"
          description="Implemented critical tasks using EIF (Enterprise Integration Framework) – Travelex's internal framework for ETL processes – leveraging Node.js and hosting on AWS."
          achievements={[
            "Implemented ETL processes using EIF framework with Node.js on AWS, processing 10+ million records daily",
            "Enhanced cloud security by implementing IAM role policies across 35+ repositories, reducing security risks by 40%",
            "Created and managed AWS resources (S3, API Gateway, SQS, DynamoDB, Lambda, CloudFormation) improving deployment efficiency by 30%",
            "Implemented robust CI/CD pipelines using CircleCI across 20+ repositories, reducing deployment times by 25%",
            "Developed real-time APIs for Travelex POS systems handling 100,000+ requests/day for secure transaction processing"
          ]}
          technologies={["Node.js", "AWS", "EIF", "S3", "API Gateway", "SQS", "DynamoDB", "Lambda", "CloudFormation", "CircleCI", "Serverless"]}
        />
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black dotted-background"
    >
      <div className="w-full">
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

export default Experience; 