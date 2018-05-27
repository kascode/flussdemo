import * as React from 'react';

import './Button.css';

interface IButtonProps {
  label: string
}

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
  return (
    <button className="Button">{props.label}</button>
  )
};

export default Button;
