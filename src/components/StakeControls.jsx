import React from 'react';
import styles from './BetSlip.module.css';

const StakeControls = ({ stake, onStakeChange }) => {
  const handleKeyDown = (e) => {
    // If user presses backspace or delete and there's only one character left
    if ((e.key === 'Backspace' || e.key === 'Delete') && e.target.value.length === 1) {
      e.preventDefault();
      onStakeChange(1);
    }
  };

  return (
    <div className={styles.stakeSection}>
      <label className={styles.stakeLabel}>Amount:</label>
      <div className={styles.stakeControls}>
        <button 
          className={styles.stakeButton}
          onClick={() => onStakeChange(Math.max(0.5, stake - 0.5))}
        >
          -
        </button>
        <input
          type="number"
          className={styles.stakeInput}
          value={stake}
          onChange={(e) => onStakeChange(parseFloat(e.target.value) || 0)}
          onKeyDown={handleKeyDown}
          step="0.1"
          min="0.5"
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
