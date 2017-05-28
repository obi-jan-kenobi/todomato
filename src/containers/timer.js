import React from 'react'
import HeadingOne from '../components/heading-one'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      remaining: 1500,
      running: true
    }
  }

  render () {
    setTimeout(() => this.setState({
      remaining: this.state.remaining - 1
    }), 1000)
    return (
      <div>
        <HeadingOne>{this.state.remaining}</HeadingOne>
      </div>
    )
  }
}

export default Timer
