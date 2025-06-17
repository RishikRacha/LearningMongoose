import { useState } from 'react'
import { Navigate, Route, Routes , useNavigate} from 'react-router-dom'
import './App.css'
import Home from      './components/Home/Home'
import IplComp from   './components/IplComp/IplComp'
import Nav from       './components/Nav/Nav'
import Products from  './components/Products/Products'
import Profile from   './pages/Profile/Profile'
import Users from     './pages/Users/Users'
import Login from     './pages/Login/Login'
import Signup from    './pages/Signup/Signup'
import ReduxPage from './redux/component/ReduxPage/ReduxPage'
import ProductPage from './components/SingleProduct/Product'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if(!isLoggedIn) {
    return <>
    <Routes>
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login login = {() => {setIsLoggedIn(true)}}  />} />
      <Route path={"*"} element={<Navigate to="/login" />} />
    </Routes>
    </>
  }
  
  return (
      <>
        <Nav logout = {() => {setIsLoggedIn(false)}}/> <br />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/ipl"} element={<IplComp />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/redux"} element={<ReduxPage />} />
          <Route path={"/product-details"} element={<ProductPage />} />
          <Route path={"*"} element={<Navigate to='/' />} />

          

        </Routes>

      </>
  )
}

export default App
