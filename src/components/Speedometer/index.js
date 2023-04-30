// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onApplyBreakBn = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAccelerateBtn = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image-speedometer"
            alt="speedometer"
          />
        </div>
        <h1 className="description">Speed is {speed}mph</h1>
        <p className="title">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button1"
            onClick={this.onAccelerateBtn}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button2"
            onClick={this.onApplyBreakBn}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
