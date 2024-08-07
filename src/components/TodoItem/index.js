// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetail, deleteTodo} = props
  const {title, id} = todoDetail

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
