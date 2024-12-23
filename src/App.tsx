import React, { useState } from 'react'
import Input from './components/Input'
import { TodosType } from './type/SetType'
import TodosArea from './components/TodosArea'

const App = () =>  {

  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<TodosType[]>([])

  const addTodo = () => {
    setTodos((prev) => [...prev,{id: todos.length+1 , name: todo}])
    setTodo("")
  }

  console.log(todos)
  return (
    <div>
      <Input addTodo={addTodo} todo={todo} setTodo={setTodo} />
      <TodosArea todos={todos} />
    </div>
  )
}

export default App