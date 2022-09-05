import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'


// assets
import Logo from '../../assets/LOGO-02 1.svg'
import Layer1 from '../../assets/Layer1.svg'
import Group from '../../assets/Group.svg'

const Main = () => {
  return (
    <section className='main-section'>

      <div className='photo-container'>
        <img src={Logo} className="logo"></img>
        <img src={Layer1} className="welcome-photo"></img>
        <img src={Group} className="resp-photo"></img>
      </div>
      
      <div className='btn-container'>

        <Link to='/formik'>
          <button>ჩანაწერის დამატება</button>
        </Link>
        
        <Link to='/list'>
          <button>ჩანაწერების სია</button>
        </Link>
      </div>

    </section>
  )
}

export default Main