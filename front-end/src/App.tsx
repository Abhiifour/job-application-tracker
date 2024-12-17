import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import New from "./pages/new"
import { Toaster } from "react-hot-toast"

function App() {
  

  return (
   <div className="bg-bg">
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/application" element={<New/>}/>
    </Routes>
   </div>
  )
}

export default App
