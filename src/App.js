import React, { Component } from 'react'
import Bug from './Bug'
import Modal from './Modal'

import './app.css'

/**
 * This is the App component. The controller of the entire project.
 * It has a state controller to manage the bugs for the application
 *   and one to control the "add bug form".
 * This component also hosts the functions used to manipulate the states.
 *   Those functions are passed (if needed) to the component used to 
 *     change the state.
 */
class App extends Component {
  constructor() {
    super()

    this.state = {
      // info
      bugs: [],
      // show/hide form
      isAdding: false
    }
  }

  updateBugs = (e, newBug) => {
    e.preventDefault()
    this.setState({
      bugs: [...this.state.bugs, newBug]
    })
  }

  addBug = () => {
    this.setState({
      isAdding: true
    })
  }

  closeModal = () => {
    this.setState({
      isAdding: false
    })
  }

  editBug = (id, text) => {
    // create copy of state
    let bugs = [...this.state.bugs]
    bugs[id] = text
    this.setState({
      bugs: bugs
    })
  }

  deleteBug = (id) => {
    this.setState({
      bugs: this.state.bugs.filter((bug, ndx) => ndx !== id)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="btn-container">
          <button className="btn btn-main"
                  onClick={this.addBug}>
            ADD BUG
          </button>
        </div>
        {this.state.isAdding && <Modal type="form" updateBugs={this.updateBugs} closeModal={this.closeModal}/>}
        <div className="bug-list">
          {this.state.bugs.map((bug, id) => (
            <Bug key={id} 
                text={bug} 
                editBug={this.editBug} 
                id={id} 
                deleteBug={this.deleteBug} 
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;