import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Navbar from './component/Navbar'
import MakeRestorent from './pages/MakeRestorent'
import ViewMenuList from './pages/ViewMenuList'
import AddItems from './pages/AddItems'
import { ToastContainer } from 'react-toastify';
import Footer from './component/Footer'
import Contact from './pages/Contact'


function App() {

  return (
    <div  className='  bg-black' >
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/make-restorent' element={<MakeRestorent/>} />
        <Route path='/view-list/:id' element={<ViewMenuList/>} />
        <Route path='/add-items/:id' element={<AddItems/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
