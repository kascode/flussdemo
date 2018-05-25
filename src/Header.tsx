import * as React from 'react';
import Logo from "./Logo";
import Toggle from "./Toggle";

import "./Header.css";

interface IHeaderProps {
  selectedPage: string,
  streamQuality: string,

  onStreamQualityChange(currentValue: string): void
}

const navOptions = ["General", "Image", "Sound", "Alarm", "Archive"];

const Header: React.StatelessComponent<IHeaderProps> = (props: IHeaderProps) => {
  const renderNavElements = () => {
    return navOptions.map((el: string) => {
      return (
        <li
          className={`col-xs-2 Navigation__element ${(el === props.selectedPage ? "Navigation__element_active" : "")}`}
          key={el}
        >{el}</li>
      );
    });
  };

  return (
    <header className="Header">
      <div className="row middle-xs Header__container">
        <div className="col-xs-3 Header__logo">
          <Logo/>
        </div>
        <div className="col-xs-2 Header__toggle">
          <Toggle
            label="Stream"
            options={["high", "low"]}
            value={props.streamQuality}
            onClick={props.onStreamQualityChange}
            className="box"
          />
        </div>
        <div className="col-xs-7 Header__navigation Navigation">
          <div className="box">
            <nav>
              <ul className="row">
                {renderNavElements()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;

