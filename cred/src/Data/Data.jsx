import React, { createContext, useState } from 'react'

const dataProvider=createContext()

function Data({children}) {
    const data= [
        {name:"Soman",course:"Java",fees:20000},
        {name:"Sasi",course:"PHP",fees:10000},
        {name:"Rakavan",course:"Python",fees:25000},
        {name:"Sasi",course:"PHP",fees:30000},]

    const [data1, setdata1] = useState(data)
    
        
  return (
    <div>
        <dataProvider.Provider value={{data1,setdata1}}>
            {children}
        </dataProvider.Provider>
    </div>
  )
  }
  export default Data
  export {dataProvider}