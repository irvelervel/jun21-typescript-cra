import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from './typings/Book'

const showPopup = (message: string) => {
  alert(message)
}

function App() {
  const [books, setBooks] = useState<Book[]>([])

  // let's now fetch an array of objects and use them in my app!
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
        if (response.ok) {
          let fetchedBooks: Book[] = await response.json()
          console.log(fetchedBooks)
          setBooks(fetchedBooks)
        }
      } catch (error) {}
    }
    fetchBooks()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route
            path="/"
            render={(routerProps) => <MainComponent books={books} {...routerProps} title="Strive School M7" />}
          />
          {/* <MainComponent title="Another Title" subTitle="this is a custom subtitle" /> */}
          {/* <FunctionalComponent title="Strive School M7" showPopup={showPopup} />
        <FunctionalComponent title="Another Title" subTitle="this is a custom subtitle" showPopup={showPopup} /> */}
          <Route exact path="/form" component={FormComponent} />
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App

// every react component in TS has a default value for their props --> { }
