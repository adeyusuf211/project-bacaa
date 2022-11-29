import React from 'react'
import Image from 'next/image'

const error = () => {
  return (
    <div className="text-center py-10 flex flex-col justify-center items-center">
        <h1 className="text-orange-500 text-4xl font-bold py-10">Something Went     Wrong
        </h1>
        <Image src={'/images/not_found.png'} width={400} height={400} />
    </div>
  )
}

export default error