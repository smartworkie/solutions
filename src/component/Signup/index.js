import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Spinner from '../Loading';
import {Context} from '../../context';

//Styles
import { Wrapper, Content  } from './Signup.styles';
import {Link} from 'react-router-dom';

const Signup= () => {
    const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmpassword] = useState('');
   const [message, setMessage] = useState(false);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [_user, setUser] = useContext(Context);
   const navigate = useNavigate();

   const handleResponse = (response) => {
    var userObject = jwt_decode(response.credential);
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

   const handleSubmit = async(e)=> {
    e.preventDefault();
     if (password !== confirmpassword){
        setMessage(true)   }
        else{
            setMessage(false);
            try {
                const config = {
                    headers: {
                        "Content-type":  "application/json"
                    },
                }
                setLoading(true);
                const {data} = await axios.post(
                    "http://localhost:3001/api/users",
                    {
                        username,
                        email,
                        password,
                    }, config);
        setLoading(false);
        setUser({username})
        navigate('/account');
        console.log(data)
        localStorage.setItem("userInfo", JSON.stringify(data))           
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }  }}

    return(
        <Wrapper>
            <Content className='grid'>
       <div><br/>  <div id = 'signInDiv'></div> </div>
            <div >
       <h2 className='center'>OR</h2>
    </div>
   
            <div>
        <form  onSubmit={handleSubmit}>
        {message && <p style = {{color:'red'}}>The Passwords Do Not Match</p>}
           <p style = {{color:'white', backgroundColor:'red'}}>{error}</p>
 {loading && <Spinner/>}

    

    <div>
        
            <p>Enter Your Email</p>
        <input type = 'text'
        name='email'
        id = 'email'
        placeholder='Your Email address'
        required
        value = {email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}
        />
        </div>

        <div>
            
            <p>Choose A Username</p>
        <input type = 'text'
        name='username'
        id = 'username'
        placeholder='Username'
        minLength='4'
        required
        value= {username}
        onChange={(e) => {
            setUsername(e.target.value);
        }}/>
        </div>
        <div>
            <p>Choose A Password</p>
        <input type= 'password'
                name='password'
                min='8'
                placeholder='Password'
                required
                value = {password}
                onChange={(e) =>{
                setPassword(e.target.value);
                }}
                />
        </div>
        <div>
            <p>Confirm Password</p>
            <input type='password'
                    name = 'password'
                    min='8'
                    placeholder='Confirm Password'
                    required
                    value={confirmpassword}
                    onChange = {(e) => {
                        setConfirmpassword(e.target.value);
                    }}
                    />
        </div>
        
      <button id='submit'>Submit
            </button>
      <div>
          <Link to ='/login'>  <p id = 'login'>Already have an account? Log in</p>
</Link>
    </div>
    

</form>
</div>

    </Content>
</Wrapper>

);
};
export default Signup;