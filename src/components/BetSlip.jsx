import React from 'react';
import { useSelector } from 'react-redux';
import BetItem from './BetItem';
import BetSlipSummary from './BetSlipSummary';
import styles from './BetSlip.module.css';

const BetSlip = () => {
  const selectedBets = useSelector((state) => state.betting.betSlip);

  return (
    <div className={styles.betSlipContainer}>
      <h2 className={styles.title}>MY CHOICES</h2>
      
      {selectedBets.length === 0 ? (
        <p className={styles.emptyMessage}>No bets selected</p>
      ) : (
        <>
          <div className={styles.betsContainer}>
            {selectedBets.map((bet) => (
              <BetItem key={bet.id} bet={bet} />
            ))}
          </div>
          
          <BetSlipSummary selectedBets={selectedBets} />
        </>
      )}
    </div>
  );
};

export default BetSlip;

