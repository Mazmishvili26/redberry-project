import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Unique.css'
import { useGlobalContext } from '../useContext'

// assets

import Vector from '../../assets/Vector.svg'
import Line from '../../assets/Line 17.png'
import smallLine from '../../assets/Line 19.png'

const Unique = () => {

  const [getUniqueInfo,setGetUniqueInfo] = useState([]);
  const [loading,setLoading] = useState(true);

  const params = useParams()

  const {teams , positions , getBrand} = useGlobalContext();

  useEffect(() => {
    const getInfo = async function () {
      try {
        const response  = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${params.laptopId}?token=323762cb61990e16562a59d00dd70162`);
        const getData = await response.json();
        setGetUniqueInfo(getData.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
    getInfo();
  },[])

  console.log('getInfo', getUniqueInfo);

 
  if(loading){
    return <h1>Loading...</h1>
  }


  if(getUniqueInfo.laptop.state === 'new'){
    getUniqueInfo.laptop.state = 'ახალი'
}else if(getUniqueInfo.laptop.state === 'used'){
  getUniqueInfo.laptop.state = 'მეორადი'
}

  return (
    <section className='unique-section'>

        <Link to='/list'>
          <div className='prev-container'>
              <img src={Vector} className="vector-img"></img>
          </div>
        </Link>

      <div className='unique-title'>
        <p>ლეპტოპის ინფო</p>
      </div>


      <div className='unique-container'>

          <div className='first-section'>
            <div>
              <img src={'https://pcfy.redberryinternship.ge/' + getUniqueInfo.laptop.image}></img>
            </div>

            <div className='first-section-desc'>
              <p>{`სახელი : ${getUniqueInfo.user.name} ${getUniqueInfo.user.surname }`}</p>
              
              <p>
              {teams.map((team) => {
                if(team.id == getUniqueInfo.user.team_id){
                  return <p>{`თიმი : ${team.name}`}</p>
                }
              })}
              </p>

              <p>
              {positions.map((position) => {
                if(position.id == getUniqueInfo.user.position_id){
                  return <p>{`პოზიცია : ${position.name}`}</p>
                }
              })}
              </p>

              <p>{`მეილი: ${getUniqueInfo.user.email}`}</p>


              <p>{`ტელ.ნომერი: ${getUniqueInfo.user.phone_number}`}</p>
        
            </div>
          </div>

          <div className='line-container3'>
            <img src={Line}></img>
          </div>
          
          <div className='second-section'>
              <div className='left-info'>
                <p>{`ლეპტოპის სახელი: ${getUniqueInfo.laptop.name}`}</p>
                <p>
                  {getBrand.map((brand) => {
                    if(brand.id == getUniqueInfo.laptop.brand_id){
                      return <p>{`ლეპტოპის ბრენდი : ${brand.name}`}</p>
                    }
                  })}
                </p>

                <p>{`RAM: ${getUniqueInfo.laptop.ram}`}</p>
                <p>{`მეხსიერების ტიპი: ${getUniqueInfo.laptop.hard_drive_type}`}</p>
              </div>
              <div className='right-info'>
                <p>{`CPU : ${getUniqueInfo.laptop.cpu.name}`}</p>
                <p>{`CPU-ს ბირთვი : ${getUniqueInfo.laptop.cpu.cores}`}</p>
                <p>{`CPU-ს ნაკადი : ${getUniqueInfo.laptop.cpu.threads}`}</p>
              </div>
          </div>

          <div className='line-container4'>
            <img src={Line}></img>
          </div>

          <div className='third-section'>
            <div className='left-info'>
              <p>
                {`ლეპტოპის მდგომარეობა : ${getUniqueInfo.laptop.state}`}
              </p>

              <p>
                {`ლეპტოპის ფასი: ${getUniqueInfo.laptop.price}`}
              </p>
            </div>

            <div className='right-info'>
              <p>{`შეძენის რიცხვი : ${getUniqueInfo.laptop.purchase_date}`}</p>
            </div>
          </div>

      </div>

    </section>
  )
}

export default Unique