import { Link } from "react-router-dom"
import "../Header/Header.css"
import { useContext } from "react"
import { UserContext } from "../../App"
import { BsPersonCircle } from 'react-icons/bs'

function Header() {

  const { userLogin, setUserLogin } = useContext(UserContext)

  function logout() {
    setUserLogin("")
    window.location.reload()
    localStorage.removeItem("token")
  }



  return (
    <div className="header">
      {userLogin?.name}
      <div className="header-flex">
        <Link to="/">
          <button className="btn">בית</button>
        </Link>

        {
          userLogin?.permission === "admin"
          &&
          <Link to="/admin">
            <button className="btn">דף ניהול</button>
          </Link>
        }

        <button className="btn">צור קשר</button>

        {
          userLogin
            ?
            <Link to="/">
              <button className="btn" onClick={logout}>התנתק</button>
            </Link>
            :
            <Link to="/login">
              <button className="btn">התחבר</button>
            </Link>
        }

        {/* <BsPersonCircle/> */}




      </div>
    </div>
  )
}

export default Header
