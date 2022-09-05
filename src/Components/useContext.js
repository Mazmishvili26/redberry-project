import React, { useContext , useEffect , useState } from "react";



const url = 'https://pcfy.redberryinternship.ge/api/teams'

const url2 = 'https://pcfy.redberryinternship.ge/api/positions'


const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [loading,setLoading] = useState(true);
    const [teams,setTeams] = useState([]);
    const [positions,setPositions] = useState([]);
    const [teamID,setTeamID] = useState('');
    const [positionID,setPositionID] = useState('');

  useEffect(() => {
    const getTeams = async function () {
      try {
        const response = await fetch(url);
        const getData = await response.json();
        setTeams(await getData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getTeams();
  },[])

  const handleTeam = (e) => {
    const getTeamsID = e.target.value;
    console.log(getTeamsID);
    setTeamID(getTeamsID);
  }



  useEffect(() => {
    const getPositions = async function () {
      try {
        const response = await fetch(url2);
        const getData = await response.json();
        setPositions(await getData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPositions();
  },[teamID])

  const handlePosition = (e) => {
    const getPositionID = e.target.value;
    console.log(getPositionID);
    setPositionID(getPositionID);
  }



  // laptopBrandID

  const [laptopBrandID,setLaptopBrandID] = useState('');
  

  const handleLaptopBrandID = (e) => {
    const getLaptopBrandID = e.target.value;
    setLaptopBrandID(getLaptopBrandID);
  }



  // getBrand

  const brandURL = 'https://pcfy.redberryinternship.ge/api/brands'

  const [getBrand,setGetBrand] = useState([]);

  useEffect(() =>{
    const getBrandData = async function () {
      try {
        const response = await fetch(brandURL);
        const getData = await response.json();
        setGetBrand(getData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBrandData();
  },[])



  // showModal


  const [isModalOpen,setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }



  return (
    <AppContext.Provider value={{ 
      teams, 
      positions, 
      teamID, 
      positionID , 
      loading , 
      handleTeam, 
      handlePosition,
      laptopBrandID,
      handleLaptopBrandID,
      getBrand,
      openModal,
      closeModal,
      isModalOpen
       }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}