import React, {useState} from 'react';
import {Wrapper, Content} from './Activate.styes';
import Spinner from '../Loading'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Activate = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();
    const {token} = useParams();
    const handleActivate = async(e) =>{
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type":  "application/json"
                }
            }
            setLoading(true);
            const {data} = await axios.post("http://localhost:3001/api/users/authentication", 
            {token} ,
            config)
            console.log(data)
            setMessage(true);
          setLoading(false);
          setTimeout(()=> {
              navigate('/account'); 
           } , 2000);
          
    }
    catch (error) {
         setError(error.response.data.message);
        setLoading(false);
        
    }  
}
return (

<Wrapper>
{loading &&  <Spinner/>}
 {message && <p style = {{color:'blue'}}
 > Congratulations! Your Email Has Been Verified. Redirecting...</p>}

    <Content>
        {error}
  
    <div>
      {!loading &&  <br/>}
    <h2>Activate Your Account</h2>
    <p ><button id = 'submit' onClick ={handleActivate}>Activate</button></p></div>


    </Content>
</Wrapper>
)};

export default Activate;