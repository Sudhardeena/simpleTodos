// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {titleInput: '', enableEdit: false}

  componentDidMount() {
    const {todoDetail} = this.props
    const {title} = todoDetail
    this.setState({titleInput: title})
  }

  onDelete = () => {
    const {todoDetail, deleteTodo} = this.props
    const {id} = todoDetail
    deleteTodo(id)
  }

  onEdit = () => {
    this.setState({enableEdit: true})
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onSave = () => {
    const {titleInput} = this.state
    const {editTodo, todoDetail} = this.props
    const {id} = todoDetail
    const updtedTodo = {id, title: titleInput}
    editTodo(updtedTodo)
    this.setState({enableEdit: false})
  }

  render() {
    const {titleInput, enableEdit} = this.state
    return (
      <li className="todo-item">
        {enableEdit ? (
          <input
            type="text"
            className="editable-title-input"
            value={titleInput}
            onChange={this.onChangeTitle}
          />
        ) : (
          <p className="todo">{titleInput}</p>
        )}
        <div className="btn-div">
          {enableEdit === false ? (
            <button
              className="btn edit-btn"
              type="button"
              onClick={this.onEdit}
            >
              Edit
            </button>
          ) : (
            <button className="btn" type="button" onClick={this.onSave}>
              Save
            </button>
          )}
          <button className="btn" type="button" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
