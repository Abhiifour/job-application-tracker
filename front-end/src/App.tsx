import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import New from "./pages/new"

function App() {
  

  return (
   <div className="bg-bg">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/application" element={<New/>}/>
    </Routes>
   </div>
  )
}

export default App
