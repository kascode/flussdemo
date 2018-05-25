import * as React from 'react';
import Logo from "./Logo";
import Toggle from "./Toggle";

import "./Header.css";

interface IHeaderProps {
  selectedPage: string,
  streamQuality: string,

  onStreamQualityChange(currentValue: string): void
}

const Header: React.StatelessComponent<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <Logo/>
      </div>
      <Toggle
        label="Stream"
        options={["high", "low"]}
        value={props.streamQuality}
        onClick={props.onStreamQualityChange}
      />
    </header>
  )
};

export default Header;

