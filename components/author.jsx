import React from 'react'

const author = ({ name, img, designation }) => {
  if(!img && !name) return <></>
  return (
    <div className="flex gap-3 mt-5 items-center">
        <img src={img} className="w-10 h-10 rounded-full" />
        <div className="block">
            <h3 className="font-bold text-gray-800 text-md">{name}</h3>
            <p className="text-gray-700 text-md">{designation}</p>
        </div>
    </div>
  )
}

export default author