import React from 'react'
import Button from '../components/button'
import HeadingOne from '../components/heading-one'
import Wrapper from '../components/timer-wrapper'
import ClockWrapper from '../components/timer-clock-wrapper'
import CyclesWrapper from '../components/timer-cycles-wrapper'
import Clock from '../components/timer-clock'
import Cycles from '../components/timer-cycles'
import Progress from '../components/progress'
import { MAX_TIME } from '../App.js'

class Timer extends React.Component {
  constructor(props) {
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

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

<<<<<<< HEAD
  render() {
=======
  render () {
    const progressPercentage = (MAX_TIME - this.props.remaining) / (MAX_TIME / 100)
>>>>>>> cleanup progress-bar
    return (
      <Wrapper>
        <ClockWrapper>
          <div>
<<<<<<< HEAD
            <Progress progress={(1500 - this.props.remaining) / 15 / 100} />
            <HeadingOne>
              {Math.floor(this.props.remaining / 60)}:{this.props.remaining %
                60 <
              10 ? (
                `0${this.props.remaining % 60}`
              ) : (
                this.props.remaining % 60
              )}
            </HeadingOne>
=======
            <Progress progress={progressPercentage} />
            <HeadingOne>{Math.floor(this.props.remaining / 60)}:{
              this.props.remaining % 60 < 10
                ? `0${this.props.remaining%60}`
                : this.props.remaining % 60
              }</HeadingOne>
>>>>>>> cleanup progress-bar
          </div>
          <span style={{ display: 'flex' }}>
            <Button
              disabled={this.props.disabled}
              onClick={() => this.setState({ running: !this.state.running })}
            >
              {this.state.running ? (
                'Stop'
              ) : this.props.remaining === 1500 ? (
                'Start'
              ) : (
                'Resume'
              )}
            </Button>
            <Button disabled={this.props.disabled} onClick={this.props.onReset}>
              Reset
            </Button>
          </span>
        </ClockWrapper>
        <CyclesWrapper>
          <HeadingOne>{this.props.cycles} Pomodoros</HeadingOne>
          <Button
            disabled={this.props.disabled}
            onClick={this.props.onComplete}
          >
            mark as completed
          </Button>
        </CyclesWrapper>
      </Wrapper>
    )
  }
}

export default Timer
