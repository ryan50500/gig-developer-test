import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../features/matchesSlice';

const MatchList = () => {
  const dispatch = useDispatch();
  const { matchesData, status, error } = useSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {matchesData?.events.map(({ id, label, sport, bet }) => {
        const { question, choices } = Object.values(bet)[0];

        return (
          <div key={id} className="match-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{label}</h2>
    
            <h3>{question.label}</h3>
            <ul>
              {choices.map(({ id, actor, odd }) => (
                <li key={id}>
                  {actor.label} — Odd: {odd}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MatchList;
