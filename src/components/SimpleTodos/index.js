import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, addTitleInput: ''}

  onDelete = id => {
    const {todoList} = this.state
    const filteredTodo = todoList.filter(todo => todo.id !== id)
    this.setState({todoList: filteredTodo})
  }

  onEdit = updtedTodo => {
    const {id} = updtedTodo
    this.setState(prevState => ({
      todoList: prevState.todoList.map(el => {
        if (el.id === id) {
          return updtedTodo
        }
        return el
      }),
    }))
  }

  onHandleInputChange = event =>
    this.setState({[event.target.name]: event.target.value})

  onAdd = () => {
    const {addTitleInput} = this.state
    const addTitleInputLength = addTitleInput.length
    const lastChr = addTitleInput[addTitleInputLength - 1]
    // console.log(lastChr)
    const isLastchrIsNo = !Number.isNaN(parseInt(lastChr))
    // console.log(isLastchrIsNo)
    const noOfTodosCount = isLastchrIsNo ? parseInt(lastChr) : 1
    // console.log(noOfTodosCount)

    const newTodosList = Array.from({length: noOfTodosCount}, () => ({
      id: uuidv4(),
      title: isLastchrIsNo
        ? addTitleInput.slice(0, addTitleInputLength - 1)
        : addTitleInput,
    }))
    // console.log(newTodosList)
    // const newTodo = {
    //   id: uuidv4(),
    //   title: addTitleInput,
    // }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodosList],
      addTitleInput: '',
    }))
  }

  render() {
    const {todoList, addTitleInput} = this.state
    return (
      <div className="container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-div">
            <input
              type="text"
              name="addTitleInput"
              className="add-title-input"
              value={addTitleInput}
              onChange={this.onHandleInputChange}
              placeholder="Todo title"
            />
            <button type="button" className="add-btn" onClick={this.onAdd}>
              Add
            </button>
          </div>
          <ul className="todo-container">
            {todoList.map(each => (
              <TodoItem
                todoDetail={each}
                key={each.id}
                deleteTodo={this.onDelete}
                editTodo={this.onEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
