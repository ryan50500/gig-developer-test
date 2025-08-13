import React from 'react';
import styles from './BetSlip.module.css';

const BetSlipSummary = ({ selectedBets }) => {
  const getTotalPotentialGains = () => {
    return selectedBets.reduce((total, bet) => {
      return total + (bet.stake * bet.odds);
    }, 0).toFixed(2);
  };

  return (
    <div className={styles.totalSection}>
      <div className={styles.totalGains}>
        <span className={styles.totalLabel}>Total Potential Gains:</span>
        <span className={styles.totalAmount}>£{getTotalPotentialGains()}</span>
      </div>
    </div>
  );
};

export default BetSlipSummary;
