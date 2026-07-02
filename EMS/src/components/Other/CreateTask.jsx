import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData,setuserData] = useContext(AuthContext)


    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, settaskDescription] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [assignTo, setassignTo] = useState('');
    const [category, setcategory] = useState('');

    const [newTask, setnewTask] = useState({});

    const submitHandler =(e)=>{
        e.preventDefault()
        
        setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false});
        
        const data = userData
        
       data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask);
                elem.taskNumbers.newTask = elem.taskNumbers.newTask+1;
            }
       })
       setuserData(data)
       console.log(data);
       

       settaskTitle('');
       setcategory('');
       setassignTo('');
       settaskDate('');
       settaskDescription('');
    }

  return (
        <div className='p-5 rounded'>
        <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}

            className='flex w-full flex-wrap items-start justify-between'>

            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5 font-semibold text-xl tracking-tighter'>Task Title</h3>
                <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        settaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded mt-2 outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    type="text" placeholder='Enter The Title of The Task'/>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 font-semibold text-xl tracking-tighter'>Date</h3>
                    <input 
                     value={taskDate}
                    onChange={(e)=>{
                        settaskDate(e.target.value)
                    }}
                        className='text-sm py-1 px-2 w-4/5 rounded mt-2 outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="date"/>
                </div>   

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 font-semibold text-xl tracking-tighter'>Assign To</h3>
                    <input 
                        value={assignTo}
                        onChange={(e)=>{
                        setassignTo(e.target.value)
                    }}
                        className='text-sm py-1 px-2 w-4/5 mt-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="text" placeholder='Enter Employee Name : ' />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 font-semibold text-xl tracking-tighter'>Category</h3>
                    <input 
                        value={category}
                        onChange={(e)=>{
                        setcategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 mt-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        type="text" placeholder='Design , Dev , etc ..' />
                </div>

            </div>

            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5 font-semibold text-xl tracking-tighter'>Description</h3>
                <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        settaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm px-4 mt-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    name="" id=""></textarea>
            </div>
            
            <button className='bg-emerald-200 py-3 hover:bg-emerald-900 px-5 rounded text-1xl font-semibold tracking-tighter mt-2 w-full'>Create Task</button>
        </form>
      </div>
  );
}

export default CreateTask;
