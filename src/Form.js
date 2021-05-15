import { Component } from 'react'

/**
 * This is the form used to add a bug.
 * It has one controlled input field.
 * As you can see, there is a state controller for the bug's name,
 *   an onChange handler is used to update the state every time the user types,
 *   and the text-box's value is then set from the bug's name.
 * The submit handler comes from <App /> because this form changes App's state,
 *   and any time we want to change a state, that function must live in the same 
 *   component as that state.
 * You could have a submit handler function for this component that prevents the
 *   default page reload action, then calls App's function.
 */
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bugString: ''
    }
  }

  updateText = (e) => {
    this.setState({
      bugString: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.updateBugs(e, this.state.bugString)}>
        <input type="text"
                onChange={this.updateText}
                value={this.state.bugString}>
        </input>
        <button type="submit">ADD</button>
      </form>
    )
  }
}

export default Form