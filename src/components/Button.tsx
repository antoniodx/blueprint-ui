

type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
};

export default function Button(props: ButtonProps) {
  return (
    <button className={props.variant}>
      {props.label}
    </button>
  );
}
