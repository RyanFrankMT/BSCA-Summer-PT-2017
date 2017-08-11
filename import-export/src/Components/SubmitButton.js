import React from 'react';

const SubmitButton = (props) =>
  <input
    type='button'
    onClick={() => console.log('SubmitButton clicked!')}
    value='Submit'
  />

  export default SubmitButton
