 
import './Input.css';
import { useId } from 'react';



type InputProps = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  
};


export default function Input(props: InputProps) {
    const errorId = useId();
  return (
    <label className="input-field">
      <span>{props.label}</span>
      <input
        type="text"
        className={props.error ? 'error' : ''}
        placeholder={props.placeholder}
        disabled={props.disabled} 
        aria-invalid={props.error || false}
        aria-describedby={props.error && props.errorMessage ? errorId : undefined}
        value={props.value}
        onChange={(event) => props.onChange?.(event.target.value)}
        onBlur={props.onBlur}
      />
      
{props.error && props.errorMessage && (
  <span id={errorId} className="input-error-message">
  {props.errorMessage}
  </span>
)}

    </label>
  );
}
