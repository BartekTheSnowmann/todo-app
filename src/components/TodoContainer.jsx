import React from 'react'
import { useSelector } from 'react-redux'
import SingleTodo from './SingleTodo';
import {AnimatePresence, motion} from 'framer-motion'
function TodoContainer({filter}) {

  const todos = useSelector(state=>state.todo.value)

  return (
    <AnimatePresence>
      <div className='bg-white h-[400px] p-2 overflow-y-scroll shadow-lg'>
          {todos.length < 1 ? <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className='text-xl pt-2'>No Todos Yet...</motion.h1> : todos.map((item)=>
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
    </AnimatePresence>
  )
}

export default TodoContainer