import React from 'react';
import styled from '@emotion/styled';
import { 
  FaCode, 
  FaDatabase, 
  FaBrain,
  FaTools,
  FaLaptopCode,
  FaServer
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInUp, staggerContainer, cardHover, scaleIn } from '../utils/animations';

const SkillsSection = styled(motion.section)`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1rem;
  color: #4a4a4a;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #61dafb;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection
      id="skills"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container variants={staggerContainer}>
        <SectionTitle variants={fadeInUp}>Skills</SectionTitle>
        <SkillsGrid variants={staggerContainer}>
          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaCode} />
              Programming Languages
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>Java</SkillItem>
              <SkillItem variants={fadeInUp}>Python</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaBrain} />
              AI/ML
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>Model Training</SkillItem>
              <SkillItem variants={fadeInUp}>Facial Recognition</SkillItem>
              <SkillItem variants={fadeInUp}>OpenCV</SkillItem>
              <SkillItem variants={fadeInUp}>TensorFlow</SkillItem>
              <SkillItem variants={fadeInUp}>Hyperparameter Tuning</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaLaptopCode} />
              Frontend
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>HTML</SkillItem>
              <SkillItem variants={fadeInUp}>CSS</SkillItem>
              <SkillItem variants={fadeInUp}>JavaScript</SkillItem>
              <SkillItem variants={fadeInUp}>React</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaServer} />
              Backend & APIs
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>Flask</SkillItem>
              <SkillItem variants={fadeInUp}>RESTful API Development</SkillItem>
              <SkillItem variants={fadeInUp}>Node.js</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaDatabase} />
              Databases
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>MySQL</SkillItem>
              <SkillItem variants={fadeInUp}>Firebase</SkillItem>
              <SkillItem variants={fadeInUp}>MongoDB</SkillItem>
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            variants={{
              ...scaleIn,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CategoryTitle variants={fadeInUp}>
              <Icon icon={FaTools} />
              Tools
            </CategoryTitle>
            <SkillsList variants={staggerContainer}>
              <SkillItem variants={fadeInUp}>Power BI</SkillItem>
              <SkillItem variants={fadeInUp}>Git & GitHub</SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 