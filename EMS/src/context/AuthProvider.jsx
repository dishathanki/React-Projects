import React, { createContext, useEffect, useState } from 'react';
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage';
import { useContext } from 'react';

export const AuthContext = createContext()
    // localStorage.clear();
const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null);
   
    useEffect(()=>{
        SetLocalStorage()
        const {employees} = GetLocalStorage()
        setuserData(employees)
    },[])

    return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;