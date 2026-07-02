import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex justify-between mt-10 gap-4 screen'>

        <div className='w-[45%] rounded-xl py-6 px-8 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
         <div className='w-[45%] rounded-xl py-6 px-8 bg-pink-600'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
         <div className='w-[45%] rounded-xl py-6 px-8 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
         <div className='w-[45%] rounded-xl py-6 px-8 bg-orange-500'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers