

import './Button.css';


type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
};


export default function Button(props: ButtonProps) {
  return (
    <button 
    
    className={`button ${props.variant}`}
 
    disabled={props.disabled}>
      {props.label}
      
    </button>
  );
}
