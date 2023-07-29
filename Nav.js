import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <>
        <div className="Nav">
            <div className="logo">Socially</div>

        </div>
        <ul className="menu">
            <Link to = "/blog">Home</Link>
            <Link to = "/create">New Blog</Link>
    
            <Link to = "/"><img src="/"  />LogOut</Link>
            
        </ul>
        </>
     );
}
 
export default Nav;