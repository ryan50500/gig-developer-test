import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../features/bettingSlice';
import Match from './Match';
import styles from './MatchList.module.css';

const MatchList = () => {
  const dispatch = useDispatch();
  const { matchesData, status, error } = useSelector((state) => state.betting);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {matchesData?.events.map((match) => (
        <Match
          key={match.id}
          id={match.id}
          label={match.label}
          sport={match.sport}
          bet={match.bet}
          start={match.start}
        />
      ))}
    </div>
  );
};

export default MatchList;
