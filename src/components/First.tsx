import { Component } from 'react'

interface FirstProps {
  count: number
  title: string
}

class First extends Component<FirstProps> {
  render() {
    return (
      <div>
        <h1>FIRST</h1>
        <p>Counter value: {this.props.count}</p>
      </div>
    )
  }
}

export default First
