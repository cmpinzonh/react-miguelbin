import { useState } from 'react';

const usePlayerStats = (initialStats) => {
  const [stats, setStats] = useState(initialStats);

  const increaseStats = () => {
    setStats({
      ...stats,
      rating: stats.rating + 2,
      pace: stats.pace + 2,
      shooting: stats.shooting + 2,
      passing: stats.passing + 2,
      dribbling: stats.dribbling + 2,
      defending: stats.defending + 2,
      physicality: stats.physicality + 2,
    });
  };

  return [stats, increaseStats];
};

export default usePlayerStats;
