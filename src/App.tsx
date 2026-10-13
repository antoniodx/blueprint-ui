

import Button from './components/Button';
import { useState } from 'react';

export default function App() {

const [showWelcome, setShowWelcome] = useState(false);

  return (
    <main>
      <h1>Blueprint UI</h1>
      <p>Design with intention. Build with precision.</p>

      <div className="button-group">
 
<Button label="Explore Components" 
        variant="primary"  
        onClick={() => setShowWelcome(!showWelcome)}
 />

<Button label="View Foundations" variant="secondary" disabled />

</div>

{showWelcome && (
  <p>Welcome to Blueprint UI! Let's explore.</p>
)}
    </main>
  );
}
