import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent'

const showPopup = (message: string) => {
  alert(message)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MainComponent title="Strive School M7" />
        <MainComponent title="Another Title" subTitle="this is a custom subtitle" /> */}
        <FunctionalComponent title="Strive School M7" showPopup={showPopup} />
        <FunctionalComponent title="Another Title" subTitle="this is a custom subtitle" showPopup={showPopup} />
      </header>
    </div>
  )
}

export default App

// every react component in TS has a default value for their props --> { }
