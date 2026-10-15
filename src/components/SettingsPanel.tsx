
import Toggle from './Toggle';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './SettingsPanel.css';


export default function SettingsPanel() {
    const [enabled, setEnabled] = useState(() => {
  return localStorage.getItem('notificationsEnabled') === 'true';
});
     const [email, setEmail] = useState(() => {
  return localStorage.getItem('notificationEmail') ?? '';
});
     
     const [isSaved, setIsSaved] = useState(false);



     return (
   
   <section className="settings-panel">
      <div className="settings-header">
  <h2>Notification Settings</h2>
  <p>Manage your notification preferences.</p>
   </div>

      
    <div className="settings-toggle-group">
  <Toggle
    label="Enable notifications"
    checked={enabled}
    onChange={(checked) => {
      setEnabled(checked);
      setIsSaved(false);
    }}
  />
  <p>Notifications are {enabled ? 'On' : 'Off'}</p>
</div>
      
      
     <div className="settings-form">
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
</div>
  

    
    {isSaved && (
     <p className="settings-success" 
     role="status">Preferences updated for this session!</p>
     )}
    </section>
  );
}
