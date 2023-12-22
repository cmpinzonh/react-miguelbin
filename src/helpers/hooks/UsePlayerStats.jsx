import { useState } from 'react';

const usePlayerStats = (initialStats) => {
  const [stats, setStats] = useState(initialStats);

  const increaseStats = () => {
    if (stats.rating <= 97 && stats.pace <= 97 && stats.shooting <= 97 && stats.passing <= 97 && stats.dribbling <= 97 && stats.defending <= 97 && stats.physicality <= 97) {
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
    }
  };

  return [stats, increaseStats];
};

export default usePlayerStats;