

import Button from './components/Button';

export default function App() {
  return (
    <main>
      <h1>Blueprint UI</h1>
      <p>Design with intention. Build with precision.</p>

      <div className="button-group">
        <Button label="Explore Components" variant="primary" />
        <Button label="View Foundations" variant="secondary" />
      </div>
    </main>
  );
}
