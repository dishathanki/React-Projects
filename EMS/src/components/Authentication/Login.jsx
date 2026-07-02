import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setemail("")
    setpassword("")
  }

  return (
    <div className='flex items-center h-screen w-screen justify-center'>

      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'> 
          
          <input 
            value={email}
            onChange={(e)=>[
              setemail(e.target.value)
            ]}
            required 
            className='border-2 border-emerald-200 rounded-full text-xl text-black outline-none bg-transparent placeholder:text-gray-400 py-3 px-5'  type="email" placeholder='Enter Your Email'/>
          
          <input 
            value={password}
            onChange={(e)=>[
              setpassword(e.target.value)
            ]}
            required 
            className='mt-5 border-2 border-emerald-200 rounded-full text-xl text-black outline-none bg-transparent placeholder:text-gray-400 py-3 px-5' type="password" placeholder='Enter Your Password' />
          
          <button className='mt-5 border-none bg-emerald-600 rounded-full text-xl text-white outline-none py-3 px-5'>Log in</button>
        
        </form>
      </div>

    </div>
  );


}

export default Login;