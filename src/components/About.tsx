import React from 'react';
import styled from '@emotion/styled';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInUp, staggerContainer, cardHover } from '../utils/animations';

const AboutSection = styled(motion.section)`
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

const EducationCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  cursor: pointer;
`;

const University = styled(motion.h3)`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Degree = styled(motion.p)`
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
`;

const CGPA = styled(motion.p)`
  font-size: 1.1rem;
  color: #61dafb;
  font-weight: bold;
`;

const About: React.FC = () => {
  return (
    <AboutSection
      id="about"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container variants={staggerContainer}>
        <SectionTitle variants={fadeInUp}>Education</SectionTitle>
        <EducationCard 
          variants={{
            ...fadeInUp,
            hover: cardHover.hover
          }}
          whileHover="hover"
        >
          <University variants={fadeInUp}>
            <Icon icon={FaGraduationCap} />
            COER UNIVERSITY ROORKEE
          </University>
          <Degree variants={fadeInUp}>Bachelor of Technology - BTech</Degree>
          <CGPA variants={fadeInUp}>CGPA: 8.4 / 10</CGPA>
        </EducationCard>
      </Container>
    </AboutSection>
  );
};

export default About; 