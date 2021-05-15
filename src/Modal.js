import Form from './Form'

/**
 * The original plan was to have modal types: form, edit, delete confirmation
 * Depending on the type of modal, a different layout would be printed.
 * In the end, only the "form" modal was created, as editing takes place right on the page
 *   and there is no confirmation for deleting
 */

function Modal(props) {
  const { type } = props
  return (
    <div className="modal">
      <div onClick={props.closeModal} className="close">X</div>
      {type === "form" && <Form updateBugs={props.updateBugs}/>}
    </div>
  )
}

export default Modal