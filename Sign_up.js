
import {useState} from 'react';
import Navbar from './Navbar';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Blog from './Blog';
const Register = (props) => {
    const[data ,setData]= useState({
        email : '',
        password : '',
        name : '',
        password2 : ' ',
    }
    );
    const Navigate = useNavigate();
    const handleSubmit = (e)=>{
      
        e.preventDefault();
       
        if(data.password!==data.password2){
       alert("Passwords dont match !");
      setData({...data,password:''});
      setData({...data,password:''});

   

        }else{
          alert("Registered succeessffuully!!!")
          console.log(data.email,data.password,data.name);
          localStorage.setItem('name', data.name);
          localStorage.setItem('email',data.email);
          localStorage.setItem('password',data.password);
          Navigate("/")
        }

}

    return ( 
       
        <div className='sign'>
        
           <Navbar></Navbar>
           <div className='head'>Sign Up to <span className='logo-i'>Socially</span></div>
           <div className='line'></div>
             <form onSubmit = {handleSubmit} className = "form2"> 
                <label htmlFor = "name">name</label>
                <input type = "text" onChange={(e)=>setData({...data,name : e.target.value })} placeholder='name' id="name" value = {data.name} required>

                </input>
        <label htmlFor ="email" >email-id</label>
        <input  type = "email" onChange={(e)=>setData({...data,email : e.target.value})} placeholder = "email-id" id= "email" value = {data.email} required>

        </input>
        <label htmlFor ="password" >password</label>
        <input  type = "password"onChange={(e)=>setData({...data,password:e.target.value})}  placeholder = "password" id= "password" value = {data.password}required>

        </input>
        <label htmlFor='confirm-password'>confirm-password</label>
        <input  type = "password"onChange={(e)=>setData({...data,password2: e.target.value})}  placeholder = "confirm-password" id= "password2" value = {data.password2}required>

</input>

        <button type = "submit">Submit</button>
        
      </form>
      <div className='line'></div>
      <div className='foot'>
      Already have an account?<Link to = "/">Sign in</Link>
      </div>
   
        </div>

     );
}
 
export default Register;