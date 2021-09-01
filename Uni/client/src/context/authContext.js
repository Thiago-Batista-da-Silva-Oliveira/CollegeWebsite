import {createContext, useState} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
  
  const [selectedDatas, setSelectedDatas] = useState()



      return(
     <AuthContext.Provider value={{
      setSelectedDatas,
      selectedDatas
     

}
}
    >
       {children}
     </AuthContext.Provider>
    )
}
export default AuthProvider