import React from 'react';

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 ml-4 rounded-xl bg-red-300'>
        
        <div className='flex justify-between items-center'> 
          <h3 className='bg-red-400 rounded px-3 py-2'>High</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 font-semibold tracking-tighter   text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 rounded text-sm'>Mark As Completed</button>
            <button className='bg-red-500 py-1 px-2 rounded text-sm'>Mark As Failed</button>
        </div>
      </div>
  );
}

export default AcceptTask;
