import React from 'react'
import './ResumePage.scss'
import Navbar from '../../Navbar/NavbarPage'
import Resume1 from'../../assets/images/Resume1.png';
import Resume2 from '../../assets/images/Resume2.png'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/ABLogo.png'
 

function ResumePage() {
  return (
    <div>
            <div className="outterNav-div">
      
      <div className="innerNav-div">
        <div className="img-div">
          <a href="/">
          <img className="mainLogo" src={Logo} />
          </a>
        </div>
        <div className="quicktap">

          <Link to= '/contact' className="navbarTags">contact</Link>
        </div>
    </div>
  </div>
<div className='resumeOutter-div'>
<div className='resumeInner-div'>
    <div className='images'>
<img className='resumeIMG' src={Resume1}/>
<img className='resumeIMG' src={Resume2}/>
</div>

</div>


    </div>
    </div>
  )
}

export default ResumePage