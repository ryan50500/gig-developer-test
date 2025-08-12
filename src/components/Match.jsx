import React from 'react';
import styles from './MatchList.module.css';

const Match = ({ id, label, sport, bet, start }) => {
  const { question, choices } = Object.values(bet)[0];
  
  // Format the date from ISO string to readable format
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
          {choices.map(({ id, actor, odd }) => (
            <button key={id} className={styles.choiceButton}>
              <span className={styles.actorLabel}>{actor.label}</span>
              <span className={styles.oddValue}>{odd}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
