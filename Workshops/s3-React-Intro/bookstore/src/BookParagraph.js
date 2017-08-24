import React from 'react'

const paragraphStyle = {
  color: '#1abc9c'
}

const BookParagraph = (props) =>
  <p style={paragraphStyle}> { props.children }</p>

export default BookParagraph
