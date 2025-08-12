import React from 'react';
import styles from './MatchList.module.css';

const Match = ({ id, label, sport, bet }) => {
  const { question, choices } = Object.values(bet)[0];

  return (
    <div className={styles.matchCard}>
      <h2 className={styles.matchTitle}>{label}</h2>
      <h3 className={styles.questionLabel}>{sport.label}</h3>
      
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
