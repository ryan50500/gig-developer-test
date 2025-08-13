import React from 'react';
import styles from './BetSlip.module.css';

const StakeControls = ({ stake, onStakeChange }) => {
  return (
    <div className={styles.stakeSection}>
      <label className={styles.stakeLabel}>Amount:</label>
      <div className={styles.stakeControls}>
        <button 
          className={styles.stakeButton}
          onClick={() => onStakeChange(Math.max(0.1, stake - 0.5))}
        >
          -
        </button>
        <input
          type="number"
          className={styles.stakeInput}
          value={stake}
          onChange={(e) => onStakeChange(parseFloat(e.target.value) || 0)}
          step="0.1"
          min="0.1"
        />
        <button 
          className={styles.stakeButton}
          onClick={() => onStakeChange(stake + 0.5)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default StakeControls;
