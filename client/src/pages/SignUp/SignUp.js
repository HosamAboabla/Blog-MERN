import './signUp.css'
import  { useState,useContext  } from 'react';
import { Navigate } from 'react-router-dom';
import Postmethod from '../../Postmethod';
import Putmethod from '../../Putmethod';
import { UserContext } from '../../UserContext';


const SignUp = () => {
    const [userName ,setUsername] = useState("");
    const [firstName , setFirstname] = useState('');
    const [lastName , setLastname] = useState('');
    const [email , setEmail] = useState("")
    const [phone ,setPhone] = useState("");
    const [password ,setPassword] = useState("");
    const [plan, setPlan] = useState('Basic');
    const [confirm ,setConfirm] = useState("");

    const [equal ,setEqual] = useState(true);

    const [message , setMessage] = useState(null);
    const [error ,setError] = useState(false);

    const {user,setUser} = useContext(UserContext);

    const handlePlanChange = (event) => {
        setPlan(event.target.value)
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirm){
            setEqual(false)
            return
        }
        else{
            setEqual(true)
        }
        setError(false);
        setMessage(null);
        let {err, mess} = await Postmethod('/api/auth/register',{userName,email,firstName,lastName,phone,password,plan})
        setMessage(mess);
        if (err){
            setError(true);
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
    <div className='signup-body'>    
        <div className="signup-container">
            <div className="signup-title"><h2>Registration</h2></div>
            <div className="signup-content">
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="user-details">
                <div className="input-box">
                    <span className="signup-details">UserName</span>
                    <input 
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Enter your User Name" 
                    value={userName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">first Name</span>
                    <input 
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text" 
                    placeholder="Enter your first name" 
                    value={firstName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Last Name</span>
                    <input 
                    onChange={(e) => setLastname(e.target.value)}
                    type="text" 
                    placeholder="Enter your Last name"
                    value={lastName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Email</span>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Phone Number</span>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" 
                    placeholder="Enter your number" 
                    value={phone}
                    required />
                </div>
                <div style={{width:"250px"}}>
                    
                </div>
                <div className="input-box">
                    <span className="signup-details">Password</span>
                    <input                    
                    onChange={(e) =>setPassword(e.target.value)}
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Confirm Password</span>
                    <input
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password" 
                    placeholder="Confirm your password" 
                    value={confirm}
                    minLength='8'
                    required />
                </div>
                </div>
                <div>
                    {!equal?
                    <span style={{color:"red",fontSize:"12px"}} >passwords don't match</span>
                    :<></>}
                    {error &&<span style={{color:"red",fontSize:"12px"}} >{message} </span>}
                </div>
                <h6 class="mb-2">Plan</h6>
                <div className="my-2">
                    <div className="form-check">
                        <input type="radio" value="Basic" checked={plan === "Basic"} onChange={handlePlanChange}/>
                        <span> Basic</span> 
                    </div>
                    <div className="form-check">
                        <input type="radio" value="Premium" checked={plan === "Premium"} onChange={handlePlanChange}/>
                        <span> Premium</span> 
                    </div>
                </div>
                <div className="button">
                <input type="submit" value="Register"/>
                </div>
                
            </form>
            </div>
        </div>
    </div>
    );
}
export default SignUp;