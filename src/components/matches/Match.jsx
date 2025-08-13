import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBet, removeBet } from '../../features/bettingSlice';
import MatchHeader from './MatchHeader';
import ChoicesContainer from './ChoicesContainer';
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
        <MatchHeader 
          sport={sport}
          label={label}
          start={start}
          formatDate={formatDate}
        />
        <ChoicesContainer 
          choices={choices}
          isBetSelected={isBetSelected}
          handleToggleBet={handleToggleBet}
        />
      </div>
    </div>
  );
};

export default Match;
