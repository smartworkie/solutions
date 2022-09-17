import React, {useContext} from 'react';
import {Wrapper, Content} from './header.styles'
import {Link, useNavigate} from 'react-router-dom';
import {Context} from '../../context';
import smart from '../../images/smart.jpg';
const Header = () => {
    const [user,setUser] = useContext(Context);
    const navigate = useNavigate();

    const allow = JSON.parse(localStorage.getItem('userGoogle'))
    if (allow ) {
        setUser(allow);
        console.log(allow);
    }
   

    const allowed = JSON.parse(localStorage.getItem('userInfo'));
    if (allowed){
        setUser(allowed);
    }
    
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userGoogle");
        setUser(false);
        navigate('/login');
    }
    return (
   <Wrapper>
       <Content>
   <div>
   <Link to ='/'solutions><img className='image' src={smart} alt='smart'/></Link>
    <Link to = '/solutions'> <p id = 'logo'>smartSolutions</p></Link>
    {  user?            <span className='logged'> Logged in as: {user.username||user.given_name}   </span>
 :  <Link to= '/signup'> <p id = 'signup'>SIGN UP</p></Link>}

  {!user && <Link to ='/login' > <p id = 'login'>LOGIN</p></Link>}
  {user &&  <button id= 'logout' onClick = {handleLogout}> LOGOUT</button>}  
     </div>
     </Content>
    </Wrapper>
)
};
export default Header;