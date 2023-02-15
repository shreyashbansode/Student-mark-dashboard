import React from 'react'
import {Routes,Route} from 'react-router-dom'
import "./Component/Home.css"
import Home from "./Component/Home"
import Adduser from "./Component/Adduser"
import Update from "./Component/Update"

 const App = () => {
  return (
   


    <>

      <Routes>

          <Route exact path= "/" element={<Home/>}></Route>
          <Route exact path ="/adduser" element={<Adduser/>}></Route>
          <Route exact path = "/update/:userId" element = {<Update/>}></Route>
          <Route></Route>

      </Routes>

    </>
  )
}

export default App;