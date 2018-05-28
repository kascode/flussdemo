import * as React from 'react';
import Button from './Button';
import {Arrow, Circles, SmoothTriangle, Sun} from './Icons';
import Slider from './Slider';

import * as arrowLeftFull from './images/arrowLeftFull.png';
import * as cameraImage from './images/cameraImage.jpg';
import * as minusIcon from './images/minus.png';
import * as plusIcon from './images/plus.png';
import './ImageView.css';

interface IImageViewState {
  brightness: number;
  sharpness: number;
  saturation: number;
}

class ImageView extends React.Component<{}, IImageViewState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      brightness: 50,
      saturation: 50,
      sharpness: 50
    }
  }

  public render () {
    return (
      <div className="ImageView">
        <div className="row ImageView__container">
          <div className="col-xs-12 ImageViewSettings">
            <div className="flex">
              <div className="ImageViewSettings__backBtn">
                <img src={arrowLeftFull} alt=""/>
              </div>
              <div className="ImageViewSettings__inputsBlock">
                <Slider
                  label="Brightness"
                  percentage={this.state.brightness}
                  icon={<Sun/>}
                  onValueChange={this.handleBrightnessChange}
                />
                <Slider
                  label="Sharpness"
                  percentage={this.state.sharpness}
                  icon={<SmoothTriangle />}
                  onValueChange={this.handleSharpnessChange}
                />
                <Slider
                  label="Saturation"
                  percentage={this.state.saturation}
                  icon={<Circles />}
                  onValueChange={this.handleSaturationChange}
                />
              </div>
              <div className="ImageViewSettings__auto">
                <Button label="Auto" />
              </div>
            </div>
          </div>
          <div className="ImageViewControls">
            <ZoomControl />
            <PanControls />
          </div>
          <div className="ImageView__image">
            <img src={cameraImage} alt=""/>
          </div>
        </div>
      </div>
    );
  }

  private handleBrightnessChange = (percentage: number): void => {
    this.setState({
      brightness: percentage
    });
  };

  private handleSharpnessChange = (percentage: number): void => {
    this.setState({
      sharpness: percentage
    });
  };

  private handleSaturationChange = (percentage: number): void => {
    this.setState({
      saturation: percentage
    });
  };
}

const ZoomControl = () => {
  return (
    <div className="ZoomControl">
      <div className="Zoom__plus">
        <img src={plusIcon} alt=""/>
      </div>
      <div className="Zoom__minus">
        <img src={minusIcon} alt=""/>
      </div>
    </div>
  )
};

const PanControls = () => {
  return (
    <div className="PanControl">
      <Arrow direction="top" />
      <Arrow direction="right" />
      <Arrow direction="bottom" />
      <Arrow direction="left" />
      <div className="PanControl__circle" />
    </div>
  )
};

export default ImageView;
