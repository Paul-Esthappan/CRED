import React, { useContext } from 'react'
import { dataProvider } from '../../Data/Data';
import { Link, useParams } from 'react-router-dom'
import './View.css'


function View() {

  let {index} = useParams();
  let indexu=index
  
  const items=useContext(dataProvider);
  const {data1,setdata1}=items
  
  const filteredItems = data1.filter((item,index) => index == indexu);
  
  return (
    <div>

      <h1>View Details</h1>
      {
        filteredItems.map((dis,index)=>{
          return(
            <>
            <h2>Name : {dis.name}</h2>
            <h2>Course : {dis.course}</h2>
            <h2>Fees : {dis.fees}</h2>
            </>
          )})
      }

            <Link to='/'>
            <button >Home</button>
            </Link>

    </div>
  )
}

export default View