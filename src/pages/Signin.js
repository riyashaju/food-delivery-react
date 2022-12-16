import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function Signin() {
 
  const history = useHistory()
  const url = "http://192.168.1.43/api/user-registration";
    const [data, setData] = useState({
      firstname: "",
      email: "",
      phone: "",
      pwd: "",
    });
   
     const notify = () => {
      toast.success("The User registered Successfully");
    }
  
   // React.useEffect(() =>{
   //  if(localStorage.getItem("pwd"))history.push('/foods')
 //   }) 

    const handle = (e) => {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      setData(newData); 
    };
  
    const handleSubmit2 = (e) => {
      history.push('/SignUp');
    };
    
    const handleSubmit = (e) => {
      console.log(JSON.stringify(data))
      e.preventDefault();
      
     var entername=document.getElementById('firstname').value;
    var enterpassword=document.getElementById('pwd').value;

var getfirstname=localStorage.getItem('username');
var getpwd =localStorage.getItem('upwd');

if(entername == getfirstname){
  if(enterpassword == getpwd){
   alert("login successful")
   localStorage.setItem("pwd",true);
   history.push('/foods');
}
  else{
    alert("wrong password")
  }
}
else{
  alert("invalid details");
}
     
    
     
      var form = new FormData();
  form.append('name', data.name);
  form.append('email', data.email);
  form.append('phone', data.phone);
  form.append('password', data.password);
  
      axios
      .post(url, form ,{
           method: "post",
          url: url,
           data: form,
          headers: { "Content-Type": "multipart/form-data" },
          
        })
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
    <div class="form1" >
   <div class="title1">Welcome</div>
   <div class="subtitle1">Login Here!</div>
   <div class="input-container2 ic21">
     <input id="firstname" class="input" type="text"  onChange={handle} placeholder=" " />
     <div class="cut"></div>
     <label for="firstname" class="placeholder">Name</label>
   </div>
   <div class="input-container2 ic21">
     <input id="phone" class="input" type="tel"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="phone" class="placeholder">Phone number</label>
   </div>
   <div class="input-container2 ic21">
     <input id="pwd" class="input" type="password"  onChange={handle} placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="pwd" class="placeholder">Password</label>
   </div>
   <button type="button" class=" submit1" onClick={handleSubmit} >login</button>
   <br></br>
   <div class="hjg">
   <p>Not a member?</p>
  <span class="signuppp" ><a class="signupp" onClick={handleSubmit2}>Signup now</a></span>
   </div>
   </div>
  </div>
  
 </>
  );
}

export default Signin;