import React from 'react';

const BlueButton = () =>
  <input
    type='button'
    onClick={() => console.log('BlueButton clicked')}
    style={ {backgroundColor: 'blue', color: 'white'} }
    value='Blue Button'
  />

const OrangeButton = () =>
  <input
    type='button'
    onClick={() => console.log('OrangeButton clicked')}
    style={ {backgroundColor: 'orange', color: 'black'} }
    value='Orange Button'
  />

const YellowButton = () =>
  <input
    type='button'
    onClick={() => console.log('YellowButton clicked')}
    style={ {backgroundColor: 'yellow', color: 'black'} }
    value='YellowButton'
  />

  const WhiteButton = () =>
    <input
      type='button'
      onClick={() => console.log('WhiteButton clicked')}
      style={ {backgroundColor: 'white', color: 'black'} }
      value='WhiteButton'
    />

export {BlueButton, OrangeButton as SecondaryButton, YellowButton, WhiteButton as default}
//export default WhiteButton //Chose to use WhiteButton as the default
