import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: #eee;
margin: 0 auto;
height: 50px;
overflow: hidden;
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;

.image{
    width: 70px;
    height: 40px;
    margin: 5px 5px 5px 30px;

@media screen and (max-width: 700px){
    margin-left:2px;
}

@media screen and (max-width: 480px){
    width: 80px;
}
}
#logo {
    font-family: Apple Chancery, cursive;   
    position: relative;
    top: -17px;

@media screen and (max-width:700px){
margin-left:2px;
}
@media screen and (max-width:480px){
    display: none;
}
}
a{
    text-decoration: none;
    color: inherit;
}


#login, #signup, #logout {
    border: 2px solid white;
    padding: 5px 5px;
    border-radius: 20%;
    position: relative;
    left: 90%;
    top: -17px;
    
    :hover{
    opacity: 0.6;
    background-color: white;
    }
    @media screen and (max-width:1100px) {
        position: relative;
        left: 70%;
        }
        
}
#signup {
    @media screen and (max-width:650px){
margin-left: -60px;
    }
@media screen and (max-width:535px){
    margin-left: -90px;
}

    
}
 
.logged {
   position: relative;
   bottom: 14px;
   margin-left: 50px;
}

p {
    font-size: 20px;
    margin-left: 50px;
    display: inline;
    position: relative;
    top: 10px;
    @media screen and (max-width: 800px){
        font-size: 14px;
    }
    : hover {
        opacity: 0.7;
    }
}
@media screen and (max-width: 480px){
   
    #login, #signup, #logout {
        border: 2px solid white;
        padding: 1px 1px;
        border-radius: 20%;
        margin-left: 7px;
    }
    
    p {
        font-size: 14px;
        margin-left: 50px;
        display: inline;
        position: relative;
        top: 15px;
        : hover {
            opacity: 0.7;
        }
    
}

`;
