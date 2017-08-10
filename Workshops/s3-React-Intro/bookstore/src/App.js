import React, { Component } from 'react';
import './App.css';
import DATA from './DATA.js';

// Create a component 'Title' that returns an h1 with some text. Render it below inside ourr App component

const AppTitle = (props) => <div className='title'> <h1>{props.title}</h1> </div>

const Book = (props) =>
  <div>
  <h3>Title: { props.book.title }</h3>
  <p>Author: { props.book.author }</p>
  <p>Rank: { props.rank }</p>
  <p>Last Read By: { props.readBy} </p>
  </div>

const TopFourteen = (props) => {
  return(
    <div>
      {
        props.books.map((book,index) =>
        <Book book={book} rank={props.rankings[index]} readBy={props.readers[index]} key={index} />
        )
      }
    </div>
  )
}

const Contact = (props) =>
    <div>
      <h3>{props.title}</h3>
      <p>{props.address.street}</p>
      <p>{props.address.city}</p>
      <p>{props.address.state}</p>
      <p>{props.address.zip}</p>
      <h3>{props.phoneNumber}</h3>
      <h3>{props.email}</h3>
    </div>


class App extends Component {
  render() {
    console.log(DATA, "Number of names", DATA.names.length, "Number of books", DATA.books.length, "Number of numbers", DATA.numbers.length);
    const address = {
      street: '101 Oberon Ln',
      city: 'Bozeman',
      state: 'Montana',
      zip: '59715'
    }
    return (
      <div>
        <AppTitle title={'Bookstore App'} />
        <TopFourteen books={DATA.books} rankings={DATA.numbers} readers={DATA.names} />
        <Contact title={'Reading Rainbow Bookstore'} address={address} phoneNumber={'(406)-794-4737'} email={'reading@rainbowbookstore.com'} />
      </div>
    );
  }
}

export default App;
