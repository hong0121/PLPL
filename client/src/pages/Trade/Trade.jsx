import React, { useState, useEffect } from 'react';
import upbitAPI from '../../api/upbitAPI';

function Trade() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    async function fetchMarkets() {
      try {
        const data = await upbitAPI.getAllMarkets();
        setMarkets(data);
      } catch (error) {
        console.error('Error fetching markets:', error);
      }
    }

    fetchMarkets();
  }, []);

  return (
    <div>
      <h2>All Markets</h2>
      <ul>
        {markets.map((market) => (
          <li key={market.market}>{market.market}</li>
        ))}
      </ul>
    </div>
  );
}

export default Trade;
