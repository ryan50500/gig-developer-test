import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBet, removeBet } from '../features/bettingSlice';
import styles from './MatchList.module.css';

const Match = ({ id, label, sport, bet, start }) => {
  const dispatch = useDispatch();
  const selectedBets = useSelector((state) => state.betting.betSlip);
  const { question, choices } = Object.values(bet)[0];
  
  // Format the date so it's readable to user.
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleToggleBet = (choice) => {
    const existingBet = selectedBets.find(bet => bet.choiceId === choice.id);
    
    if (existingBet) {
      // Remove bet if it's already selected
      dispatch(removeBet(existingBet.id));
    } else {
      // Add bet if it's not selected
      const newBet = {
        id: choice.id,
        choiceId: choice.id,
        matchName: label,
        choice: choice.actor.label,
        odds: choice.odd,
        stake: 1.00
      };
      dispatch(addBet(newBet));
    }
  };

  const isBetSelected = (choiceId) => {
    return selectedBets.some(bet => bet.choiceId === choiceId);
  };

  return (
    <div className={styles.matchCard}>
      <div className={styles.matchLayout}>
        <div className={styles.matchInfo}>
          <div className={styles.matchHeader}>
            <span className={styles.sportLabel}>{sport.label}</span>
            <span className={styles.matchTitle}>{label}</span>
          </div>
          <p className={styles.matchDate}>{formatDate(start)}</p>
        </div>
        
        <div className={styles.choicesContainer}>
          {choices.map((choice) => (
            <button 
              key={choice.id} 
              className={`${styles.choiceButton} ${isBetSelected(choice.id) ? styles.choiceButtonSelected : ''}`}
              onClick={() => handleToggleBet(choice)}
            >
              <span className={styles.actorLabel}>{choice.actor.label}</span>
              <span className={styles.oddValue}>{choice.odd}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
