import styled from 'styled-components';

export const Wrapper = styled.div`
.grid{
display: grid;
grid-template-rows: 1fr 1fr 10fr;
grid-gap: 10px;
width: 400px;
@media screen and (max-width: 500px) {
    width: 300px;
}
}
margin: 0 auto;
.error{
    background-color: red;
    color: white;
}
@media screen and (max-width: 500px) {
    width: 300px;
    
    
}
@media screen and (max-width: 400px) {

}
`;

export const Content = styled.div`
background-color: #add8e6;
height: 500px;
width: 400px;
border-radius: 5%;
align-items: center;
margin: 0 auto;
margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 300px;
}
#signInDiv{
    width: 200px;
   margin: 0 auto;
  }
   a {
    
    text-decoration: none;
    color: blue;
    :hover{
        opacity: 0.7;
    }
   }
   #login{
       background: transparent;
       margin: 20px 80px;
       :hover {
           background-color: blue;
           color: black;
          
       }
   }
    
input{
    margin-top: 0px;
    margin-bottom: 20px;
    height: 30px;
    width:  200px;
    border: 0;
    border-radius: 5px;
    .para{position: relative
        bottom: 200px;
    }
}

#submit{
    border-radius: 5%;
    border: none;
    width: 200px;
    height: 30px;
    background-color: blue;
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }
   }
.hover{
  :hover{
        opacity: 0.7;
    }
}


`;

