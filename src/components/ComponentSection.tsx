
import type { ReactNode } from 'react';
import './ComponentSection.css';

type ComponentSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
  fullWidth?: boolean;
};

export default function ComponentSection({
  title,
  description,
  children,
  fullWidth = false,
}: ComponentSectionProps) {
  return (
    <section
      className={`component-section ${
        fullWidth ? 'component-section-full' : ''
      }`}
    >
      <div className="component-section-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="component-section-content">
        {children}
      </div>
    </section>
  );
}
