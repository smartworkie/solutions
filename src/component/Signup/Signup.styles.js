import styled from "styled-components";

export const Wrapper = styled.div`
.grid{
    display: grid;
    grid-gap: 2px;
    grid-template-rows: 50px 50px 500px;
    width: 400px; 
}
width: 400px;
height: 630px;
background-color: #add8e6;
border-radius: 5%;
margin: 0 auto;
margin-bottom: 20px;
overflow: hidden;
@media screen and (max-width: 700px) {
    width: 300px;
}
@media screen and (max-width: 400px) {
   
}

`;
export const Content = styled.div`
background-color: #add8e6;
width: 400px;
border-radius: 5%;
margin: 0 auto;
margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  #signInDiv{
    width: 200px;
   margin: 0 auto;
  }
button {
    width: 100px;
    height: 20px;

    :hover {
        opacity: 0.7;
    }
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
