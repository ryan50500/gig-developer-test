import React from 'react';
import styles from './BetSlip.module.css';

const BetChoice = ({ choice, odds }) => {
  return (
    <div className={styles.betChoice}>
      <span className={styles.choiceName}>{choice}</span>
      <span className={styles.odds}>{odds}</span>
    </div>
  );
};

export default BetChoice;
