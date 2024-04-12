import React from 'react'

export default function ListComponent(props) {
  return (
    <div className='flex items-center justify-start flex-row mt-5'>
      <img src={props.img} className="mr-4 list-img" /> {/* Add width of 50px */}
      <li>{props.text}</li>
    </div>

        
  
    
  )
}
