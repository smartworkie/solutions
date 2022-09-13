import React, {useState} from 'react';
import {Wrapper, Content} from './Faq.styles';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
const Faq = () => {
    const [hide, setHide] = useState(false);
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const handleHide = () => {
        setHide(!hide);
    }
    const handleHide1 = () => {
        setHide1(!hide1)
    }
    const handleHide2 = () => {
        setHide2(!hide2)
    }

    return (
<Wrapper>
<Content>
<div onClick = {handleHide} class = 'box' ><p>What Do We Represent?</p>{!hide? <FaAngleDown /> :<FaAngleUp />}</div>
{hide &&<p>We represent excellence in creation of word, pdf and excel documents as well as file conversion </p>}
<br/>
<div onClick = {handleHide1} class = 'box'><p>When Will My Job Get Done?</p>{!hide1? <FaAngleDown />: <FaAngleUp />}</div>
{hide1 &&<p>Depending on the volume of your work, it can take few hours to one week. If more time is needed, you will be contacted</p>}
<br/>
<div onClick = {handleHide2} class = 'box'><p>I Am Not Satisified With the Job Done. Can I Get Refunded?</p>
{!hide2? <FaAngleDown/>: <FaAngleUp/>}</div>
{hide2 && <p >Definitely as much as you have valid reasons for this.</p>}
<br/>
</Content>

</Wrapper>
    )
};
export default Faq;
