import { useFormik} from 'formik';
import React, { useState , useEffect } from 'react'
import * as Yup from 'yup';

import Employee from './Employee';
import Laptop from '../LaptopInfo/Laptop'

import axios from 'axios';
import { useGlobalContext } from '../useContext';


const Formik = () => {

  const {teamID , positionID , laptopBrandID , image} = useGlobalContext();

  // console.log('poziciato', positionID)

  const nameRegex = /[\u10A0-\u10FF]/

  const phoneRegex = /^(\+?995)?(79\d{7}|5\d{8})$/

  const requiredErrorMessage = "This field is required";

  const digitsOnly = (value) => /^\d+$/.test(value)



  const formikRef = React.useRef();

  formikRef.current  = useFormik({
    initialValues: {
        termsOfService: false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber : '',
        Team: '',
        Position: '',

        fileUpload : null,
        laptop_brand_id :'',
        laptop_cpu :'',

        laptopName: '',
        cpuCore : '',
        cpuFlow: '',
        laptopRam : '',
        memory: '',
        laptop_state : '',

        date:'',
        laptopPrice : '',

    },
    validationSchema : Yup.object({

      firstName : Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო!')
        .matches(nameRegex, "გამოიყენე ქართული ასოები!")
        .required('აუცილებელი ველი!'),

      lastName : Yup.string()
        .min(2, 'მინიმუმ 2 სიმბოლო!')
        .matches(nameRegex, "გამოიყენე ქართული ასოები!")
        .required('აუცილებელი ველი!'),

      email: Yup.string()
        .email('Invalid email address')
        .required('აუცილებელი ველი!'),

      phoneNumber: Yup.string()
        .matches(phoneRegex, 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს')
        .required('აუცილებელი ველი!'),


        laptopName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
              'მხოლოდ ლათინური ასოები!'
          )
        .required('აუცილებელი ველი!'),
        
        
        cpuCore: Yup.string()
          .test('Digits only', 'მხოლოდ ციფრები', digitsOnly)
          .required('აუცილებელი ველი!'),
  
        cpuFlow : Yup.string()
          .test('Digits only', 'მხოლოდ ციფრები', digitsOnly)
          .required('აუცილებელი ველი!'),
  
          
        laptopRam : Yup.string()
          .test('Digits only', 'მხოლოდ ციფრები', digitsOnly)
          .required('აუცილებელი ველი!'),

          date : Yup
        .date()
        .required('აუცილებელი ველი!'),

      laptopPrice : Yup.string()
        .test('Digits only', 'მხოლოდ ციფრები', digitsOnly)
        .required('აუცილებელი ველი!'),

      // memory : Yup.string().required("you must choose property state")
    
    }),

    onSubmit: async (values)  => {
        
    
        alert(JSON.stringify(values, null, 2));


        var formData = new FormData();

        formData.append('name', values.firstName)
        formData.append('surname', values.lastName)
        formData.append('team_id', teamID)
        formData.append('position_id', positionID)
        formData.append('phone_number', values.phoneNumber)
        formData.append('token', '323762cb61990e16562a59d00dd70162')
        formData.append('laptop_name', values.laptopName)
        formData.append('laptop_image', values.fileUpload)
        formData.append('laptop_brand_id', values.laptop_brand_id)
        formData.append('laptop_cpu', values.laptop_cpu)
        formData.append('laptop_cpu_cores', values.cpuCore)
        formData.append('laptop_cpu_threads', values.cpuFlow)
        formData.append('laptop_ram', values.laptopRam)
        formData.append('laptop_hard_drive_type', values.memory)
        formData.append('laptop_state', values.laptop_state)
        formData.append('laptop_price', values.laptopPrice)
        formData.append('email', values.email)

        const options = {
          headers: {'Content-Type' : 'multipart/form-data'}
        }

        let filename = await axios.post('https://pcfy.redberryinternship.ge/api/laptop/create/', formData, options)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        return filename

    },
  })


  


// use formik & validation


  // local storage store data useEffect


  useEffect(() => {
    return () => {
    //   console.log(formikRef.current.values);

      localStorage.setItem('userInfo', JSON.stringify(formikRef.current.values))
    }
  })

  const formik = formikRef.current;

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("userInfo"));
    formikRef.current.setValues(storedValues)
  },[])


  // local storage store data useEffect



    const [page,setPage] = useState(false);

    const nextPage = () => {
        setPage(true);
    }

    const prevPage = () => {
        setPage(false);
    }

    const displayPage = () => {
        
        if(page === false){
            return <Employee formik={formik} nextPage={nextPage}/>
        }
        else{
            return <Laptop formik={formik}  prevPage={prevPage}/>
        }
    }


  return (

    <>
      <form onSubmit={formik.handleSubmit} id="form">
        {displayPage()}
        {/* <button type='submit'>Submit</button> */}
        {/* <button onClick={nextPage} type="submit">Next</button> */}
      </form>
    </>
   
  )
}

export default Formik