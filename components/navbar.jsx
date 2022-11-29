import React from 'react'
import {ImFacebook, ImTwitter, ImYoutube} from 'react-icons/im'

const navbar = () => {
  return (
    <nav className='flex md:px-[200px] px-10 py-5 justify-between items-center'>
        <h3 className="font-bold text-lg">Bacaa</h3>
        <div className="flex gap-5">
            <a href=""><ImFacebook color='#888' /></a>
            <a href=""><ImTwitter color='#888' /></a>
            <a href=""><ImYoutube color='#888' /></a>
        </div>
    </nav>
  )
}

export default navbar