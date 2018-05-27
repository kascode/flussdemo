import * as React from 'react';

import './Slider.css';

interface ISliderProps {
  label: string;
  percentage: number;
  icon?: JSX.Element;
  onValueChange(value: number): void
}

interface ISLiderState {
  percentage: number
}

class Slider extends React.Component<ISliderProps, ISLiderState> {
  private trackNode: HTMLDivElement | null;

  constructor(props: ISliderProps) {
    super(props);

    this.trackNode = null;

    this.state = {
      percentage: props.percentage
    };
  }

  public render() {
    const style = {
      left: `${this.state.percentage}%`
    };

    return (
      <div className="ImageViewSettings__input Slider">
        <div className="Slider__label">{this.props.label}</div>
        <div className="Slider__range">
          <div className="Slider__track" ref={node => this.trackNode = node}/>
          <div className="Slider__handle" style={style} onMouseDown={this.onMouseDown}>
            <div className="Slider__icon">
              {this.props.icon || null}
            </div>
            <div className="Slider__value">{this.state.percentage}</div>
          </div>
        </div>
      </div>
    )
  }

  private interactionInit = () => {
    console.log("Interaction init");
    this.addMouseMoveListener();
    this.addMouseUpListener();
  };

  private interactionStop = () => {
    this.removeMouseMoveListener();
    this.removeMouseUpListener();
  };

  private addMouseMoveListener = () => {
    this.removeMouseMoveListener();
    this.trackNode!.ownerDocument.addEventListener('mousemove', this.handleDrag);
  };
  private removeMouseMoveListener = () => {
    this.trackNode!.ownerDocument.removeEventListener('mousemove', this.handleDrag);
  };

  private handleDrag = (event: MouseEvent) => {
    const boundingRect = this.trackNode!.getBoundingClientRect();
    const position = getPositionFromEvent(event, boundingRect);
    const percentage = getPercentageFromPosition(position, boundingRect);

    console.log("Drag", position, percentage);

    this.setState({
      percentage
    });
  };

  private addMouseUpListener = () => {
    this.trackNode!.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
  };

  private removeMouseUpListener = () => {
    this.trackNode!.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
  };

  private handleMouseUp = () => {
    console.log("Mouse up");
    this.interactionStop();
    this.props.onValueChange(this.state.percentage);
  };

  private onMouseDown = () => {
    console.log("Mouse down");
    this.interactionInit();
  };
}

/**
 * Get position on track from event and track bounding rectangle
 * @param {MouseEvent} event
 * @param {ClientRect} boundingRect
 * @returns {number}
 */
const getPositionFromEvent = (event: MouseEvent, boundingRect: ClientRect): number => {
  const length = boundingRect.width;
  const eventX = event.clientX;
  const trackX = eventX - boundingRect.left;

  return keepInRange(trackX, 0, length);
};

const getPercentageFromPosition = (position: number, boundingRect: ClientRect): number => {
  if (boundingRect.width === 0) {
    return 100;
  }

  return Math.round(position / boundingRect.width * 100);
};

const keepInRange = (value: number, minValue: number, maxValue: number): number => {
  if (value > minValue) {
    return value < maxValue ? value : maxValue;
  }

  return minValue;
};

export default Slider;
