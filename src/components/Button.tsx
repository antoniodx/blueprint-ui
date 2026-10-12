


type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
};


export default function Button(props: ButtonProps) {
  return (
    <button 
    className={props.variant} 
    disabled={props.disabled}>
      {props.label}
      
    </button>
  );
}
