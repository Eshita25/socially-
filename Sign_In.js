import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sign = () => {
  const [data1, setData1] = useState({
    email: '',
    password:''
  });
const Navigate = useNavigate();
  const handleSubmit = (e) => {
    if(localStorage.getItem('email')===''){
      alert('User not found...please register first')
      e.preventDefault();

    }else if(data1.password!==localStorage.getItem('password')){
    alert('wrong password or data not found ...kindly register first ')
    }else{
    e.preventDefault();
    console.log(data1.email);
   Navigate("blog");
    }
  };

  return (
    <>
     
      <Navbar />
      <div className="sign">
        <div className="head">
          Log in to <span className="logo-i">Socially</span>
        </div>
        <div className="line"></div>
        <form onSubmit={handleSubmit} className="form1">
          <label htmlFor="email">email-id</label>
          <input
            type="email"
            onChange={(e) => setData1({ ...data1, email: e.target.value })} // Correct usage of setData
            placeholder="email-id"
            id="email"
            value={data1.email}
            required
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            onChange={(e) => setData1({ ...data1, password: e.target.value })} // Correct usage of setData
            placeholder="password"
            id="password"
            value={data1.password}
            required
          />
          <button type="submit">Log in</button>
        </form>
        <div className="line"></div>
        <div className='foot'>
        Dont have an account ?<Link to = "/login">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Sign;
