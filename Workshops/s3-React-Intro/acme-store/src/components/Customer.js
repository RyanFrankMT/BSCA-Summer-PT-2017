import React from 'react';
import PostCustomer from './PostCustomer'

const customerStyle = {

}

const Customer = (props) =>
  <div style= { customerStyle }>
    {
      props.customers.map((customer,index) =>
        <PostCustomer customer={customer} key={index} />
      )
    }
  </div>

export default Customer
