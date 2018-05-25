import * as React from 'react';
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';
import './App.css';

import Header from "./Header";

interface IAppState {
    streamQuality: string
}

const streamQualityOptions = ["high", "low"];

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);


    this.state = {
      streamQuality: "high"
    };
  }

  public render() {
    return (
      <div className="App">
        <Header
          selectedPage="image"
          streamQuality={this.state.streamQuality}
          onStreamQualityChange={this.changeStreamQuality}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  private changeStreamQuality = (currentValue: string) => {
    this.setState({
      streamQuality: streamQualityOptions[Number(!streamQualityOptions.findIndex(el => el === currentValue))]
    })
  };
}

export default App;
