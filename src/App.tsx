import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent title="Strive School M7" />
        <MainComponent title="Another Title" subTitle="this is a custom subtitle" />
      </header>
    </div>
  )
}

export default App

// every react component in TS has a default value for their props --> { }
