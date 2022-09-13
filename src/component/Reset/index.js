import React, {useState} from 'react';
import {Wrapper, Content} from './Reset.styles';
import Spinner from '../Loading';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';

const Reset = () => {
    const [newPass, setNewPass] = useState('');
    const [confirmnewPass, setConfirmnewPass] = useState('');
    const [loading, setLoading] =useState(false);
    const [message, setMessage] = useState(false);
    const [message1, setMessage1] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {resetLink} = useParams();

    const handleInput = (e) => {
       
        setNewPass(e.target.value)  
   }
   const handleChange = (e) => {
       setConfirmnewPass(e.target.value)
   }
   
    const handleReset = async(e) =>{
        e.preventDefault();
        if (newPass !== confirmnewPass){
          return  setMessage1(true)   }
            else{
                setMessage1(false);}
        try {
            const config = {
                headers: {
                    "Content-type":  "application/json"
                }
            }
            setLoading(true);
            const {data} = await axios.put("http://localhost:3001/api/users/reset", 
            {resetLink, newPass} ,
            config)
            console.log(data)
            setMessage(true);
          setLoading(false)
          navigate('/');
              }
    catch (error) {
         setError(error.response.data.message);
        setLoading(false);
        
    }  
}

    return (
        <form onSubmit = {handleReset}>
        {message1 && <p style = {{color:'white', backgroundColor:'red'}}>The Passwords Do Not Match!</p>}
     <p style ={{color: 'white', backgroundColor:'red'}}>   {error}</p>
           <p style = {{color:'white', backgroundColor:'red'}}> {error} </p>
           {loading && <Spinner/>}
        <Wrapper>
           <Content>
            
            
    
            <h1> Change Your Password</h1><br/>
            <p>New Password</p>
       <input type = 'text' required id='passwordchange' name='passwordchange'
        value = {newPass} onChange={handleInput}  placeholder='Enter Your New Password' />
       
        <p>Confirm Password</p>
        <input type ='text' required id ='passwordchange' name='passwordchange' 
        placeholder='Confirm Your Password' onChange ={handleChange} value= {confirmnewPass}/>
        
        <button type = 'submit' id = 'submit'> Submit</button>
      

            </Content>
        </Wrapper>
          </form>
    )
};
export default Reset