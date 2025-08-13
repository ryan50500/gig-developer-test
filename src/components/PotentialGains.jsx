import React from 'react';
import styles from './BetSlip.module.css';

const PotentialGains = ({ gains }) => {
  return (
    <div className={styles.potentialGains}>
      <span className={styles.gainsLabel}>Potential gains:</span>
      <span className={styles.gainsAmount}>£{gains}</span>
    </div>
  );
};

export default PotentialGains;
