import React, {useState, useEffect} from 'react'
import './Employe.css'

import Laptop from '../LaptopInfo/Laptop';
import { Link , NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';


import FormComponent from './Formik'


// assets

import Vector from '../../assets/Vector.svg'
import Arrow from '../../assets/Arrow.svg'
import LOGO from '../../assets/LOGO-10 2.svg'
import axios from 'axios';

import {useGlobalContext} from '../useContext'


// json url

const url = 'https://pcfy.redberryinternship.ge/api/teams'

const url2 = 'https://pcfy.redberryinternship.ge/api/positions'

const Employee = ({formik , nextPage}) => {

  const {loading,teamID, handleTeam, handlePosition , teams, positions} = useGlobalContext();


  if(loading){
    return <h1>Loading...</h1>
  }



  return (
    <section className='employee_section'>

          <Link to='/'>
              <div className='prev-container'>
                <img src={Vector} className="vector-img"></img>
              </div>
          </Link>


          <div className='tabs-container'>
              <button className='employee-info'>
                თანამშრომლის ინფო
                {/* <NavLink to='/employe' className={({isActive}) => isActive && 'employee-active'}>თანამშრომლის ინფო</NavLink> */}
                <small className='employee-counter'>1/2</small>
              </button>
  
              <button className='laptop-info' onClick={nextPage}>
                ლეპტოპის მახასიათებლები
                {/* <NavLink to='/laptop' className={({isActive}) => isActive && 'employee-active'}>
                  ლეპტოპის მახასიათებლები
                </NavLink> */}
              </button>
          </div>

    {/* in here form */}
      <div className='form-container'>
        
            <div className='user-main-info'>

              <div className={formik.touched.firstName && formik.errors.firstName ? 'input-error' : null}>
                <label htmlFor='firstName'>სახელი</label> <br></br>

                <input
                type='text' 
                placeholder='გრიშა' 
                id='firstName' 
                name='firstName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                ></input> <br></br>

                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='yup-error'>{formik.errors.firstName}</div>
                  ) : <small>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>}
              </div>

              <div className={formik.touched.lastName && formik.errors.lastName ? 'input-error' : null}>
                <label htmlFor='lastName'>გვარი</label> <br></br>
                <input 
                type='text' 
                placeholder='ბაგრატიონი' 
                id='lastName' 
                name='lastName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                ></input> <br></br>

                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='yup-error'>{formik.errors.lastName}</div>
                  ) : <small>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>}
              </div>

            </div>
            

            <div className='user-job-info'>
              <div className='select' onChange={(e) => handleTeam(e)}>
                <select 
                  className={formik.touched.Team && formik.errors.Team ? 'select-error' : null}
                  id="Team"

                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Team}

                  >
                  <option selected disabled>თიმი</option>

                  {teams.map((team,index) => (
                    <option 
                    key={index} 
                    value={team.id}
                    >{team.name}</option>
                  ))}

                </select>
                <img src={Arrow} className="select-arrow"></img>
              </div>
              
              <div className='select2' onChange={(e) => handlePosition(e)}>
                <select 
                id='Position'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Position}
                >
                  <option selected disabled>პოზიცია</option>
                  {positions.map((position,index) => {
                    
                    if(teamID == position.team_id){
                      return <option key={index} value={position.id}>{position.name}</option>
                    }
                  })}
                </select>
                <img src={Arrow} className="select-arrow"></img>
              </div>

            </div>
            

            <div className='user-contact-info'>
                <div className={formik.touched.email && formik.errors.email ? 'input-error' : null}>
                  <label htmlFor='email'>მეილი</label> <br></br>
                  <input 
                  type='email' 
                  id='email' 
                  name='email' 
                  placeholder='grish663@redberry.ge'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  ></input> <br></br>

                  {formik.touched.email && formik.errors.email ? (
                    <div className='yup-error'>{formik.errors.email}</div>
                  ) : <small>უნდა მთავრდებოდეს @redberry.ge-ით</small>}

                </div>

                <div className={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'input-error' : null}>
                  <label htmlFor='phoneNumber'>ტელეფონის ნომერი</label> <br></br>
                  <input 
                  type='text' 
                  id='phoneNumber' 
                  name='phoneNumber' 
                  placeholder='+955 598 00 07 01'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  ></input> <br></br>

                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className='yup-error'>{formik.errors.phoneNumber}</div>
                  ) : <small className='phone-non-resp'>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>}
                  <small className='phone-resp'>ქართული მობ-ნომრის ფორმატი</small>
                </div>
            </div>


            <button type='submit' className='submit-btn' onClick={nextPage}>
              შემდეგი
              {/* <Link  onClick={showComponent}>შემდეგი</Link> */}
            </button>
      </div>

      <img src={LOGO} className="employee-logo"></img>

  </section>
  )
}

export default Employee