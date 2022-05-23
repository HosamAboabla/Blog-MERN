import { NavLink } from "react-router-dom";
import { memo } from "react";

const SideBar = () => {

    
    return ( 
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar-custom" style={{width:'280px'}}>
        <span style={{fontSize:'23px'}} className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-white text-decoration-none">
        <i class="fa-solid fa-grid-horizontal"></i> Dashboard</span>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                
                <NavLink to="/admin-statistics" className="nav-link text-white"><i class="fa-solid fa-chart-line"></i> Statistics</NavLink>
            </li>
            <li>
                <NavLink to="/admin-topics" className="nav-link text-white"><i class="fa-solid fa-clipboard"></i> Topics</NavLink>
            </li>
            <li>
                <NavLink to="/admin-users" className="nav-link text-white"><i class="fa-solid fa-user"></i> Users</NavLink>
            </li>
            <hr></hr>
            
        </ul>
        <hr/>
        
    </div>
    );
}

export default memo(SideBar);