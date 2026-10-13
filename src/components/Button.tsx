

import './Button.css';


type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
};


export default function Button(props: ButtonProps) {
  return (
    <button 
    
    className={`button ${props.variant} ${props.size ?? 'medium'}`}
      disabled={props.disabled}
      onClick={props.onClick}
>
      {props.label}
      
    </button>
  );
}
