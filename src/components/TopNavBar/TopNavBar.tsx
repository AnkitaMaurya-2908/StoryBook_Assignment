import React from 'react';
import { TopNavBarProps } from './TopNavBar.types';
import styles from './topNavBar.module.css';
import { colors } from '../tokens/colorTokens';

export const TopNavBar: React.FC<TopNavBarProps> = ({ title, links, theme = 'light' }) => {
  const backgroundColor = theme === 'light' ? colors.primary.light : colors.primary.dark;
  const textColor = theme === 'light' ? colors.neutral.dark : colors.neutral.light;

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor, color: textColor }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.title}>{title}</div>
      <ul className={styles.navLinks}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
