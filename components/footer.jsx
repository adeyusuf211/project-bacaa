import React from 'react'
import {ImFacebook, ImTwitter, ImYoutube} from 'react-icons/im'
import Newsletter from './newsletter';

const footer = () => {
  const background = {
    backgroundImage: "url('/images/footer.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
  return (
    <footer style={background}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <a href="">
              <ImFacebook color="#888" />
            </a>
            <a href="">
              <ImTwitter color="#888" />
            </a>
            <a href="">
              <ImYoutube color="#888" />
            </a>
          </div>
          <p className="py-5 text-gray-400">Copyright &copy; 2022 | Ade Yusuf</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default footer