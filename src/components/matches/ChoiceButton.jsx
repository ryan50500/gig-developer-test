import React from 'react';
import styles from './MatchList.module.css';

const ChoiceButton = ({ choice, isSelected, onToggle }) => {
  return (
    <button 
      key={choice.id} 
      className={`${styles.choiceButton} ${isSelected ? styles.choiceButtonSelected : ''}`}
      onClick={() => onToggle(choice)}
    >
      <span className={styles.actorLabel}>{choice.actor.label}</span>
      <span className={styles.oddValue}>{choice.odd}</span>
    </button>
  );
};

export default ChoiceButton;
