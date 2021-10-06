import {createContext, useState} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){

  const [slideIndex, setSlideIndex] = useState(0)

  function handleSlideClickRight () {
    if(slideIndex < 2 ){
      setSlideIndex( slideIndex +1)
    }
    if(slideIndex === 2){
      setSlideIndex(0)
    }
  }
 
  function handleSlideClickLeft () {
     if(slideIndex > 0 ){
      setSlideIndex( slideIndex  - 1)
     }
     if(slideIndex === 0){
      setSlideIndex(2)
     }
   }
 
  
  const initialState = { option1: '', option2: '', option3: '', option4: '', option5: '', option6: '',
  option7: '', option8: '', option9: '', option10: '', option11: '', option12: '', option13: '', option14: '',
  option15: '', option16: '', option17: '', option18: '', option19: '', option20: '', option21: '', option22: '',
  option23: '', option24: '', option25: '', option26: '', option27: '', option28: '', option29: '', option30: '',
};
  
  const [selectedDatas, setSelectedDatas] = useState(JSON.parse(localStorage.getItem('step1Form')))


  const [step2Form, setStep2Form] = useState(JSON.parse(localStorage.getItem('step2Form')))

  const [step3Form, setStep3Form] = useState(JSON.parse(localStorage.getItem('step3Form')))

  const [files, setFiles] = useState(JSON.parse(localStorage.getItem('step3Files')))


  const [toggleStudentMenu, setToggleStudentMenu] = useState(true)


  const [fundClassTest, setFundClassTest] = useState()

  const [result, setResult] = useState(initialState)

  const [timer, setTimer] = useState(true)



      return(
     <AuthContext.Provider value={{
      setSelectedDatas,
      selectedDatas,
      setStep2Form,
      step2Form,
      step3Form,
      setStep3Form,
      toggleStudentMenu,
      setToggleStudentMenu,
      files,
      setFiles,
      fundClassTest,
      setFundClassTest,
      result,
      setResult,
      handleSlideClickRight,
      handleSlideClickLeft,
      slideIndex,
      setSlideIndex,
      timer,
      setTimer
      
}
}
    >
       {children}
     </AuthContext.Provider>
    )
}
export default AuthProvider