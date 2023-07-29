import { Route, Routes } from 'react-router-dom';
import './App.css';

import Sign from './components/Sign_In';
import Register from './components/Sign_up';
import { useState } from 'react';
import Blog from './components/Blog';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


function App() {
 const [name , useName]=useState('')

  return (
    <div className="App">
     
        <Routes>
          <Route path = "/" element={<Sign />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path = "/login/blog" element={<Blog/>}></Route>
          <Route path = "/login" element={<Register/>}></Route>
          <Route path = "/Create" element={<Create/>}></Route>
          <Route path = "/blogs/:id" element={<BlogDetails/>}></Route>
        
          <Route path = "*" element={<NotFound/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
