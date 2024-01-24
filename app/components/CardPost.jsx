import React from 'react'

const Card = ({title, body}) => {
  return (
    <div className='bg-fuchsia-500 p-5 rounded-lg'>
      <p className='text-white'>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default Card