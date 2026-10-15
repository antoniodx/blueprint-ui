

import Button from './components/Button';
import { useState } from 'react';
import Toggle from './components/Toggle';
import Input from './components/Input';
import SettingsPanel from './components/SettingsPanel';



export default function App() {

const [showWelcome, setShowWelcome] = useState(false);
const [notificationsEnabled, setNotificationsEnabled] = useState(false);
const [fullName, setFullName] = useState('');
const [nameTouched, setNameTouched] = useState(false);

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
   <hr className="component-divider" />
   <div className="component-stack">
   
   <div className="notification-group">
    <Toggle
    label="Notifications"
    checked={notificationsEnabled}
    onChange={setNotificationsEnabled}
    />

    <p>
    Notifications are {notificationsEnabled ? 'On' : 'Off'}
    </p>
</div>

<hr className="component-divider" />

   <Input
    label="Full name"
    placeholder="Enter your name"
    error={nameTouched && fullName.trim() === ''}
    errorMessage="Full name is required"
    value={fullName}
    onChange={setFullName}
    onBlur={() => setNameTouched(true)}
     />
 </div>
<SettingsPanel />
    </main>
  );
 }
