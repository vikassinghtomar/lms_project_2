
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Aboutus from './pages/Aboutus'
import Homepage from './pages/Homepage'
import NoteFound from './pages/NoteFound'
import Sinup from './pages/sinup'
import Login from './pages/Login'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}>Homepage</Route>
        <Route path='/aboutus' element={<Aboutus/>}>Aboutus</Route>
        <Route path='/sinup' element={<Sinup/>}>sinup</Route>
        <Route path='/login' element={<Login/>}>Login</Route>


        <Route path='*' element={<NoteFound/>}>NoteFound</Route>
      </Routes>
      
      
    </>
  )
}

export default App
