import { useState } from 'react';
import { Shell } from 'ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Shell title="Card Picker">
      <div>Card picker woohoo!</div>
    </Shell>
  );
}

export default App;
