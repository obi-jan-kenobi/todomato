import React from 'react'
import Button from '../components/button'
import HeadingOne from '../components/heading-one'
import Wrapper from '../components/timer-wrapper'
import ClockWrapper from '../components/timer-clock-wrapper'
import CyclesWrapper from '../components/timer-cycles-wrapper'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      running: false,
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
          <div>
          <HeadingOne>{Math.floor(this.props.remaining / 60)}:{
            this.props.remaining % 60 < 10
              ? `0${this.props.remaining%60}`
              : this.props.remaining % 60
            }</HeadingOne>
          </div>
          <span style={{display: 'flex'}}>
            <Button
              disabled={this.props.disabled}
              onClick={() => this.setState({ running: !this.state.running })}>
              { this.state.running
                ? 'Stop'
                : this.props.remaining === 1500
                  ? 'Start'
                  : 'Resume' }
            </Button>
            <Button
              disabled={this.props.disabled}
              onClick={this.props.onReset}>Reset</Button>
          </span>
        </ClockWrapper>
        <CyclesWrapper>
          <HeadingOne>{this.props.cycles} Pomodoros</HeadingOne>
          <Button
            disabled={this.props.disabled}
            onClick={this.props.onComplete}>mark as completed</Button>
        </CyclesWrapper>
      </Wrapper>
    )
  }
}

export default Timer
