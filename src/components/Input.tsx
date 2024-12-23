import React from 'react'



interface IProps {
    todo:string,
    setTodo:   React.Dispatch<React.SetStateAction<string>>
    addTodo: () => void
}


const Input:React.FC<IProps> = ({todo,setTodo,addTodo}) =>  {
  return (
    <div>
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='Todo Ekle' />
        <button onClick={addTodo}>ekle</button>
    </div>
  )
}

export default Input