import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Admin from "./Pages/Admin/Admin"
import Login from "./Pages/Login/Login"
import AdminExercise from "./Pages/AdminExercise/AdminExercise"
import Exercise from "./Pages/Exercise/Exercise"
import Header from "./Layout/Header/Header"
import SignUp from './Pages/Login/SignUp'
// import Footer from "./Layout/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/exercise/:id" element={<AdminExercise />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exercise/:id" element={<Exercise />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
