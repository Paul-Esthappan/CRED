import React, {useContext, useState } from 'react'
import { dataProvider } from '../../Data/Data';
import { useNavigate } from 'react-router-dom'

function Create() {

  const items=useContext(dataProvider);
  const {data1,setdata1}=items

    const [name, setname] = useState("")
    const [course, setcourse] = useState("")
    const [fees, setfees] = useState("")
    let history = useNavigate()
 
    const handlsubmit =(e)=>{
        e.preventDefault();
        
        let f = 5
        let a=name
        let b=course
        let c=fees

        data1.push({ id : f, name : a, course : b, fees : c})
      
        history("/")
        
    }

  return (
    <div>

        <form>
        <label>ID :</label>
        <br />
        <label>Name : </label>
        <input type="text" name='name'  onChange={(e)=>setname(e.target.value) }/>
        <br />
        <label>Course : </label>
        <input type="text" name='course'  onChange={(e)=>setcourse(e.target.value) } />
        <br />
        <label>Fees : </label>
        <input type="text" onChange={(e)=>setfees(e.target.value) }/>
        <br />
        <button onClick={(e)=>handlsubmit(e)} type='submit'>Add</button>
        </form>

        
        </div>
  )
}

export default Create