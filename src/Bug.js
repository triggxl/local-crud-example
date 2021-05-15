import { Component } from 'react'

/**
 * This is the bug component. It is responsible for
 *   printing the information to the screen (called from App).
 * Each bug tracks its own state including if it is being edited,
 *   the name (text), and the id.
 */
class Bug extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: props.text,
      id: props.id
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editBug(this.state.id, this.state.text)
    this.setState({
      isEditing: false
    })
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="bug">
        {
          !this.state.isEditing ?
            <>
              <p>{this.props.text}</p>
              <div className="bug-buttons">
                <button onClick={() => this.setState({isEditing: true})}>EDIT</button>
                <button onClick={() => this.props.deleteBug(this.state.id)}>DELETE</button>
              </div>
            </>
          :
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                     onChange={this.updateText}
                     value={this.state.text}>
              </input>
              <button type="submit">SAVE</button>
            </form>
        }
      </div>
    )
  }
}

export default Bug