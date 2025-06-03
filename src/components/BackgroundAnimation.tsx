import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaBrain, 
  FaCode, 
  FaDatabase, 
  FaAtom, 
  FaPython, 
  FaReact, 
  FaNetworkWired,
  FaLaptopCode,
  FaCogs,
  FaMicrochip 
} from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiJupyter } from 'react-icons/si';
import Icon from './Icon';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0.3;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.4;
  }
`;

const FloatingElement = styled(motion.div)<{ size: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.size};
  color: #61dafb;
  filter: drop-shadow(0 0 8px rgba(97, 218, 251, 0.5));
  will-change: transform;
`;

const ConnectingLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(97, 218, 251, 0),
    rgba(97, 218, 251, 0.6),
    rgba(97, 218, 251, 0)
  );
  transform-origin: left center;
  filter: drop-shadow(0 0 6px rgba(97, 218, 251, 0.4));
  will-change: transform, opacity;
  box-shadow: 0 0 15px rgba(97, 218, 251, 0.3);
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #61dafb;
  border-radius: 50%;
  filter: drop-shadow(0 0 4px rgba(97, 218, 251, 0.6));
  will-change: transform, opacity;
  box-shadow: 0 0 10px rgba(97, 218, 251, 0.4);
`;

const BackgroundAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const elements = [
    { icon: FaBrain, delay: 0, size: '2.5rem' },
    { icon: FaCode, delay: 0.5, size: '2rem' },
    { icon: FaDatabase, delay: 1, size: '2.2rem' },
    { icon: FaAtom, delay: 1.5, size: '2.3rem' },
    { icon: FaPython, delay: 2, size: '2.1rem' },
    { icon: FaReact, delay: 2.5, size: '2.4rem' },
    { icon: SiTensorflow, delay: 3, size: '2rem' },
    { icon: SiScikitlearn, delay: 3.5, size: '2.2rem' },
    { icon: SiJupyter, delay: 4, size: '2.1rem' },
    { icon: FaNetworkWired, delay: 4.5, size: '2.3rem' },
    { icon: FaLaptopCode, delay: 5, size: '2.2rem' },
    { icon: FaCogs, delay: 5.5, size: '2.1rem' },
    { icon: FaMicrochip, delay: 6, size: '2.3rem' }
  ];

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
  }));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
    
    controls.start(i => ({
      x: clientX + Math.sin(i * Math.PI * 2) * 80,
      y: clientY + Math.cos(i * Math.PI * 2) * 80,
      transition: { 
        duration: 1,
        type: 'spring',
        stiffness: 150,
        damping: 15
      },
    }));
  }, [controls]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <BackgroundContainer>
      <AnimatePresence>
        {elements.map((element, index) => (
          <React.Fragment key={index}>
            <FloatingElement
              size={element.size}
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, scale: 0 }}
              animate={{
                x: [
                  Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
                  Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
                  Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
                ],
                y: [
                  Math.random() * window.innerHeight * 0.8 + window.innerHeight * 0.1,
                  Math.random() * window.innerHeight * 0.8 + window.innerHeight * 0.1,
                  Math.random() * window.innerHeight * 0.8 + window.innerHeight * 0.1,
                ],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 15,
                ease: "linear",
                times: [0, 0.5, 1],
                repeat: Infinity,
                delay: element.delay,
              }}
              whileHover={{ scale: 1.5, opacity: 1 }}
            >
              <Icon icon={element.icon} />
            </FloatingElement>
            <ConnectingLine
              initial={{
                width: 0,
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
              }}
              animate={{
                width: [0, 300, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          </React.Fragment>
        ))}
        {particles.map(particle => (
          <Particle
            key={particle.id}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 1, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </AnimatePresence>
    </BackgroundContainer>
  );
};

export default BackgroundAnimation; 