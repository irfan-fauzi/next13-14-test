import Image from 'next/image'
import React from 'react'

const CardGalery = ({url, title}) => {
  return (
    <div className='border border-red-500'>
      <Image src={url} width={200} height={200} alt="photo"/>
      <p>{title}</p>
    </div>
  )
}

export default CardGalery