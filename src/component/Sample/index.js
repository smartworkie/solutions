import React from 'react';

import {Wrapper, Content} from './Sample.styles';
import sample1 from '../../images/sample1.PNG';
import sample2 from '../../images/sample2.PNG';
const Sample = () => (
    
<Wrapper>
<Content>
    <section>
    <div><h3>WORD DOCUMENTS</h3>
    <img src={sample1} alt='sample1'/><br/><br/>
    <img src={sample2} alt='sample2'/>
    </div>
    <div><h3>PDF DOCUMENTS</h3></div>
    <div><h3>EXCEL DOCUMENTS</h3></div>
    <div><h3>POWERPOINT DOCUMENTS</h3></div>
    </section>
    <div>
        <p>View More!</p>
    </div>
</Content>
</Wrapper>
)

export default Sample;