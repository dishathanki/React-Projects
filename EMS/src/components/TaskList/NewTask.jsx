import React from 'react';

const NewTask = ({data}) => {
  return (
   <div className='flex-shrink-0 h-full w-[300px] p-5 ml-4 rounded-xl bg-green-300'>
        
        <div className='flex justify-between items-center'> 
          <h3 className='bg-red-400 rounded px-3 py-2'>High</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 font-semibold tracking-tighter   text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
           {data.taskDescription}
        </p>
        <div className='mt-4 py-1 px-2 bg-red-600 rounded'>
            <button>Accept Task</button>
        </div>
      </div>

  );
}

export default NewTask;
