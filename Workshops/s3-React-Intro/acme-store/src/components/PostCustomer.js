import React from 'react';

const postCustomerStyle = {

}

const PostCustomer = (props) =>
  <div style = { postCustomerStyle }>
    <h3> {props.customer.name} </h3>
    <h4> {props.customer.email} </h4>
  
  </div>

export default PostCustomer
