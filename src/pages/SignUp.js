import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';
function SignUp() {
const history = useHistory()
//const url = "http://192.168.1.43/api/user-registration";
  const [data, setData] = useState({
   firstname: "",
    email: "",
    phone: "",
    pwd: "",
  });

 
   const notify = () => {
    toast.success("The User registered Successfully");
  }

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData); 
  };


  
  const handleSubmit = (e) => {
console.log(JSON.stringify(data))
    e.preventDefault();

    var fname=document.getElementById('firstname').value;
    var pswd=document.getElementById("pwd").value;
    var cpswd=document.getElementById("cpwd").value;
    var phoneno=document.getElementById("phone").value;
    var uaddr=document.getElementById("adrs").value;
    if(fname==null||fname=="")
    {
      alert("Name can't be blank");
      return false;
    }
    else if(pswd.length<6){
      alert("password must be atleast 6 characters.")
      return false;
    }
    else if(cpswd!=pswd){
      alert("your passwords didn't match.please confirm your password.")
      return false;
    }
    else if(phoneno==null||phoneno==""){
      alert("Phone Number can't be blank")
      return false;
    }
    else if(uaddr==null||uaddr==""){
      alert("address  can't be blank")
      return false;
    }
  
localStorage.setItem('username',fname);
localStorage.setItem('upwd',pswd);
localStorage.setItem('ucpwd',cpswd);
localStorage.setItem('uphoneno',phoneno);
localStorage.setItem('uadddress',uaddr);
   
console.log(data)
    history.push('/signin')
   
    var form = new FormData();
form.append('firstname', data.firstname);
form.append('email', data.email);
form.append('phone', data.phone);
form.append('pwd', data.pwd);





    axios
   // .post(url, form ,{
      //   method: "post",
     //   url: url,
      //   data: form,
      //  headers: { "Content-Type": "multipart/form-data" },
        
      //})
    .then((response) => {
       console.log(response);
      console.log(response.data);
      setData({ ...data, id: e.target.value})
      toast.success("The User registered Successfully");
      
    });

    
    // .catch((error) => {
    //   if (error.response) {
    //     console.log(error.response);
    //     console.log("server responded");
    //   } else if (error.request) {
    //     console.log("network error");
    //   } else {
    //     console.log(error);
    //   }
    // });
   
  }; 


 
  return (
   
    <>

 <div class="lop0">
  <h4 class="mkn">register here</h4>
    <div class="form" >
   <div class="title">Welcome</div>
   <div class="subtitle">Register Here!</div>
   <table>
    <tr>
      <td>
   <div class="input-container ic2">
     <input id="firstname" class="input" type="text"  onChange={handle} placeholder=" " />
     <div class="cut"></div>
     <label for="firstname" class="placeholder">First name</label>
   </div>
   </td>
   <td>
   <div class="input-container ic2">
     <input id="lastname" class="input" type="text"   onChange={handle} placeholder=" " />
     <div class="cut"></div>
     <label for="lastname" class="placeholder">Last name</label>
   </div>
   </td>
   </tr>
   <tr>
    <td>
   <div class="input-container ic2">
     <input id="email" class="input" type="text"  placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="email" class="placeholder">Email</label>
   </div></td>
   <td>
   <div class="input-container ic2">
     <input id="phone" class="input" type="tel"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="phone" class="placeholder">Phone number</label>
   </div>
   </td>
   </tr>
   <tr>
    <td>
   <div class="input-container ic2">
     <input id="pwd" class="input" type="password"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="pwd" class="placeholder">Password</label>
   </div>
   <td>
   <div class="input-container ic2">
     <input id="cpwd" class="input" type="password"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="cpwd" class="placeholder">Confirm Password</label></div></td></td>
   <td>
   <div class="input-container1 ic2">
     <input id="adrs" class="input" type="text"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="adrs" class="placeholder">Address</label>
   </div>
   </td>
   </tr>
    <button type="button" class=" submit"  onClick={handleSubmit}>Register</button>
   </table>
   </div>
   </div>
   
 </>
  );
}

export default SignUp;