import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo, EditTodo } from '../features/TodoSlice';
import AlertPopUp from './AlertPopUp';

function Modal({ModalType, ToggleModal, EditId}) {

    const modalRef = useRef()
    useEffect(()=>
    {
        modalRef?.current.focus()
    },[])

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Completed')
    const [ModalError, setModalError] = useState(false)
    const [AlertType, setAlertType] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(ModalType==='Add')
        {
            if(title.length === 0)
            {
                setAlertType('Wypełnij to pole!')
                setModalError(true)
            }   
            else
            {
                setModalError(false)
                setAlertType('')
                const newItem = {id:Date.now(), title, status}
                dispatch(AddTodo(newItem))
                ToggleModal()
            }
        }
        else
        {
            if(title.length === 0)
            {
                setAlertType('Wypełnij to pole!')
                setModalError(true)
            }
            else
            {
                setModalError(false)
                setAlertType('')
                const newItem = {title, status}
                dispatch(EditTodo({newItem, EditId}))
                ToggleModal()
            }
            
        }
        
    }

  return (
    <>
      <motion.div className='absolute -top-1/2 -left-1/2 h-screen w-full bg-tertiary/80'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-20}}
        className='flex h-full justify-center items-center'>
            <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-between items-center py-8 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-quaternary rounded-xl shadow-lg shadow-tertiary '>
                <div>
                    <h1 className='text-white text-xl sm:text-3xl uppercase'>{ModalType} todo</h1>
                </div>
                <div>
                    <input
                    className='w-[250px] sm:w-[300px] h-[40px]'
                    ref={modalRef}
                    onChange={e=>setTitle(e.target.value)}
                    type="text" placeholder='Todo' /> 
                    <div className='py-2'>
                        <select
                        className='w-full mx-auto'
                        onChange={e=>setStatus(e.target.value)}
                        name="" id="select">
                            <option value="Completed">Completed</option>
                            <option value="Incompleted">Incompleted</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                    onClick={handleSubmit}
                    className='mx-2 bg-primary hover:bg-secondary duration-300'>{ModalType}</button>    
                    <button
                    type='button'
                    onClick={ToggleModal}
                    className=' bg-[#FF6998] hover:bg-[#D65DB1] duration-300'>Cancel</button>    
                </div>           
            </form>
        </motion.div>
    </motion.div>
        {ModalError && <AlertPopUp AlertType={AlertType} />}
        </>
  )
}

export default Modal