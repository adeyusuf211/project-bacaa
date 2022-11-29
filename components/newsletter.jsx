import React from 'react'

const newsletter = () => {
  return (
    <section className="bg-gray-50 mt-20">
        <div className="container mx-auto md:px-20 py-16 text-center">
            <h1 className="font-bold text-gray-800 text-3xl">Subscribe Newsletter</h1>
            <div className="py-5">
                <input type="text" className='shadow border rounded w-9/12 p-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Enter Your Email' />
            </div>
            <button className='bg-red-500 px-20 py-4 text-white rounded-full text-xl'>Subscribe</button>
        </div>
    </section>
  )
}

export default newsletter