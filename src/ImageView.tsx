import * as React from 'react';
import Slider from './Slider';

import * as arrowLeftFull from "./images/arrowLeftFull.png";
import * as cameraImage from "./images/cameraImage.jpg";
import "./ImageView.css";

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
                <Slider label="Brightness" percentage={this.state.brightness} />
                <Slider label="Sharpness" percentage={this.state.sharpness} />
                <Slider label="Saturation" percentage={this.state.saturation} />
              </div>
            </div>
          </div>
          <div className="ImageViewControls">
            dd
          </div>
          <div className="ImageView__image">
            <img src={cameraImage} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageView;
