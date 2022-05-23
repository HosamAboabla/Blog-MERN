import "./LogIn.css";
import  { useState,useContext  } from 'react';
import Postmethod from "../../Postmethod";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";


const LogIn = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [message , setMessage] = useState(null)
    const [error ,setError] = useState(false);

    const {user , setUser} = useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        setMessage(null);
        let {err, mess} = await Postmethod('/api/auth/login',{email,password})
        console.log(err);
        console.log(mess);
        setMessage(mess);
        if (err){
            setError(true)
        }
        else{
            const response1 = await fetch('/api/auth/verifyUser');
            if (response1.ok){
                const jsondata = await response1.json()
                if(jsondata.Admin){
                    setUser("admin")
                }
                else if(jsondata.premium){
                    setUser("prem")
                }
                else{
                    setUser("basic")
                }
            }
            else{
                setUser("false");
            }          
        }
        }
    if (user != "false"){
        return <Navigate to="/"/>
    }
    return ( 
    <div style={{height: '100vh'}}>
        
        <div className="wrapper">
            <div className="inner-warpper text-center">
                <h2 className="title">Log in</h2>
                <form onSubmit={handleSubmit} id="LoginFormvalidate">

                    <div className="input-group">
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="LoginForm-control"  
                        type="email" placeholder="Email" />
                        <span className="lighting"></span>
                    </div>

                    <div className="input-group">
                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="LoginForm-control" 
                        type="password" placeholder="Password" />
                        <span className="lighting"></span>
                    </div>

                    <button className="login-button"type="submit" id="login">Login</button>
                    {error && <div><span style={{color:"red",fontSize:"15px"}}>{message}</span></div>}
                </form>
            </div>
            
            <div className="signup-wrapper text-center">
                <span className="text-primary">Don't have an accout? </span><a className='create-acount' href="/signup">Create One</a>
            </div>
        </div>
    </div>
    );
}

export default LogIn;