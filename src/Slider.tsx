import * as React from 'react';
import {Sun} from "./Icons";

import './Slider.css';


interface ISliderProps {
  label: string;
  percentage: number;
}

class Slider extends React.Component<ISliderProps, {}> {
  constructor(props: ISliderProps) {
    super(props);
  }


  public render() {
    const style = {
      left: `${this.props.percentage}%`
    };

    return (
      <div className="ImageViewSettings__input Slider">
        <div className="Slider__label">{this.props.label}</div>
        <div className="Slider__range">
          <div className="Slider__track"/>
          <div className="Slider__handle" style={style}>
            <div className="Slider__icon">
              <Sun/>
            </div>
            <div className="Slider__value">{this.props.percentage}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;
