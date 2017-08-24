import React, { Component } from 'react'
import './App.css'
import DATA from './DATA.js'
import Contact from './Contact'
import TopFourteen from './TopFourteen'
import Book from './Book'
import AppTitle from './AppTitle'
// Create a component 'Title' that returns an h1 with some text. Render it below inside ourr App component

class App extends Component {
  render () {
    console.log(DATA, 'Number of names', DATA.names.length, 'Number of books', DATA.books.length, 'Number of numbers', DATA.numbers.length)
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
    )
  }
}

export default App
