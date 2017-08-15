import React from 'react';

const welcomeStyle = {
  letterSpacing: '0.15em',
  fontFamily: 'copperplate',
  color: '#ecf0f1',
  backgroundColor: '#95a5a6',
  textAlign: 'center',
  width: '100%',

}

const Welcome = (props) =>
  <div style= { welcomeStyle }>
    <h1> ACME Company </h1>
    <h5>Preferred Customer Loyalty Program</h5>
  </div>
export default Welcome
