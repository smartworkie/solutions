import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: white;
`;
export const Button = styled.button`
height: 5px;
`;

export const Content = styled.div`
#dashboard{
font-size: 30px;
font-family: Times New Roman;
}
.form{
    background-color: #add8e6;
    width: 40%;
    border-radius: 5%;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
      }
.underline{
    width: 4rem;
    height: 0.25rem;
    margin-bottom: 0px;
    margin-top: -20px;
    background: blue;
    margin-left: auto;
    margin-right: auto;
}

#active{
background: #d4d4d4;
border-radius: 20px;
}
li{
    display:inline;
    padding: 10px;
}
.btn {
    background: transparent;
    font-size: 20px;
    margin: 20px 80px;
    color: orange;
    border-color: transparent;
    cursor: pointer;
    outline-color: hsl(210,36%,96%);
}

.btn:hover{
    background-color: grey;
    color: orange;
   
}

#text {
    height: 100px;
    width: 400px;
   margin-top: 2px;
}
#task, #submit{
    border-radius: 5%;
    border: none;
    width: 200px;
    height: 30px;
    background-color: grey;
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }
   }
`;