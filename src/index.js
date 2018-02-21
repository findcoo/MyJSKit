import { observable } from "mobx"
import { observer } from "mobx-react"
import React, { Component } from "react"
import ReactDOM from "react-dom"

@observer
class Counter extends Component {
  @observable count = 0

  render() {
    return (
      <div>
        Counter: {this.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleDec = () => {
    this.count++
  }

  handleInc = () => {
    this.count--
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"))
