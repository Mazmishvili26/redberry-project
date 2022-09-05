import React, { useEffect, useState } from 'react'
import './List.css'


// assets
import Vector from '../../assets/Vector.svg'
import { Link } from 'react-router-dom'

const url = 'https://pcfy.redberryinternship.ge/api/laptops?token=323762cb61990e16562a59d00dd70162'

const List = () => {

  const [getList,setGetList] = useState([]);

  useEffect(() => {
    const getList = async function () {
      const response = await fetch(url);
      const getData = await response.json();
      setGetList(getData.data);
    }

    getList();
  },[])

  console.log('listuka', getList)

  return (
    <section className='laptop-list-section'>

      <Link to='/'>
        <div className='prev-container'>
              
                <img src={Vector} className="vector-img"></img>
              
          </div>
        </Link>

        <div className='list-title'>
              <p>ჩანაწერების სია</p>
           </div>


      <div className='list-container'>
          <div className='card-wrapper'>
            {getList.map((list) => {
              console.log('raxdeba', list)
              return (
                <div className='card'>
                  <img src={'https://pcfy.redberryinternship.ge/' + list.laptop.image}></img>
                  <div className='card-info'>
                    <h3>{list.user.name} {list.user.surname}</h3>
                    <p>{list.laptop.name}</p>
                    <Link to={`/unique/${list.laptop.id}`}>
                      <button>მეტის ნახვა</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
      </div>

      
    </section>
  )
}

export default List