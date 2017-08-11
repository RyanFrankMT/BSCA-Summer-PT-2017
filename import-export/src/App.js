import React, { Component } from 'react';
import SubmitButton from './Components/SubmitButton';
import WhiteButton, { BlueButton as MainButton, SecondaryButton, YellowButton } from './Components/Buttons'


class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
        <SubmitButton />
        <MainButton />
        <SecondaryButton />
        <YellowButton />
        <WhiteButton />
      </div>
    );
  }
}

export default App;
