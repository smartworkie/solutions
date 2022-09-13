import styled from "styled-components";

export const Wrapper= styled.div`
overflow: hidden;

`;

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
section {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-gap: 50px;
    margin-top: 30px;
    margin-bottom: 20px;
    

    a {
        text-decoration: none;
        color: inherit;
    }

    @media screen and (max-width: 700px) {
        width: 700px;
        grid-template-columns: 200px 200px;
        grid-gap: 35px;
        margin-left: 40px;
    }
}

img {
    height: 100px;
    width: 100px;
    @media screen and (max-width: 700px){
        height: 50px;
        width: 50px;
    }
}
div {
    border: 2px solid black;
    border-radius: 20%;
    height: 350px;

    @media screen and (max-width: 700px){
        height: 300px;
       
    }

    : hover {
        opacity: 0.7;
    }
}
h5{
    font-size: 20px;
    @media screen and (max-width: 700px) {
        font-size: 16px;
    }
}
#enlarge {
    height: 150px;
    width: 200px;
    
}
p{
    @media screen and (max-width: 700px){
        font-size: 14px;
    }
}

@media screen and (max-width: 400px) {
    section {
        grid-template-columns: 200px;
        margin-left: 80px;
    }
    div {
        height: 200px;
    }
    
    }
    #enlarge {
        height: 50px;
        width: 150px;
        position: relative;
        bottom: 30px;
    }
    #account {
        position: relative;
        bottom: 40px;
    }
    #download {
        position: relative;
        bottom: 20px;
    }
}
`;