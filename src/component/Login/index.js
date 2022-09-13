import React, {useState, useContext, useEffect}  from 'react';
import jwt_decode from 'jwt-decode';
import Spinner from '../Loading';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import {Context} from '../../context';
import { Link} from 'react-router-dom';

//Styles
import { Wrapper, Content  } from './Login.styles';
console.log(process.env.OAUTH)

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

const handleResponse = (response) => {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem('userGoogle', JSON.stringify(userObject));
    navigate('/account');
    try {
        const config = {
            headers: {
                "Content-type":  "application/json"
            },
        }
        setLoading(true);
        const {data} = axios.post(
            "http://localhost:3001/api/users/googlelogin",
            {
                username:userObject.given_name,
                email:userObject.email,
                
            }, config);
           
        }catch (error) {
                setError(error.response.data.message);
}
}
    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '798083548947-ul7hvi9vhu9q9hcoi6n2c6g4ksupqsh0.apps.googleusercontent.com',
            callback: handleResponse,

        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: "outline", size: "large"}
        )

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    try {
        const config = {
            headers: {
                "Content-type":  "application/json"
            }
        }
        setLoading(true);
        const {data} = await axios.post(
            "http://localhost:3001/api/users/login",
            {
                username,
                
                password,
            }, config
           
        )
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUser({username})
        navigate('/account')
        setLoading(false);
       } catch (error) {
        setError(error.response.data.message);
        
        setLoading(false);
    }
}


    return(
        <form onSubmit = {handleSubmit}>
        {loading && <Spinner/>}  
<Wrapper>
<p className='error'>{error}</p>
    <Content className='grid'>
        <div>
       <div ><br/>
       <div id = 'signInDiv'></div> 
        </div>
        <div >
    <h2 className='center'>OR</h2>
</div>
        <div>
  <p className='para'>Enter Your Username</p>
 <input type = 'text'
        name='email'
        id = 'email'
        placeholder='Username'
        minLength='4'
        required
        value = {username}
        onChange={(e) => {
            setUsername(e.target.value);
        }}
        />
        </div>
        <div>
            <p>Enter Your Password</p>
        <input type= 'password'
                name='password'
                placeholder='Password'
                required
                value = {password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
        </div>
        <div> 
            <br/> 
         
            <button type='submit'
                    name='submit'
                    id='submit'
                     >Submit </button>
                    
      </div>
      
      <div>
        <Link to ='/signup'>  <p id = 'login'>Don't have an account? Register </p>
       </Link> 
       <Link to = '/forgot'><p id ='login'>Forgot Password? Reset</p></Link>
         </div>
         </div>
        
    </Content>
</Wrapper>
</form>
);
};
export default Login;