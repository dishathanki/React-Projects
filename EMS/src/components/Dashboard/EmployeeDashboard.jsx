import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({props}) {

  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
          <Header changeUser={props.changeUser} data = {props.data} />
          <TaskListNumbers data = {props.data} />
          <TaskList data = {props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard