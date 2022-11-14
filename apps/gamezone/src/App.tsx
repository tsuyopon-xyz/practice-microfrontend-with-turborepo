import { Shell } from 'ui';
// Using module federetion of webpacker.
// @ts-ignore
import { CardPicker } from 'cardpicker/CardPicker';

function App() {
  return (
    <Shell title="Game Zone">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}
      >
        <CardPicker />
        <div>something</div>
      </div>
    </Shell>
  );
}

export default App;
