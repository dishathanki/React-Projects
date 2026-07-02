import React, { useState } from 'react'

function Header(props) {  

  // const [Username, setUsername] = useState('');
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const LogOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div>
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-white tracking-tighter'>Hello  <br /> <span className='text-3xl'>Username👋🏻</span></h1>
        <button 
          onClick={LogOutUser}
          className='bg-red-500 text-white px-4 py-2 rounded text-lg font-medium'>Log out</button>
      </div>
    </div>
  )
}

export default Header