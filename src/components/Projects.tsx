import React from 'react';
import styled from '@emotion/styled';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInUp, staggerContainer, cardHover, scaleIn } from '../utils/animations';

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  padding: 5rem 1rem;
  background-color: #f8f9fa;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ProjectTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectDuration = styled(motion.p)`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

const ProjectPoint = styled(motion.li)`
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
  color: #4a4a4a;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #61dafb;
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection
      id="projects"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container variants={staggerContainer}>
        <SectionTitle variants={fadeInUp}>Projects</SectionTitle>
        <ProjectGrid variants={staggerContainer}>
          <ProjectCard
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <ProjectTitle variants={fadeInUp}>
              <Icon icon={FaCode} />
              Blockchain-Based E-Voting System
            </ProjectTitle>
            <ProjectDuration variants={fadeInUp}>Sep 2023 – Nov 2023</ProjectDuration>
            <ProjectDescription variants={staggerContainer}>
              <ProjectPoint variants={fadeInUp}>
                Architected a blockchain-based e-voting system integrated with electoral infrastructure, cutting costs by $200,000 annually and improving election efficiency.
              </ProjectPoint>
              <ProjectPoint variants={fadeInUp}>
                Automated smart contracts in Solidity with advanced cryptography, reducing security vulnerabilities by 35% and ensuring end-to-end voter data integrity.
              </ProjectPoint>
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <ProjectTitle variants={fadeInUp}>
              <Icon icon={FaCode} />
              Android Malware Detection System
            </ProjectTitle>
            <ProjectDuration variants={fadeInUp}>Nov 2024 – Jan 2025</ProjectDuration>
            <ProjectDescription variants={staggerContainer}>
              <ProjectPoint variants={fadeInUp}>
                Trained a stacking ensemble model achieving 84.2% accuracy and 96.93% recall for Android malware detection with minimized false negatives.
              </ProjectPoint>
              <ProjectPoint variants={fadeInUp}>
                Engineered a multi-phase pipeline using permission and behavioral analysis with Gradient Boosting-based feature selection.
              </ProjectPoint>
              <ProjectPoint variants={fadeInUp}>
                Deployed a scalable system on 30,000+ apps using probability-based classification and meta-learning.
              </ProjectPoint>
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <ProjectTitle variants={fadeInUp}>
              <Icon icon={FaCode} />
              Face Recognition Attendance System
            </ProjectTitle>
            <ProjectDuration variants={fadeInUp}>Feb 2025 – Mar 2025</ProjectDuration>
            <ProjectDescription variants={staggerContainer}>
              <ProjectPoint variants={fadeInUp}>
                Developed a real-time Flask-based Face Recognition Attendance System using OpenCV and NumPy, automating authentication.
              </ProjectPoint>
              <ProjectPoint variants={fadeInUp}>
                Designed and implemented 10+ scalable RESTful APIs for user registration, attendance tracking, and analytics.
              </ProjectPoint>
              <ProjectPoint variants={fadeInUp}>
                Built secure facial recognition pipelines with CSV export and analytics features, supporting 100+ users.
              </ProjectPoint>
            </ProjectDescription>
          </ProjectCard>
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 