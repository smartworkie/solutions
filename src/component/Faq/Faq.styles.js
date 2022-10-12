import styled from 'styled-components';

export const Wrapper = styled.div`
width: 50%;
margin: 0 auto;
@media screen and (max-width: 490px){
    width: 90%;
    margin-left: 10px;
}
`;

export const Content = styled.div`
div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color:blue;
        opacity:0.6;
    }
@media screen and (max-width: 490px){
    cursor: default;
   
}
}
.box {
    border: solid blue 1px;
    border-radius: 20px;
}
`;
