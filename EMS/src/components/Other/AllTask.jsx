import React, { useContext } from 'react';
import {AuthContext} from '../../context/AuthProvider' 

const AllTask = () => {

  const [userData,setuserData] = useContext(AuthContext)  
  return (
    <div className='bg-[#1c1c1c] p-5 rounded'>
        
      <div className='bg-red-200 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 text-white tracking-tighter font-semibold'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 text-white tracking-tighter font-semibold'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 text-white tracking-tighter font-semibold'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 text-white tracking-tighter font-semibold'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 text-white tracking-tighter font-semibold'>Failed</h5>
      </div>

      <div>
          {userData.map(function(elem ,idx){
        return <div key={idx} className='border-2 border-emerald-200 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 tracking-tighter font-semibold'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600 tracking-tighter font-semibold'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600 tracking-tighter font-semibold'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600 tracking-tighter font-semibold'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600 tracking-tighter font-semibold'>{elem.taskNumbers.failed}</h5>
        </div>

      })}
      </div>
    </div>
  );
}

export default AllTask;
