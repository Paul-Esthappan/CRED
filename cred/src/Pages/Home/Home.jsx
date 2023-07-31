import React, {useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dataProvider } from '../../Data/Data';
import './Home.css'

function Home() {

  const items=useContext(dataProvider);
  const {data1,setdata1}=items

  let history=useNavigate()

  const handleDelete =(name)=>{
    var index=data1.map((id)=>{
      return id.name
    
    })
    .indexOf(name)
    data1.splice(index,1)
    history('/')
  }
  

  return (
    <div>
      <h1>CRUD</h1>
      <p>CRAETE READ UPDATE DELETE</p>
    <div className='table'>
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Fees</th>
                  </tr>
                </thead>
                <tbody>
                      {
                        data1.map((dis,index)=>{
                          return(
                            <tr>
                              <td className='item'>{dis.name}</td>
                              <td className='item'>{dis.course}</td>
                              <td className='item'>{dis.fees}</td>
                              <td>
                                <Link to={`/view/${index}`} key={index}>
                                  <button className='button' >View</button>
                                </Link>
                              </td>
                              <td>
                                <Link to={`/edit/${index}`} key={index}>
                                  <button className='button'>Edit</button>
                                </Link>
                              </td>
                              <td>
                                <button className='button' onClick={()=>handleDelete((dis.name))}>Delete</button>
                              </td>
                            </tr>  
                          ) })   
                      }  
                </tbody>
            </table>
            </div>
            <div className='addbutton'>
            <Link to="./create" >
                     <button className='additem'>Additem</button>
                     </Link></div>     
  
  </div>
  )
}

export default Home
