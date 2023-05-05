import React from 'react'

const NewAppetizers = ({data,cardIndex}) => {
  return (
    <div>
  
  {data[cardIndex].map((item)=>
  <p>{item.title}</p>
  )}    
    </div>
  )
}

export default NewAppetizers
