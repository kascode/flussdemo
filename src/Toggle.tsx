import * as React from 'react';

interface IToggleProps {
  label: string;
  options: string[];
  value: string;
  onClick(value: string): void;
}

const Toggle: React.StatelessComponent<IToggleProps> = (props: IToggleProps) => {
  const onToggleClick = () => {
    props.onClick(props.value);
  };

  return (
    <span className="Toggle" onClick={onToggleClick}>
      {props.value}
    </span>
  )
};

export default Toggle;
