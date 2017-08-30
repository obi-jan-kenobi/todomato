import React from 'react'
import Button from '../components/button'
import HeadingOne from '../components/heading-one'
import Wrapper from '../components/timer-wrapper'
import ClockWrapper from '../components/timer-clock-wrapper'
import CyclesWrapper from '../components/timer-cycles-wrapper'
import Clock from '../components/timer-clock'
import Cycles from '../components/timer-cycles'

class Timer extends React.Component {
  constructor (props) {
    super(props)
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
      <Wrapper>
        <ClockWrapper>
          <Clock />
          <HeadingOne>{this.state.remaining}</HeadingOne>
          <span style={{display: 'flex'}}>
            <Button onClick={() => this.setState({ running: !this.state.running })}>{ this.state.running ? 'Stop' : 'Resume' }</Button>
            <Button onClick={() => this.setState({ remaining: 1500 })}>Reset</Button>
          </span>
        </ClockWrapper>
        <CyclesWrapper>
          <Cycles />
        </CyclesWrapper>        
      </Wrapper>
    )
  }
}

export default Timer
