import React from 'react';
import styles from './BetSlip.module.css';

const BetHeader = ({ matchName, onRemove }) => {
  return (
    <div className={styles.betHeader}>
      <span className={styles.matchName}>{matchName}</span>
      <button 
        className={styles.removeButton}
        onClick={onRemove}
      >
        ×
      </button>
    </div>
  );
};

export default BetHeader;
