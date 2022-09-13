import styled from 'styled-components';

export const Wrapper = styled.div`
margin: 0 auto;
`;

export const Content = styled.div`
background-color: blue;
margin: 0 auto;
width: 95%;
img{
    height: 45%;
    width: 90%;
}
section{
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(4, 1fr);
}
h3{
    background-color: gold;
}
`;