import React, { useState } from 'react'
import { TrashIcon,CheckIcon, XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { DeleteTodo } from '../features/TodoSlice'
import Modal from './Modal'

function SingleTodo({id, title, status, filter}) {

  const dispatch = useDispatch()
  const handleDelete = () =>
  {
    dispatch(DeleteTodo({id}))
  }

  const [shoModal, setShoModal] = useState(false) 
  const ToggleModal = () =>
  {
    setShoModal(!shoModal)
  }

  const [editedElement, setEditedElement] = useState({id})
  const handleEdit = () =>
  {
    ToggleModal()
  }

  return (
    <>
    {filter === status || filter === 'All'?
    <>
      {shoModal && <Modal ModalType='Edit' EditId={editedElement} ToggleModal={ToggleModal}/>}
      <div className='w-full my-2 text-white'>
        <div className='flex items-center justify-between text-xl h-14 p-2 bg-quaternary'>
          <div className='flex min-w-[70%] items-center gap-x-10'>
            <p>{status === 'Completed' ? <CheckIcon className='w-8 bg-secondary'/>:<XMarkIcon className='w-8 bg-[#D65DB1]'/>}</p>
            <h1>{title}</h1>
          </div>
          <div className='flex items-center gap-x-4'>
            <p><PencilSquareIcon onClick={handleEdit} className='w-8'/></p>
            <p><TrashIcon onClick={handleDelete} className='w-8'/></p>
          </div>
        </div>
      </div>
      </>:''}
    </>
  )
}

export default SingleTodo