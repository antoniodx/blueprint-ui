

import Button from './components/Button';
import { useState } from 'react';
import Toggle from './components/Toggle';


export default function App() {

const [showWelcome, setShowWelcome] = useState(false);
const [notificationsEnabled, setNotificationsEnabled] = useState(false);

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
   <Toggle label="Notifications" 
   checked={notificationsEnabled}
   onChange={setNotificationsEnabled}/>
   <p>
    Notifications are {notificationsEnabled ? 'On' : 'Off'}
   </p>

    </main>
  );
}
