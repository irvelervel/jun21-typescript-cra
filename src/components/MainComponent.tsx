import { Component } from 'react'
import First from './First'

// props in every react component are an object

interface MainComponentProps {
  title: string
  subTitle?: string
}

class MainComponent extends Component<MainComponentProps> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle || 'No subtitle in this component'}</p>
        <First title={this.props.title} count={0} />
      </div>
    )
  }
}

export default MainComponent
