
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import WelcomPage from './components/WelcomPage'
import QuizPage from './components/QuizPage'
import AdminPage from './Screens/AdminPage'
import AdminSettings from './components/AdminSettings'



function App() {


  return (
    <BrowserRouter>
    
       
        <Routes>
           <Route path='/' element={<WelcomPage></WelcomPage>}></Route>
           <Route path='/quiz' element={<QuizPage></QuizPage>}></Route>
           <Route path='/adminAMRC' element={<AdminPage></AdminPage>}></Route>
           <Route path='/adminsetting' element={<AdminSettings></AdminSettings>}></Route>
          
         </Routes>
       
      
      </BrowserRouter>
    
  )
}

export default App
