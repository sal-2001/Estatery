import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import WishList from './pages/wishlist/WishList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{user}, dispatch] = useStateValue();
  //Use Effect is really POWERFUL
  //A piece of code runs with based on given conditions. it can directly work when the app component is loaded.
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //user logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return()=>{
      unsubscribe();
    }
  },[]);
  console.log(user);
  return (
    <Router>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
