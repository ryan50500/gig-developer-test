import React from 'react';
import ChoiceButton from './ChoiceButton';
import styles from './MatchList.module.css';

const ChoicesContainer = ({ choices, isBetSelected, handleToggleBet }) => {
  return (
    <div className={styles.choicesContainer}>
      {choices.map((choice) => (
        <ChoiceButton
          key={choice.id}
          choice={choice}
          isSelected={isBetSelected(choice.id)}
          onToggle={handleToggleBet}
        />
      ))}
    </div>
  );
};

export default ChoicesContainer;
