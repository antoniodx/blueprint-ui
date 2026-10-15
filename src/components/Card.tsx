
import type { ReactNode } from 'react';
import './Card.css';

type CardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  variant?: 'default' | 'subtle' | 'outlined';
};

export default function Card({
  title,
  description,
  children,
  variant = 'default',
}: CardProps) {
  return (
    <section className={`bp-card bp-card--${variant}`}>
      <div className="bp-card-header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <div className="bp-card-content">
        {children}
      </div>
    </section>
  );
}
