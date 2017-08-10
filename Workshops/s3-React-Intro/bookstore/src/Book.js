import React from 'react';
import BookParagraph from './BookParagraph';

const divStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: '#c0392b',
  color: '#ecf0f1',
  fontSize: '14px',

}

const h3Style = {
  textShadow: '2px 2px #95a5a6'
}

const Book = (props) =>
  <div style={ divStyle }>
  <h3 style={ h3Style }>Title: { props.book.title }</h3>
  <BookParagraph> Author:  { props.book.author } </BookParagraph>
  <BookParagraph>Rank: { props.rank }</BookParagraph>
  <BookParagraph>Last Read By: { props.readBy } </BookParagraph>
  {
    (props.rank === 1) ? <BookParagraph>Best Seller</BookParagraph> : null
  }
  </div>

  export default Book
