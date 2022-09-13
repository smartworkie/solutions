import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #add8e6;
height: 450px;
width: 400px;
border-radius: 5%;
align-items: center;
box-sizing: border-box;
margin: 0 auto;

@media screen and (max-width: 700px) {
    width: 300px;
    
    
}
@media screen and (max-width: 400px) {

}
`;
export const Content = styled.div`
a {
    
    text-decoration: none;
    color: blue;
    :hover{
        opacity: 0.7;
    }
   }
   #login{
       background: transparent;
       margin: 20px 130px;
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
h1 {
    color: blue;
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
`;