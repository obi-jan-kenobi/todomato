import React from 'react'
import Button from '../components/button'
import HeadingOne from '../components/heading-one'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      remaining: 1500,
      running: true
    }
  }

  timeout = window.setInterval(() => this.setState({
    remaining: this.state.running ? this.state.remaining - 1 : this.state.remaining
  }), 1000)

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {
    return (
      <div>
        <HeadingOne>{this.state.remaining}</HeadingOne>
        <Button onClick={() => this.setState({ running: !this.state.running })}>{ this.state.running ? 'Stop' : 'Resume' }</Button>
        <Button onClick={() => this.setState({ remaining: 1500 })}>Reset</Button>
      </div>
    )
  }
}

export default Timer
