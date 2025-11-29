'use client';

import React from 'react';
import { Timeline } from './ui/timeline';
import ExperienceCard from './ui/experience-card';

const Experience = () => {
  const experienceData = [
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