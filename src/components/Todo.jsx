import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    {id: "task-1", title: "bay milk1", isDone: false},
    {id: "task-2", title: "bay bread2", isDone: true},
    {id: "task-3", title: "bay butter3", isDone: false},
    {id: "task-4", title: "bay orange4", isDone: true},
    {id: "task-5", title: "bay apple5", isDone: false},
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Todo