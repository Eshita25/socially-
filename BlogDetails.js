import { useParams } from "react-router-dom";
import Nav from "./Nav";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
    const {id}=useParams();
    const Navigate = useNavigate();
    const {data:blog,error,loading} = useFetch('https://blogs-250r.onrender.com/blogs/'+id);
    const handleClick = ()=>{
        fetch("https://blogs-250r.onrender.com/blogs/"+id,{
            method : 'DELETE'
        }).then(()=>{
              Navigate('/blog');
        });


    }
    return ( <>
    <Nav></Nav>

    <div className="blog-details">
       
        {loading&&<div>Loading</div>}
        {error&&<div>error</div>}
        {blog&&(
            <article>
                <div className="blog-title">
                {blog.title}
                </div>

                <div className="blog-body">{blog.Description}</div>
                
                -Written by {blog.author}
                <br/>
                

                     
        
            </article>
)}
    </div>
    </> 
    );
}
 
export default BlogDetails;

