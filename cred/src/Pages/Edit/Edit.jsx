import React, {useContext, useState } from 'react'
import './Edit.css'
import { dataProvider } from '../../Data/Data';
import { useNavigate, useParams } from 'react-router-dom'




function Edit() {

  const items=useContext(dataProvider);
  const {data1,setdata1}=items

  let {index} = useParams();
  let indexu=index
  
  const filteredItems = data1.filter((item,index) => index == indexu);

    const [name, setname] = useState("")
    const [course, setcourse] = useState("")
    const [fees, setfees] = useState("")
    let history = useNavigate()
 
    const handlsubmit =(e)=>{
        e.preventDefault();
        const updatedData = [...data1];
        
        updatedData[indexu].name = name;
        updatedData[indexu].course = course;
        updatedData[indexu].fees = fees;

        setdata1(updatedData);
      
        history("/")
        
    }

  return (
    <div>
        <h1>Edit Details</h1>
      
        <form>
        {
        filteredItems.map((dis,index)=>{
          return(
            <>
        <br />
        <label className='leftlabel'>Name</label><label className='middle'>:</label>
        <input type="text" name='name' placeholder={dis.name}  onChange={(e)=>setname(e.target.value) }/>
        <br />
        <label className='leftlabel'>Course</label><label className='middle'>:</label>
        <input type="text" name='course' placeholder={dis.course}  onChange={(e)=>setcourse(e.target.value) } />
        <br />
        <label className='leftlabel'>Fees</label><label className='middle'>:</label>
        <input type="text" placeholder={dis.fees} onChange={(e)=>setfees(e.target.value) }/>
        <br />
        <button onClick={(e)=>handlsubmit(e)} type='submit'>Add</button>
        
            </>
          )})
      }
        
        </form>

        
        </div>
  )
}

export default Edit