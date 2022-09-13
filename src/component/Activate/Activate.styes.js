import styled from 'styled-components';

export const Content = styled.div`
p{
    colour: white;
  
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

h2{
    color: pink;
}
`;

export const Wrapper = styled.div`
background-color: #add8e6;
height: 200px;
width: 400px;
border-radius: 5%;
align-items: center;
box-sizing: border-box;
margin: 0 auto;

@media screen and (max-width: 700px) {
    width: 300px;
    
    
}
`;
