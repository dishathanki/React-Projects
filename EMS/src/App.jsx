import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Authentication/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { GetLocalStorage, SetLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  // useEffect(()=>{
  //   // SetLocalStorage()
  //   GetLocalStorage()
  // },)

  const [User, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
      
    }
    
  })
  
  const handleLogin = (email,password)=>{
    if(email == 'a@gmail.com' && password == '123'){
      setUser('Admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password);
      if(employee){
        setUser('Employee')
        setloggedInUserData(employee) 
        localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee',data:employee}))  
      }
    }else{
      alert("Invalid attempt")
    }
  } 

  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''} 
      {User == 'Admin' ? <AdminDashboard changeUser={setUser} /> : (User == 'Employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null )  }

    </>
  );
}

export default App;