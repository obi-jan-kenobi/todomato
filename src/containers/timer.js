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
      running: true
    }
  }

  timeout = window.setInterval(() => {
    if (this.state.running) {
      this.props.onCountdown()
    }
   }, 1000)

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {
    return (
      <Wrapper>
        <ClockWrapper>
          <Clock />
          <HeadingOne>{Math.floor(this.props.remaining / 60)}:{
            this.props.remaining % 60 < 10
              ? `0${this.props.remaining%60}`
              : this.props.remaining % 60
            }</HeadingOne>
          <span style={{display: 'flex'}}>
            <Button onClick={() => this.setState({ running: !this.state.running })}>{ this.state.running ? 'Stop' : 'Resume' }</Button>
            <Button onClick={this.props.onReset}>Reset</Button>
          </span>
        </ClockWrapper>
        <CyclesWrapper>
          <Cycles>{this.props.cycles}</Cycles>
        </CyclesWrapper>        
      </Wrapper>
    )
  }
}

export default Timer
