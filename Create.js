import Nav from "./Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const name = localStorage.getItem('name');
    const likes = 0;
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[loading,setLoading] = useState(false);
    const Navigate = useNavigate();
     const handleSubmit =(e)=>{
e.preventDefault();
const blog = {title,Description:body,author: name,likes};
setLoading(true);
fetch('http://localhost:8000/blogs',{
    method : 'POST',
    headers:{"content-Type":"application/json"},
    body : JSON.stringify(blog)
  
}).then(()=>{
    console.log("New blog added");
    setLoading(false);
    
})
alert("New Blog added...redirecting to home page");
Navigate('/blog');
     }
    return ( <>
    <Nav></Nav>
<div className="create">
    
    <h2>Add a New Blog</h2>
    <form onSubmit={handleSubmit}>
        <label>Blog title </label>
        <input
        type = "text"
        value ={title}
        onChange={(e)=>setTitle(e.target.value)}
        reuired
        />
        <label>Blog body : </label>
        <textarea required
        value = {body}
        onChange = {(e)=>setBody(e.target.value)} >
           
        </textarea>
        <label>Blog author : {name} </label>
        {!loading&&<button>Add Blog</button>}
        {loading&&<button disabled>Adding Blog...</button>}
    </form>
</div>
    </> );
}
 
export default Create;
