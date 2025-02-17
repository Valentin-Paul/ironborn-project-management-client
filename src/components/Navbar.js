import {useContext} from "react"
import { NavLink } from "react-router-dom";
import {AuthContext} from "../context/auth.context"
import "./Navbar.css"

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);
    return (
        <nav className="Navbar">
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/projects">Projects</NavLink> | 
            <NavLink to="/projects/create">New Project</NavLink> |||
            { isLoggedIn &&
                <>
                    <span>Welcome</span> 
                    <button onClick={logOutUser}>Logout</button>
                </>
            }

            { !isLoggedIn &&
                <>
                    <NavLink to="/signup">Register</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
                </>
            }
        </nav>
    );
}


export default Navbar;