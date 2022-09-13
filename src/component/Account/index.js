import React, {useState, useContext} from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
import {Context} from '../../context';

//Styles
import {Wrapper, Content} from './Account.styles';



const Account = () => {
const [multiplefiles, setMultipleFiles] = useState('');
const [task, setTask] = useState(true);
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);
const [title, setTitle] = useState('')
const [text, setText] = useState('');
const [user] = useContext(Context);
const navigate = useNavigate();


if (!user) {
 return   navigate('/login');
}
const handleChange = (e) => {
setMultipleFiles(e.target.files)
}
const handleTask = () => {
    setTask(true);
}
const handleHistory = () => {
    setTask(false);
}

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(multiplefiles);
 const formData = new FormData();
 formData.append('title', title)
 formData.append('text', text)
 for (let i=0; i<multiplefiles.length; i++){
    formData.append('files', multiplefiles[i])    
 }

try {
    const config = {
        headers: {
            "Content-type":  "multipart/form-data"
        }
    }
   
    const {data} = await axios.post(
        "http://localhost:3001/api/users/upload",
        formData, config
       
    )
    console.log(data);
    setSuccess(true)
   setTimeout(() =>navigate('/payment'), 1000);
   } catch (error) {
    setError(error.response.data.message);
    
}
}
return (
 <Wrapper>
    {user &&
    <Content>
    <h2 id='dashboard'>Dashboard</h2>
    <div class = 'underline'></div>
    <ul class = 'btnHolder'>
         <button class ='btn' onClick = {handleTask} id =  {task? 'active':''}><li className='btnTask'>Task</li></button>
         <button class ='btn' onClick ={handleHistory} id = {!task?'active':''}><li>Transaction History</li></button>
         </ul>
    <p>{error}</p>
    
    {success && <p> Uploaded Successfully!  </p>}
 {task &&  <form class ='form' onSubmit={handleSubmit}>
    
  <label for = 'task'>Task to Perform</label><br/>
    <select name='task' id = 'task' placeholoder='Choose an Option'
     onChange={(e)=> {setTitle(e.target.value)}} required>
    <option>Choose An Option!</option>
    <option >Create Word Documents</option>
    <option >Create Excel Documents</option>
    <option>Create PDF Documents</option>
    <option >Create PowerPoint Presentation</option>
    <option >Convert Files</option>
    </select>

    <p>Upload Materials to Work With (images, word, pdf, ppt or xsl)</p>
    <input 
    multiple
    type= 'file'
    name='image'
    id='image'
    required
    onChange={handleChange}
    /><br/><br/>
    <label for = 'text'>Additional Information: </label><br/>
    <input type = 'text' id = 'text' value = {text} onChange = {(e)=>setText(e.target.value)}/><br/><br/>
    <button
        type='submit'
        name='submit'
        id='submit'>Submit</button>
    

    </form>
}
 {!task &&  <h2 className = 'form'>No Transaction History</h2>}
       </Content>}
       
</Wrapper> 


);
};

export default Account;