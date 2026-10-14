
import Toggle from './Toggle';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './SettingsPanel.css';

export default function SettingsPanel() {
     const [enabled, setEnabled] = useState(false);
     return localStorage.getItem('notificationsEnabled') === 'true';
     const [email, setEmail] = useState(() => {
  return localStorage.getItem('notificationEmail') ?? '';
});
     
     const [isSaved, setIsSaved] = useState(false);
return (
   
   <section className="settings-panel">
      <h2>Notification Settings</h2>
      <p>Manage your notification preferences.</p>
      <Toggle 
      label="Enable notifications"
      checked={enabled}
      onChange={(checked) => {
      setEnabled(checked);
      setIsSaved(false);
      }}
    />
      <p>Notifications are {enabled ? 'On' : 'Off'}</p>
      
      <Input
      label="Notification email"
      placeholder="Enter your email address"
      value={email}
      onChange={setEmail}
      disabled={!enabled}
    />
      <Button
     label="Save Preferences"
     variant="primary"
     onClick={() => {
    localStorage.setItem('notificationsEnabled', String(enabled));
    localStorage.setItem('notificationEmail', email);
    setIsSaved(true);
  }}

    />
    {isSaved && (
     <p className="settings-success" 
     role="status">Preferences updated for this session!</p>
     )}
    </section>
  );
}
