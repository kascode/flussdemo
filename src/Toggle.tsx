import * as React from 'react';
import './Toggle.css';

interface IToggleProps {
  label?: string;
  options: string[];
  value: string;
  className: string;
  onClick(value: string): void;
}

const Toggle: React.StatelessComponent<IToggleProps> = (props: IToggleProps) => {
  const onToggleClick = () => {
    props.onClick(props.value);
  };

  const togglePosition = () => props.value === props.options[0] ? "left" : "right";

  return (
    <span className={`Toggle Toggle_${togglePosition()} ${(props.className ? ` ${props.className}` : "")}`} onClick={onToggleClick}>
      {props.label ? <span className="Toggle__label">{props.label}</span> : null}
      <span className="Toggle__control">
        <span className="Toggle__bg">
          <span className="Toggle__option">{props.options[0]}</span>
          <span className="Toggle__option">{props.options[1]}</span>
        </span>
        <span className="Toggle__btn">{props.value}</span>
      </span>
    </span>
  )
};

export default Toggle;
