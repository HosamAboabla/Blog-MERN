import { memo } from "react"
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const NavBar = () => {
  
  const {user,setUser} = useContext(UserContext);

  const LogOutHandler = async ()=>{
    const response1 = await fetch('/api/auth/logout');
    if(response1.ok){
      setUser("false");
    }      
  }
  return (
    <header className="p-3 bg-dark text-white all-navbar-custom">
    <div className="container">
      <div className="navbar-custom">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <spam className="navbar-header-custom">BLOG</spam>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="/post" className="nav-link px-2 text-white">Post</a></li>
          {user == "admin" ? 
          <li><a href="/admin-statistics" className="nav-link px-2 text-white">Dashboard</a></li>:
          <></>
          }
          <li><a href="/" className="nav-link px-2 text-white">About</a></li>
        </ul>
        {user=="false"?
        <div className="text-end">
            <a className="btn btn-login-custom" href="/login">Login</a>
            <a  className="btn btn-signup-custom" href="/signup">Sign up</a>
        </div>:
        <div className="text-end">
          <button  className="btn btn-signup-custom mr-3" onClick={LogOutHandler}>log out</button>
          <a  className="btn btn-signup-custom" href="/add_post">Add post</a>
      </div>}
      </div>
    </div>
  </header>
    
  )
}

export default memo(NavBar);