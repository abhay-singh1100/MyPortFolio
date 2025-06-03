import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from '@emotion/styled';
import Icon from './Icon';

const Nav = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: #61dafb;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    padding: 1rem;
  }
`;

const NavLink = styled.li`
  color: white;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo>Abhay Singh</Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <Icon icon={FaTimes} /> : <Icon icon={FaBars} />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink>
            <Link to="home" smooth={true} duration={1} >Home</Link>
          </NavLink>
          <NavLink>
            <Link to="about" smooth={true} duration={1} >About</Link>
          </NavLink>
          <NavLink>
            <Link to="experience" smooth={true} duration={1} >Experience</Link>
          </NavLink>
          <NavLink>
            <Link to="projects" smooth={true} duration={1} >Projects</Link>
          </NavLink>
          <NavLink>
            <Link to="skills" smooth={true} duration={1} >Skills</Link>
          </NavLink>
          <NavLink>
            <Link to="Certifications And Achievements" smooth={true} duration={1} >Certifications And Achievements</Link>
          </NavLink>
          <NavLink>
            <Link to="contact" smooth={true} duration={1} >Contact</Link>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 