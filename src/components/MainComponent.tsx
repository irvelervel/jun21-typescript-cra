import { Component } from 'react'
import { Alert } from 'react-bootstrap'
import First from './First'
import { RouteComponentProps } from 'react-router-dom'
import Book from '../typings/Book'

// MainComponent now receives not only the props you declared yourself,
// but also history, location and match! because they were spreaded over in the render prop
// of the route

// props in every react component are an object

interface MainComponentProps {
  title: string
  subTitle?: string
  books: Book[]
  // history
  // location
  // match
}

// the props we'd like MainComponent to receive are MainComponentProps + RouteComponentProps

interface MainComponentState {
  alertVariant: string
}

type AllTheProps = MainComponentProps & RouteComponentProps

class MainComponent extends Component<AllTheProps, MainComponentState> {
  // I want to store a state property for a variant of a bootstrap alert
  state: MainComponentState = {
    alertVariant: 'success',
  }

  render() {
    return (
      <div>
        <Alert variant={this.state.alertVariant} onClick={() => this.setState({ alertVariant: 'danger' })}>
          BOOTSTRAP MESSAGE
        </Alert>
        <h1 onClick={() => this.props.history.push('/form')}>{this.props.title}</h1>
        <p>{this.props.subTitle || 'No subtitle in this component'}</p>
        <First title={this.props.title} count={0} />
        <ul>
          {this.props.books.map((b) => (
            <li key={b.id}>{b.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainComponent
