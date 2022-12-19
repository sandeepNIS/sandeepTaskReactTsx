
import Navbar from "./Navbar"
import Home from "./Pages/Home"
// import Register from "./Pages/Register"
// import List from "./Pages/List"
import { Route, Routes } from "react-router-dom"
import List from "./Pages/List"


export default function App() {
  return (
    <div>
     <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<List/>}/>
          <Route path="/List"  />
        </Routes>
      </div>
    </div>
  )
}


