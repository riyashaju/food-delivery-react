import React from 'react'
import './ending.css';
import {FaAddressBook, FaFacebook, FaInstagram, FaLandmark, FaMap, FaMobile, FaPhone, FaTwitter } from 'react-icons/fa';
function Ending() {
  return (
    <>
  
      <div class="mnb">
        <div class="row">
          <div class="col-12 col-md-6">
      <ul class="ull">
        <li class="liii "><a class="lii" href="/">Home</a></li>
        <li class="liii"><a class="lii" href="/Foods">Foods</a></li>
        <li  class="liii"><a class="lii" href="/Contacts">Contacts</a></li>
        <li class="liii" ><a class="lii" href="/signup">Signup</a></li>
      </ul>
      </div>
      <div class="as col-12 col-md-6">
          <a class="faicons" href="https://www.facebook.com">
     <FaFacebook/></a>
     <a class="faicons" href="https://www.instagram.com">
     <FaInstagram/></a>
     <a class="faicons" href="https://www.twitter.com">
     <FaTwitter/></a>
      </div>
      </div>
      <div class="row1">
        <div class="wea col-3">
          <FaAddressBook/><p class="rra">ADDRESS</p><p class="rra">123 USA</p>
        </div>
        <div class="wea col-3 ">
          <FaMobile/><p class="rra">PHONE</p><p class="rra">1346890975</p>
        </div>
        <div class="wea col-3">
          <FaPhone/><p class="rra">PHONE</p><p class="rra">+24789035</p>
        </div>
      </div>
      </div>
      </>
  )
}

export default Ending
