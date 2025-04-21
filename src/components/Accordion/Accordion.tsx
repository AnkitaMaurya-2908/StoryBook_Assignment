// Accordion.tsx
import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionProps } from './Accordion.types';

const Accordion: React.FC<AccordionProps> = ({ theme = 'default', title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const themeClass = styles[theme] || styles.default;

  return (
    <div className={`${styles.accordion} ${themeClass}`} role="region" aria-labelledby="accordion-header" aria-expanded={isOpen}>
      <button
        className={styles.header}
        id="accordion-header"
        onClick={handleToggle}
        aria-controls="accordion-content"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && (
        <div id="accordion-content" className={styles.content} role="region">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
