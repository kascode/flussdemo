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
      <div className="row Header__container">
        <div className="col-xs-3 Header__logo">
          <Logo/>
        </div>
        <div className="col-xs-2 Header__toggle">
          <Toggle
            label="Stream"
            options={["high", "low"]}
            value={props.streamQuality}
            onClick={props.onStreamQualityChange}
          />
        </div>
        <div className="col-xs-7 Header__navigaiton"/>
      </div>
    </header>
  )
};

export default Header;

