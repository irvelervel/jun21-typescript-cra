import { Component } from 'react'
import { Alert } from 'react-bootstrap'
import First from './First'

// props in every react component are an object

interface MainComponentProps {
  title: string
  subTitle?: string
}

interface MainComponentState {
  alertVariant: string
}

class MainComponent extends Component<MainComponentProps, MainComponentState> {
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
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle || 'No subtitle in this component'}</p>
        <First title={this.props.title} count={0} />
      </div>
    )
  }
}

export default MainComponent
