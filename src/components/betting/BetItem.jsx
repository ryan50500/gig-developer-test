import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBet, updateStake } from '../../features/bettingSlice';
import BetHeader from './BetHeader';
import BetChoice from './BetChoice';
import StakeControls from './StakeControls';
import PotentialGains from './PotentialGains';
import styles from './BetSlip.module.css';

const BetItem = ({ bet }) => {
  const dispatch = useDispatch();

  const handleStakeChange = (newStake) => {
    if (newStake >= 0.1) {
      dispatch(updateStake({ betId: bet.id, newStake }));
    }
  };

  const handleRemoveBet = () => {
    dispatch(removeBet(bet.id));
  };

  const calculatePotentialGains = () => {
    return (bet.stake * bet.odds).toFixed(2);
  };

  return (
    <div className={styles.betCard}>
      <BetHeader matchName={bet.matchName} onRemove={handleRemoveBet} />
      <BetChoice choice={bet.choice} odds={bet.odds} />
      <StakeControls 
        stake={bet.stake}
        onStakeChange={handleStakeChange}
      />
      <PotentialGains gains={calculatePotentialGains()} />
    </div>
  );
};

export default BetItem;
