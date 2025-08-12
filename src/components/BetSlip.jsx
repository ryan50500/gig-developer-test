import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBet, updateStake } from '../features/bettingSlice';
import styles from './BetSlip.module.css';

const BetSlip = () => {
  const dispatch = useDispatch();
  const selectedBets = useSelector((state) => state.betting.betSlip);

  const handleStakeChange = (betId, newStake) => {
    if (newStake >= 0.1) {
      dispatch(updateStake({ betId, newStake }));
    }
  };

  const handleRemoveBet = (betId) => {
    dispatch(removeBet(betId));
  };

  const calculatePotentialGains = (stake, odds) => {
    return (stake * odds).toFixed(2);
  };

  const getTotalPotentialGains = () => {
    return selectedBets.reduce((total, bet) => {
      return total + (bet.stake * bet.odds);
    }, 0).toFixed(2);
  };

  return (
    <div className={styles.betSlipContainer}>
      <h2 className={styles.title}>MY CHOICES</h2>
      
      {selectedBets.length === 0 ? (
        <p className={styles.emptyMessage}>No bets selected</p>
      ) : (
        <>
          <div className={styles.betsContainer}>
            {selectedBets.map((bet) => (
              <div key={bet.id} className={styles.betCard}>
                <div className={styles.betHeader}>
                  <span className={styles.matchName}>{bet.matchName}</span>
                  <button 
                    className={styles.removeButton}
                    onClick={() => handleRemoveBet(bet.id)}
                  >
                    ×
                  </button>
                </div>
                
                <div className={styles.betChoice}>
                  <span className={styles.choiceName}>{bet.choice}</span>
                  <span className={styles.odds}>{bet.odds}</span>
                </div>
                
                <div className={styles.stakeSection}>
                  <label className={styles.stakeLabel}>Amount:</label>
                  <div className={styles.stakeControls}>
                    <button 
                      className={styles.stakeButton}
                      onClick={() => handleStakeChange(bet.id, Math.max(0.1, bet.stake - 0.5))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className={styles.stakeInput}
                      value={bet.stake}
                      onChange={(e) => handleStakeChange(bet.id, parseFloat(e.target.value) || 0)}
                      step="0.1"
                      min="0.1"
                    />
                    <button 
                      className={styles.stakeButton}
                      onClick={() => handleStakeChange(bet.id, bet.stake + 0.5)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className={styles.potentialGains}>
                  <span className={styles.gainsLabel}>Potential gains:</span>
                  <span className={styles.gainsAmount}>£{calculatePotentialGains(bet.stake, bet.odds)}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.totalSection}>
            <div className={styles.totalGains}>
              <span className={styles.totalLabel}>Total Potential Gains:</span>
              <span className={styles.totalAmount}>£{getTotalPotentialGains()}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BetSlip;
