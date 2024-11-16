
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import WelcomPage from './components/WelcomPage'
import QuizPage from './components/QuizPage'



function App() {


  return (
    <BrowserRouter>
    
       
        <Routes>
           <Route path='/' element={<WelcomPage></WelcomPage>}></Route>
           <Route path='/quiz' element={<QuizPage></QuizPage>}></Route>
          
         </Routes>
       
      
      </BrowserRouter>
    
  )
}

export default App
