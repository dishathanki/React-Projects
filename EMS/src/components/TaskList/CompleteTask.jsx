import React from 'react'

function CompleteTask({data}) {
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 ml-4 rounded-xl bg-blue-300'>
        
        <div className='flex justify-between items-center'> 
          <h3 className='bg-red-400 rounded px-3 py-2'>High</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 font-semibold tracking-tighter   text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
           {data.taskDescription}
        </p>
        <div className='mt-4'>
            <button className='w-full px-2 py-1 bg-amber-400 rounded'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
