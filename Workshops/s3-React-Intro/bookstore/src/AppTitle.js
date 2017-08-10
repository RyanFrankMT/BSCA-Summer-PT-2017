import React from 'react';

const divStyle = {
  backgroundColor: '#7f8c8d',
  textAlign: 'center'
}

const h1Style = {
  color: '#ecf0f1',
}

const AppTitle = (props) =>
<div style={ divStyle }>
  <h1 style={ h1Style }>{props.title}</h1>
</div>

export default AppTitle
