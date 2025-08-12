import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../features/matchesSlice';
import styles from './MatchList.module.css';

const MatchList = () => {
  const dispatch = useDispatch();
  const { matchesData, status, error } = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {matchesData?.events.map(({ id, label, sport, bet }) => {
        const { question, choices } = Object.values(bet)[0];

        return (
          <div key={id} className={styles.matchCard}>
            <h2 className={styles.matchTitle}>{label}</h2>
            <h3 className={styles.questionLabel}>{question.label}</h3>
            
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
      })}
    </div>
  );
};

export default MatchList;
