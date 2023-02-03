import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    // hydration
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
