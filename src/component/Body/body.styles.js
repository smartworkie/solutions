import styled from 'styled-components';

export const Wrapper=styled.div`
background-color: blue;
background-size: cover;
height: 700px;
margin: 0 auto;
width: 95%;
@media screen and (max-width: 768px){
    height: 500px;
}
@media screen and (max-width: 400px) {
    height: 450px;
}
`;

export const Content=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
section {

 a {
        text-decoration: none;
        color: inherit;
    }


display: grid;
grid-template-columns: 400px 400px ;
grid-gap: 50px 100px;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
    grid-template-columns: 200px 200px;
    grid-gap: 50px;
   
}
@media screen and (max-width: 400px){
    grid-gap: 20px;
}

}

h5{
    font-size: 20px;
    color: white;
    margin-top: 0px;
    display: block;

}
p {
    display: block;
    background-color: rgba(300, 150, 150, 1.0);
    width: 50%;
    border: solid 2px white;
   margin: 0 auto;
    margin bottom: 0px;
    font-size: 20px;
    text-align: center;
    margin-top: 0px;
    @media screen and (max-width: 768px)
    {
           font-size: 14px; 
    }
   
    
}
img{
    width: 100px;
    height: 100px;
    @media screen and (max-width: 768px){
        width:50px;
        height: 50px;
    }
}

@media screen and (max-width: 400px) {
    section {
       
    }
}
`;