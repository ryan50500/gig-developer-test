import React from 'react';
import styles from './MatchList.module.css';

const MatchHeader = ({ sport, label, start, formatDate }) => {
  return (
    <div className={styles.matchInfo}>
      <div className={styles.matchHeader}>
        <span className={styles.sportLabel}>{sport.label}</span>
        <span className={styles.matchTitle}>{label}</span>
      </div>
      <p className={styles.matchDate}>{formatDate(start)}</p>
    </div>
  );
};

export default MatchHeader;
