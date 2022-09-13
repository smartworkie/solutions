import axios from 'axios';
import Spinner from '../Loading';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


import {Wrapper, Content} from './forgot.styles';
 const Forgot = () => {
    const [email, setEmail] = useState('');
    const [error, setError]= useState(false);
    const [loading, setLoading]=useState(false);
    const [message, setMessage] =useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
  setEmail(e.target.value);
    }
    const handleForgot = async(e) => {
        e.preventDefault();
        try {
            const config = {
                "Content-type": "application/json"
            }
        
        setLoading(true);
        const {data} = await axios.put(
            'http://localhost:3001/api/users/forgotPassword',
            {
                email,
            }, config)
            setLoading(false);
            console.log(data)
            setMessage(true);
        
    }
    catch (error) {
        setError(error.response.data.message);
        setLoading(false);
    }
}
return(
<Wrapper>
<Content>
    {message && <p style = {{color: 'pink'}}>A Link Has Been Sent to Your Email Address. 
        Check Your Inbox</p>}
    <form onSubmit={handleForgot}>
    {loading && <Spinner/>}
  <p style ={{color: 'white', backgroundColor:'red'}}>{error }</p>
<h1> Forgot Password</h1>
<p>Enter your email to reset Password</p>
<br/>
<p>Email Address</p>
<input
type= 'text'
placeholder='e.g: michael@gmail.com'
required
onChange= {handleChange}
value = {email}
name = 'forgot'
id = 'forgot' 
/>
<br/><br/>
<button type= 'submit' name='submit' id = 'submit'>Reset Password</button>
<Link to ='/login'><p id = 'login'>Go Back</p></Link>
</form>
</Content>
</Wrapper>

)}
export default Forgot;


    

