
import './Toggle.css';

type ToggleProps = {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function Toggle(props: ToggleProps) {
  return (
   
<label className="toggle">
  <input type="checkbox" 
    disabled={props.disabled}
    checked={props.checked}
    onChange={(event) => props.onChange?.(event.target.checked)}
/>

  <span className="toggle-track" aria-hidden="true">
    <span className="toggle-thumb" />
  </span>
  <span className="toggle-label">{props.label}</span>
</label>

  );
}
