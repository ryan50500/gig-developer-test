import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBet, updateStake } from '../features/bettingSlice';
import StakeControls from './StakeControls';
import styles from './BetSlip.module.css';

const BetItem = ({ bet }) => {
  const dispatch = useDispatch();

  const handleStakeChange = (newStake) => {
    if (newStake >= 0.1) {
      dispatch(updateStake({ betId: bet.id, newStake }));
    }
  };

  const handleRemoveBet = () => {
    dispatch(removeBet(bet.id));
  };

  const calculatePotentialGains = () => {
    return (bet.stake * bet.odds).toFixed(2);
  };

  return (
    <div className={styles.betCard}>
      <div className={styles.betHeader}>
        <span className={styles.matchName}>{bet.matchName}</span>
        <button 
          className={styles.removeButton}
          onClick={handleRemoveBet}
        >
          ×
        </button>
      </div>
      
      <div className={styles.betChoice}>
        <span className={styles.choiceName}>{bet.choice}</span>
        <span className={styles.odds}>{bet.odds}</span>
      </div>
      
      <StakeControls 
        stake={bet.stake}
        onStakeChange={handleStakeChange}
      />
      
      <div className={styles.potentialGains}>
        <span className={styles.gainsLabel}>Potential gains:</span>
        <span className={styles.gainsAmount}>£{calculatePotentialGains()}</span>
      </div>
    </div>
  );
};

export default BetItem;
