import React from 'react'
import {XCircleIcon} from '@heroicons/react/24/outline'

function AlertPopUp({AlertType}) {

  return (
    <div className='absolute bottom-10 right-10 bg-white w-[230px] h-[100px] p-4  animate-pulse'>
      <div className='h-full flex items-center gap-x-4'>
          <XCircleIcon  className='w-12 text-[#D65DB1] rounded-xl'/>
          <h1 className='text'>{AlertType}</h1>
        </div>
    </div>
  )
}

export default AlertPopUp