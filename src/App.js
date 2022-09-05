import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


// components
import Main from './Components/LandingPage/Main'
import Formik from './Components/MultistepForm/Formik'
import Laptop from './Components/LaptopInfo/Laptop'
import Success from './Components/SuccessPage/Success'
import List from './Components/ListPage/List'
import Unique from './Components/UniquePage/Unique'


const queryClient = new QueryClient()


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/success' element={<Success/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/unique/:laptopId' element={<Unique/>}></Route>
          <Route path='/formik' element={<Formik/>}></Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>

    </>
  )
}

export default App