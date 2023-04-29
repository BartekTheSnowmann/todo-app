import React from 'react'
import { useSelector } from 'react-redux'
import SingleTodo from './SingleTodo';

function TodoContainer({filter}) {

  const todos = useSelector(state=>state.todo.value)

  return (
    <div className='bg-white h-[400px] p-2 overflow-y-scroll shadow-lg'>
        {todos.length < 1 ? <h1>No Todos Yet...</h1> : todos.map((item)=>
        (
          <SingleTodo
            filter={filter} 
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
          />
        ))}
    </div>
  )
}

export default TodoContainer