import React from 'react'
import { TodosType } from '../type/SetType'

interface IProps {
    todos: TodosType[]
}
const TodosArea:React.FC<IProps> = ({todos}) => {
  return (
    <div>
        {
            todos.map((td,i) => (
                <div key={i}>
                   {td.name}
                </div>
            ))
        }
    </div>
  )
}

export default TodosArea