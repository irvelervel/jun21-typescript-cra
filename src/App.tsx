import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Route } from 'react-router-dom'

const showPopup = (message: string) => {
  alert(message)
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" render={(routerProps) => <MainComponent {...routerProps} title="Strive School M7" />} />
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
