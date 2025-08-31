import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, className, as: Tag = 'div' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // L'animation ne se joue qu'une fois
    threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
  });

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </Tag>
  );
};

export default AnimatedElement;
