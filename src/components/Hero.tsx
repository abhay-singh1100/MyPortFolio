import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import Icon from './Icon';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 0 1rem;
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  color: white;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #61dafb;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Location = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #cccccc;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #ffffff;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Name>Abhay Singh</Name>
        <Title>Software Developer</Title>
        <Location>Haridwar, Uttarakhand, India</Location>
        <ContactInfo>
          <ContactLink href="mailto:abhaychauhan5051a@gmail.com">
            <Icon icon={FaEnvelope} /> abhaychauhan5051a@gmail.com
          </ContactLink>
          <ContactLink href="tel:+918279933693">
            <Icon icon={FaPhone} /> +91 8279933693
          </ContactLink>
          <ContactLink href="www.linkedin.com/in/abhay-singh-1112as" target="_blank" rel="noopener noreferrer">
            <Icon icon={FaLinkedin} /> LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/abhay-singh1100" target="_blank" rel="noopener noreferrer">
            <Icon icon={FaGithub} /> GitHub
          </ContactLink>
        </ContactInfo>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 