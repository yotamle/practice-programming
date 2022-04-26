import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import { ToastContainer } from "react-toastify"
import Home from "./Pages/Home/Home"
import Admin from "./Pages/Admin/Admin"
import Login from "./Pages/Login/Login"
import AdminExercise from "./Pages/AdminExercise/AdminExercise"
import Exercise from "./Pages/Exercise/Exercise"
import Header from "./Layout/Header/Header"
import SignUp from "./Pages/Login/SignUp"
import "react-toastify/dist/ReactToastify.css"
// import Footer from "./Layout/Footer/Footer"

export const UserContext = createContext()

function App() {

  const [userLogin, setUserLogin] = useState()

  return (
    <>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {userLogin?.permission === "admin" ? <Route path="/admin" element={<Admin />} /> : <Route path="/" element={<Home />} />}
            <Route path="/admin/exercise/:id" element={<AdminExercise />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/exercise/:id" element={<Exercise />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
        <ToastContainer />
      </UserContext.Provider>
    </>
  )
}

export default App
