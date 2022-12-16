import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { FaBars, FaCartPlus, FaSignOutAlt} from 'react-icons/fa'

function Navbar() {

 const history = useHistory()
	const [logout,setlogout] = useState(false)
    const logoutHandler = e =>{
        e.preventDefault();
        localStorage.removeItem("pwd")
        setlogout(true)
        history.push('/signin');
    }


    const handleSubmit3 = (e) => {
        history.push('/Cart');
      };
      const handleSubmit4 = (e) => {
        history.push('/Foods');
      };
      const handleSubmit5 = (e) => {
        history.push('/Contacts');
      };



 return (
    <>
    <html>
        <head>
            <title></title>
            
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
   </head>
   <body>
<nav class="navbar navbar-expand-md fixed-top navbar-dark">
<img class=" navbar-brand rounded-circle" src="https://wallpaperaccess.com/full/3237643.jpg" ></img>  <p class="twoo">Foody</p>
   <button class="navbar-toggler" type="button" data-target="#demo" data-toggle="collapse" >
   <FaBars/>
</button>
  <div  class="collapse navbar-collapse show" id="demo" style={{justifyContent:"center"}} >
      <ul class="navbar-nav " >
            <li class="nav-item">
            <a href='/' class="onn nav-link" >Home</a>
            </li>
            <li class="nav-item">
            <span class="hs4"><a  class='nav-link' onClick={handleSubmit4}>Foods</a></span>
            </li>
            <li class="nav-item">
            <span class="hs5"><a onClick={handleSubmit5}  class='nav-link'>Contacts</a></span>  
            </li>
           </ul>
    </div>
   
   <div className='carts' >
 <span class="hs3"> <a class="fff" onClick={handleSubmit3}><FaCartPlus/></a></span></div>
  <div className='signin' >
  <button class="op9o" onClick={logoutHandler}><a class="sinin ml-3"><FaSignOutAlt/></a></button></div>
   </nav>
   </body>
     </html>
    </>
  )
}

export default Navbar
