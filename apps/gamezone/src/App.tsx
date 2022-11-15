import React, { Suspense, useState } from 'react';
import { Shell } from 'ui';
// Using module federetion of webpacker.
// @ts-ignore
// import { CardPicker } from 'cardpicker/CardPicker';
const CardPicker = React.lazy(() => import('cardpicker/CardPicker'));

// @ts-ignore
// import { TopNumber } from 'topnumber/TopNumber';
// import TopNumber from 'topnumber/TopNumber';
const TopNumber = React.lazy(() => import('topnumber/TopNumber'));

function App() {
  const [isShownCardPicker, setIsShownCardPicker] = useState(false);
  const [isShownTopNumber, setIsShownTopNumber] = useState(false);

  return (
    <Shell title="Game Zone">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {isShownCardPicker && <CardPicker />}
          {!isShownCardPicker && (
            <button onClick={() => setIsShownCardPicker(!isShownCardPicker)}>
              Show TopNumber
            </button>
          )}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {isShownTopNumber && <TopNumber />}
          {!isShownTopNumber && (
            <button onClick={() => setIsShownTopNumber(!isShownTopNumber)}>
              Show TopNumber
            </button>
          )}
        </Suspense>
      </div>
    </Shell>
  );
}

export default App;
