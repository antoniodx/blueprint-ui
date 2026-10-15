
import { useState } from 'react';

import Button from './components/Button';
import Toggle from './components/Toggle';
import Input from './components/Input';
import SettingsPanel from './components/SettingsPanel';
import Card from './components/Card';
import ComponentSection from './components/ComponentSection';

export default function App() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [fullName, setFullName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  return (
    <main>
      <header className="app-header">
        <h1>Blueprint UI</h1>
        <p>Design with intention. Build with precision.</p>
      </header>

      <section className="component-dashboard">
        <div className="component-dashboard-header">
          <h2>Component Library</h2>
          <p>Explore reusable UI elements.</p>
        </div>

        <div className="component-dashboard-grid">
          <ComponentSection
            title="Buttons"
            description="Actions and states"
          >
            <Button
              label="Primary"
              variant="primary"
              onClick={() => alert('Primary clicked')}
            />

            <Button
              label="Secondary"
              variant="secondary"
              onClick={() => alert('Secondary clicked')}
            />
          </ComponentSection>

          <ComponentSection
            title="Toggles"
            description="Binary controls"
          >
            <Toggle
              label="Notifications"
              checked={notificationsEnabled}
              onChange={setNotificationsEnabled}
            />
          </ComponentSection>

          <ComponentSection
            title="Inputs"
            description="Forms and validation"
          >
            <Input
              label="Full name"
              placeholder="Enter your name"
              value={fullName}
              onChange={setFullName}
              onBlur={() => setNameTouched(true)}
              error={nameTouched && fullName.trim() === ''}
              errorMessage="Full name is required"
            />
          </ComponentSection>

          <ComponentSection
            title="Cards"
            description="Content containers"
          >
            <Card
              title="Default Card"
              description="Reusable surface"
              variant="default"
            >
              <p>Consistent content structure.</p>
            </Card>
          </ComponentSection>

          <ComponentSection
            title="Settings Panel"
            description="Composed components"
            fullWidth
          >
            <SettingsPanel />
          </ComponentSection>
        </div>
      </section>
    </main>
  );
}
