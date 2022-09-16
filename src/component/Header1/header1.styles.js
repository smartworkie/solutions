import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: white;
height: 50px;
@media screen and (max-width: 768px) {
    background-color: white;
    height: 45px;
}
`;

export const Content = styled.div`
    a{
        text-decoration: none;
        color: inherit;
    }
    .support {
       padding-right: 40px;
       font-size: 16px;
    }
    .button{
        background-color: orange;
        font-size: 18px;
        border: none;
        cursor: pointer;
        :hover{
            opacity: 0.6;
            background-color: white;
        }
    }
   
   .angle{
   
   }
 .intel {
    display: flex;
    flex-direction: row;
    justify-content: center;
  
   @media screen and (max-width: 768px) {
       display: none;
       margin: 0 auto;
       position: relative;
       top: -20px;
       }
}

.padding {
   font-size: 20px;
    background-color: orange;
    display: flex;
    padding: 5px 10px;
    margin: 5px 30px;
    border: 1px solid orange;
    border-radius: 20%;
    text-align: center;
    :hover{
        opacity: 0.6;
        background-color: white;
    }
    
@media screen and (max-width: 768px) {
     :hover {
        opacity: 2.0;
        background-color: blue;
        color: grey;
        
    }
    width: 200px;
    height: 30px;
    font-size: 14px;
    font-family: Tahoma;
    font-weight: bold;
    background-color: white;
    border: 0.1px none silver;
    border-radius: 0;
    display: block;
    padding: 5px;
    margin: 0px 0px;
}}}

.show {
display: flex;
flex-diretion: row;
justify-content: center;

@media screen  and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 2px;
    position: absolute;
}
}

.bars {
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        height: 16px;
        }
    }
    
#bar {
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        height: 26px;
        margin: 5px 9px;
        }
}



`;

export const button = styled.button`
display: none;
`;