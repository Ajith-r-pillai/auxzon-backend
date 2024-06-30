import './App.css'
import Register from './auth/Register'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Addproduct from './components/Addproduct'
import SingleView from './components/SingleView'
import Cart from './components/Cart'

function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='addproduct' element={<Addproduct/>}></Route>
        <Route path='single/:id' element={<SingleView/>}></Route>
        <Route path='cart/:id' element={<Cart/>}></Route>
     
   </Routes>
    </>
  )
}

export default App
