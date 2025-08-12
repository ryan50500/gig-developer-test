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
      <h2 className={styles.matchTitle}>{label}</h2>
      <h3 className={styles.questionLabel}>{sport.label}</h3>
      <p className={styles.matchDate}>{formatDate(start)}</p>
      
      <div className={styles.choicesContainer}>
        {choices.map(({ id, actor, odd }) => (
          <button key={id} className={styles.choiceButton}>
            <span className={styles.actorLabel}>{actor.label}</span>
            <span className={styles.oddValue}>{odd}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Match;
