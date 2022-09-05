import React, { useEffect, useState } from 'react'
import './Laptop.css'
import Uploadphoto from './Uploadphoto'
import { useGlobalContext } from '../useContext';
import Modal from '../SuccessPage/Success'

// assets
import Vector from '../../assets/Vector.svg'
import Arrow from '../../assets/Arrow.svg'
import Line from '../../assets/Line 15.svg'
import { Link } from 'react-router-dom';


// json urls

const cpuURL = 'https://pcfy.redberryinternship.ge/api/cpus'

const Laptop = ({prevPage , formik }) => {
  
  const [getCPU,setGetCPU] = useState([]);

  const {handleLaptopBrandID , handleImage , getBrand , isModalOpen , openModal , closeModal} = useGlobalContext();



  useEffect(() => {
    const getCPUData = async function () {
      try {
        const response = await fetch(cpuURL);
        const getData = await response.json();
        setGetCPU(getData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCPUData();
  },[])



  // for formik radio 

  const handleRadioButtons = e => formik.values.memory = e.target.value

  const handleStateButtons = e => formik.values.laptop_state = e.target.value


    return (
        <section className='laptop-section'>
        
        
        <div className='prev-container' onClick={prevPage}>
            <img src={Vector} className="vector-img"></img>
        </div>
      

        <div className='tabs-container'>
          
          <button className='employee-info2' onClick={prevPage}>
            თანამშრომლის ინფო
            
            {/* <NavLink to='/employe' className={({isActive}) => isActive && 'employee-active'}></NavLink> */}
          </button>

          <button className='about-laptop'>
            ლეპტოპის მახასიათებლები
            {/* <NavLink to='/laptop' className={({isActive}) => isActive && 'employee-active'}>ლეპტოპის მახასიათებლები</NavLink> */}
            <small>2/2</small>
          </button>

        </div>

        <div className='laptop-info-container'>

          <div className='laptop-info-wrapper'>
                <div className='upload-photo'>
                  <Uploadphoto formik={formik} handleImage={handleImage}/>
                </div>

                {/* laptop-brand-div */}
                <div className='laptop-brand'>
                  <div>
                    <label htmlFor='laptopName'>ლეპტოპის სახელი</label> <br></br>
                    <input 
                    type='text' 
                    placeholder='HP'
                    id='laptopName'
                    name='laptopName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.laptopName}
                    ></input> <br></br>

                    {formik.touched.laptopName && formik.errors.laptopName ? (
                      <div className='yup-error'>{formik.errors.laptopName}</div>
                    ) : <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</small>}

                    
                  </div>

                  <div className='laptop-brand-dropbox' onChange={(e) => handleLaptopBrandID(e)}>
                    <select
                      id='laptop_brand_id'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.laptop_brand_id}
                    >
                      <option option selected disabled>ლეპტოპის ბრენდი</option>
                      {getBrand.map((brand) => {
                        const {id,name} = brand;
                        return (
                          <option 
                          key={id} 
                          value={id}
                          >{name}</option>
                        )
                      })}
                    </select>
                    <img src={Arrow} className="laptop-arrow"></img>
                  </div>
                  
                </div>

                {/* laptop-brand-div */}


                <div className='line-container'>
                  <img src={Line}></img>
                </div>
                
                {/* laptop-cpu-div */}

                <div className='laptop-cpu'>

                  <div className='laptop-cpu-dropbox'>
                    <select
                      id='laptop_cpu'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.laptop_cpu}
                    >
                      <option option selected disabled>CPU</option>
                      {getCPU.map((cpu) => {
                        const {id,name} = cpu;
                        return (
                          <option key={id}>{name}</option>
                        )
                      })}
                    </select>
                    <img src={Arrow} className="cpu-arrow"></img>
                  </div>
                  
                  <div className='cpu-core'>
                    <label htmlFor='cpuCore'>CPU-ს ბირთვი</label> <br></br>
                    <input 
                    type='text' 
                    id='cpuCore' 
                    name='cpuCore' 
                    placeholder='14'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpuCore}
                    ></input> <br></br>

                    {formik.touched.cpuCore && formik.errors.cpuCore ? (
                      <div className='yup-error'>{formik.errors.cpuCore}</div>
                    ) : <small>მხოლოდ ციფრები</small>}

                  </div>

                  <div className='cpu-z'>
                    <label htmlFor='cpuFlow'>CPU-ს ნაკადი</label> <br></br>
                    <input 
                    type='text' 
                    id='cpuFlow' 
                    name='cpuFlow' 
                    placeholder='365'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpuFlow}
                    ></input> <br></br>

                    {formik.touched.cpuFlow && formik.errors.cpuFlow ? (
                      <div className='yup-error'>{formik.errors.cpuFlow}</div>
                    ) : <small>მხოლოდ ციფრები</small>}

                    
                  </div>

                </div>

                {/* laptop-cpu-div */}

                
                <div className='laptop-ram'>

                  <div className='laptop-ram-input'>
                    <label htmlFor='laptopRam'>ლეპტოპის RAM (GB)</label> <br></br>
                    <input 
                    type='number' 
                    id='laptopRam' 
                    name='laptopRam'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.laptopRam}
                    ></input> <br></br>

                    {formik.touched.laptopRam && formik.errors.laptopRam ? (
                      <div className='yup-error'>{formik.errors.laptopRam}</div>
                    ) : <small>მხოლოდ ციფრები</small>}

                    
                  </div>
                  
                  <div className='ram-checkbox-wrapper'>
                    <div>
                      <h5>მეხსიერების ტიპი</h5>
                    </div>

                    <div className='ram-wrapper'>
      
                      <div className='ram-ssd'>
                        <input
                        type='radio' 
                        id='memory2' 
                        name='memory'
                        onChange={e => handleRadioButtons(e)}
                        value='SSD'
      
                        ></input>
                        <label htmlFor='ssd'>SSD</label>
                      </div>
                      
                      <div className='ram-hdd'>
                        <input
                        type='radio' 
                        id='memory' 
                        name='memory'
                        onChange={e => handleRadioButtons(e)}
                        value="HDD"

                        ></input>

                    {formik.touched.memory && formik.errors.memory ? (
                      <div className='yup-error'>{formik.errors.memory}</div>
                    ) : null}
                        <label htmlFor='hdd'>HDD</label>
                      </div>
                    </div>

                  </div>

                </div>

                {/* laptop-cpu-div */}

                <div className='line2-container'>
                  <img src={Line}></img>
                </div>

                {/* laptop-buy-div */}
                <div className='laptop-buy-date'>
                    <div>
                      <label htmlFor='date'>შეძენის რიცხვი (არჩევითი)</label> <br></br>
                      <input 
                      type='date' 
                      id='date' 
                      name='date'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                      ></input>

                    {formik.touched.date && formik.errors.date ? (
                      <div className='yup-error'>{formik.errors.date}</div>
                    ) : null}
                    </div>

                    <div className='laptop-price'>
                      <label htmlFor='laptopPrice'>ლეპტოპის ფასი</label> <br></br>
                      <input 
                      type='number' 
                      id='laptopPrice' 
                      name='laptopPrice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.laptopPrice}
                      ></input> <br></br>
                      {formik.touched.laptopPrice && formik.errors.laptopPrice ? (
                      <div className='yup-error'>{formik.errors.laptopPrice}</div>
                    ) : <small>მხოლოდ ციფრები</small>}

                      
                    </div>
                </div>

                {/* laptop-buy-div */}


                {/* laptop-health */}


                <div className='laptop-health'>
                  <div>
                    <h3>ლეპტოპის მდგომარეობა</h3>
                  </div>
                  <div className='laptop-health-wrapper'>
                    <div className='new-laptop'>
                      <input 
                      type='radio' 
                      id='laptop_state2' 
                      name='laptop_state'
                      onChange={e => handleStateButtons(e)}
                      value="new"
                      ></input>
                      <label htmlFor='new'>ახალი</label>
                    </div>
                    
                    <div className='old-laptop'>
                      <input 
                      type='radio' 
                      id='laptop_state' 
                      name='laptop_state'
                      onChange={e => handleStateButtons(e)}
                      value="used"
                      ></input>
                      <label htmlFor='old'>მეორადი</label>
                    </div>
                  </div>
                  

                </div>

                {/* laptop-health */}


                <div className='back-container'>
                  <span className='back-btn' onClick={prevPage}>
                    უკან
                  </span>

                  <div className='btn-cont'>
                    
  
                
                  <button type='submit' onClick={openModal}>დამახსოვრება</button>
              
                  </div>

                </div>
              

          </div>

          {isModalOpen && <Modal/> }
        

        </div>

    </section>
    )
   
  }


export default Laptop