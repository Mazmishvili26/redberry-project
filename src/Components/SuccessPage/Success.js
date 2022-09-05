import React from 'react'
import './Success.css'
import { useGlobalContext } from '../useContext'

// asset

import success from '../../assets/Frame.svg'
import { Link } from 'react-router-dom'

const Success = () => {

  const {closeModal} = useGlobalContext();

  return (
    <section className='modal-section'>
      <div className='modal-card'>
        <div className='modal-img'>
          <img src={success}></img>
          <p>ჩანაწერი დამატებულია</p>
          <Link to='/list'>
            <button onClick={closeModal}>სიაში გადაყვანა</button>
          </Link>
          <Link to='/'>
            <h4 onClick={closeModal}>მთავარი</h4>
          </Link>
        
        </div>
      </div>
    </section>
  )
}

export default Success