import React from 'react';
import styled from '@emotion/styled';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInUp, staggerContainer, cardHover, slideIn } from '../utils/animations';

const ExperienceSection = styled(motion.section)`
  min-height: 100vh;
  padding: 5rem 1rem;
  background-color: #ffffff;
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

const ExperienceCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  cursor: pointer;
`;

const CompanyTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: rgb(9, 9, 9);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Role = styled(motion.h4)`
  font-size: 1.4rem;
  color: #61dafb;
  margin-bottom: 0.5rem;
`;

const Duration = styled(motion.p)`
  font-size: 1rem;
  color: rgb(9, 9, 9);
  margin-bottom: 1rem;
`;

const Location = styled(motion.p)`
  font-size: 1rem;
  color: rgb(9, 9, 9);
  margin-bottom: 1rem;
  font-style: italic;
`;

const Achievements = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

const Achievement = styled(motion.li)`
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: rgb(9, 9, 9);
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #61dafb;
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceSection 
      id="experience"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container variants={staggerContainer}>
        <SectionTitle variants={fadeInUp}>Experience</SectionTitle>
        
        <ExperienceCard
          variants={{
            ...fadeInUp,
            hover: cardHover.hover
          }}
          whileHover="hover"
        >
          <CompanyTitle variants={slideIn}>
            <Icon icon={FaBriefcase} />
            Maxim Design Systems
          </CompanyTitle>
          <Role variants={slideIn}>Software Developer · Internship</Role>
          <Duration variants={slideIn}>Jan 2025 – Apr 2025</Duration>
          <Location variants={slideIn}>Remote</Location>
          <Achievements variants={staggerContainer}>
            <Achievement variants={fadeInUp}>
              Engineered TCURVE a multi-panel Python application with PyQt5 and Matplotlib to compare up to 4 datasets simultaneously, boosting data analysis efficiency by 60%.
            </Achievement>
            <Achievement variants={fadeInUp}>
              Integrated NGSpice and SciPy-based optimization, automating parameter tuning and reducing model fitting time by 80% while achieving &lt;5% RMSE accuracy.
            </Achievement>
            <Achievement variants={fadeInUp}>
              Implemented automated scaling, curve fitting, and real-time data export, increasing user productivity by 40% in semiconductor device characterization.
            </Achievement>
          </Achievements>
        </ExperienceCard>

        <ExperienceCard
          variants={{
            ...fadeInUp,
            hover: cardHover.hover
          }}
          whileHover="hover"
        >
          <CompanyTitle variants={slideIn}>
            <Icon icon={FaBriefcase} />
            Infosys Springboard
          </CompanyTitle>
          <Role variants={slideIn}>Python Full Stack · Internship</Role>
          <Duration variants={slideIn}>May 2024 – July 2024</Duration>
          <Location variants={slideIn}>Remote</Location>
          <Achievements variants={staggerContainer}>
            <Achievement variants={fadeInUp}>
              Created a Python app to extract bank check data from scanned PDFs using Tesseract OCR, PyPDF2, and OpenCV, improving data processing accuracy.
            </Achievement>
            <Achievement variants={fadeInUp}>
              Designed a Tkinter-based UI with SQLite integration, reducing onboarding time by 25% and enhancing usability through intuitive visual layout and fast queries.
            </Achievement>
          </Achievements>
        </ExperienceCard>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 