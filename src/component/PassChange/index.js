import React, {useState} from 'react';
import {Wrapper, Content} from './PassChange.styles';
import {useNavigate} from 'react-router-dom';
import Spinner from '../Loading';
import Error from '../Error';
const PassChange = () => {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
   const handleInput = (e) => {
       
        setPassword(e.target.value)  
   }
   const handleChange = (e) => {
       setConfirmPassword(e.target.value)
   }
   const handleSubmit = async(e) => {
       e.preventDefault();
       setLoading(false);
       navigate('/account');
   }
    return (
<Wrapper>
    <Content>
        <form onSubmit = {handleSubmit}>
            {error && <Error/>}
            {loading && <Spinner/>}
          <h1> Change Your Password</h1><br/>
            <p>New Password</p>
       <input type = 'text' required id='passwordchange' name='passwordchange'
        value = {password} onChange={handleInput}  placeholder='Enter Your New Password' />
       
        <p>Confirm Password</p>
        <input type ='text' required id ='passwordchange' name='passwordchange' 
        placeholder='Confirm Your Password' onChange ={handleChange} value= {confirmpassword}/>
        
        <button type = 'submit' id = 'submit'> Submit</button>
        </form>

    </Content>
</Wrapper>

    )
}
export default PassChange;