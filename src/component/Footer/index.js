import React from 'react';

//Styles
import { Wrapper, Content } from './Footer.styles';
import {Link} from 'react-router-dom';

const Footer = () => (
    <Wrapper>
        <Content>
            <section>
            <div><h5>GETTING STARTED</h5>
                <Link to ='/'>  <p>Home</p> </Link>
                  <Link to = '/signup'>  <p>Sign Up</p> </Link>
                   <Link to ='/login'> <p>Log In</p> </Link>
                </div>
            <div><h5>OUR COMPANY</h5>
                 <Link to='/faq'> <p>F.A.Q.</p></Link>
                   <Link to='/sample'> <p>Sample</p></Link>
                    <Link to = '/privacy'><p>Privacy Policy</p></Link>
                
            </div>
            </section>
            <h5 className = 'copyright'>Copyright 2021. All Rights Reserved</h5>
            
        </Content>
    </Wrapper>
);

export default Footer;