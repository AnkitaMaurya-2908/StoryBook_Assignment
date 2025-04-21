import React, { useState, KeyboardEvent } from 'react';
import styles from './Tabs.module.css';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab = 0, onTabChange, theme = 'default' }) => {
  const [current, setCurrent] = useState(activeTab);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % tabs.length;
      !tabs[next].disabled && setCurrent(next);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + tabs.length) % tabs.length;
      !tabs[prev].disabled && setCurrent(prev);
    }
  };

  const changeTab = (index: number) => {
    if (!tabs[index].disabled) {
      setCurrent(index);
      onTabChange?.(index);
    }
  };

  return (
    <div className={`${styles.tabs} ${styles[theme]}`}>
      <div role="tablist" className={styles['tab-list']}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            className={styles.tab}
            disabled={tab.disabled}
            aria-selected={current === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            tabIndex={current === index ? 0 : -1}
            onClick={() => changeTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${current}`}
        aria-labelledby={`tab-${current}`}
        className={styles['tab-panel']}
      >
        {tabs[current]?.content}
      </div>
    </div>
  );
};

export default Tabs;
