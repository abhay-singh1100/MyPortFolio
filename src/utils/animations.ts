import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const slideIn: Variants = {
  initial: {
    x: -30,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}; 