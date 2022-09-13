import React, {useEffect, useState} from 'react';
import {Wrapper, Content} from './header1.styles';
import {FaBars, FaAngleUp, FaAngleDown, FaWhatsapp} from 'react-icons/fa';
import {AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Header1= () => {
const [showpage, setShowpage] = useState (false);
const [inner, setInner] = useState(false);
const handleClick = () => setShowpage(!showpage);
const handleInner = () => {
    setInner(!inner) 
};
useEffect(() => {
  const closeDropdown = (e) => {
    if (e.path[0].tagName !=='BUTTON') {
 setInner(false);
  }}
  document.body.addEventListener('click', closeDropdown)
  return () => document.body.removeEventListener('click', closeDropdown);
}, [])

return(
   <Wrapper>
       <Content>
           
<button  id ='bar'  onClick = {handleClick}>
  {!showpage? <FaBars onClick = {handleClick} className = 'bars'/>:<AiOutlineClose onClick = {handleClick} className = 'bars'/>}
        
 </button>

    {showpage && ( 
    <div className ='show'>
    
          <Link to = '/'>  <p>Home</p></Link>
           <Link to = '/about'> <p>About</p></Link>
           <Link to = '/faq'> <p>F.A.Q</p></Link>
          <Link to ='/sample'>  <p>Sample</p> </Link>
          <button className='button' onClick = {handleInner}><p>Support <FaAngleDown/></p>
  {inner &&<div> <p><FaWhatsapp/></p>
        <p><AiOutlineMail/></p></div>}
   </button>
        </div>
    )}
     {!showpage && <div className = "intel">
    
    <Link to = '/'>  <p  className ='padding'>Home</p></Link>
     <Link to = '/about'> <p className ='padding'>About</p></Link>
     <Link to = '/faq'> <p className ='padding'>F.A.Q</p></Link>
    <Link to ='/sample'>  <p className ='padding'>Sample</p> </Link>
   
       <p onClick = {handleInner} className ='padding'><button className = 'button'>Support{inner? <FaAngleUp/>:<FaAngleDown/>}</button></p>
      {inner && <><p  className = 'support'><FaWhatsapp/></p>
       <p  className = 'support'> <AiOutlineMail/></p></>}
   </div>
}
      
        </Content>
        </Wrapper>    
);}
export default Header1;