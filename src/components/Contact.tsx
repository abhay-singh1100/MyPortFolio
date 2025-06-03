import React from 'react';
import styled from '@emotion/styled';
import { FaAward, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fadeInUp, staggerContainer, cardHover, slideIn } from '../utils/animations';

const ContactSection = styled(motion.section)`
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

const CertificationsContainer = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CertificationCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  cursor: pointer;
`;

const CertificationTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CertificationDescription = styled(motion.p)`
  color: #4a4a4a;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const CertificationLink = styled(motion.a)`
  color: #61dafb;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection
      id="Certifications And Achievements"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container variants={staggerContainer}>
        <SectionTitle variants={fadeInUp}>Certifications & Achievements</SectionTitle>
        <CertificationsContainer variants={staggerContainer}>
          <CertificationCard
            variants={{
              ...fadeInUp,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CertificationTitle variants={slideIn}>
              <Icon icon={FaAward} />
              Paper Presentation at SocProS 2025 – IIT Roorkee
            </CertificationTitle>
            <CertificationDescription variants={slideIn}>
              Presented research on "Threshold Optimized Ensemble Learning for Android Malware Detection" at an international conference.
            </CertificationDescription>
            <CertificationLink 
              href="https://www.dropbox.com/scl/fi/e9nle06xszrztk2gcqjuz/Researchpaper.jpg?rlkey=2zct2pnn6yskwnt1sbe3eoovp&e=1&st=nl1ic9rh&dl=0" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon={FaLink} />
              View Certificate
            </CertificationLink>
          </CertificationCard>

          <CertificationCard
            variants={{
              ...fadeInUp,
              hover: cardHover.hover
            }}
            whileHover="hover"
          >
            <CertificationTitle variants={slideIn}>
              <Icon icon={FaAward} />
              Certified AI & Data Quality Analyst – IIT Mandi iHub & NSDC (2024)
            </CertificationTitle>
            <CertificationDescription variants={slideIn}>
              Completed 480-hour training with Grade A under PMKVY scheme.
            </CertificationDescription>
            <CertificationLink 
              href="https://www.dropbox.com/scl/fi/g3aqsvrtoygbkfsy93xv0/iitmandi.jpg?rlkey=s4m0ua7iyqs8e537itf8x3gj4&e=1&st=9mic7agk&dl=0" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon={FaLink} />
              View Certificate
            </CertificationLink>
          </CertificationCard>
        </CertificationsContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact; 