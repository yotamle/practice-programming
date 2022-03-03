import { Link } from "react-router-dom"
import "../Header/Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header-flex">
        <Link to="/">
          <button className="btn">בית</button>
        </Link>
        <Link to="/admin">
          <button className="btn">דף ניהול</button>
        </Link>

          <button className="btn">צור קשר</button>

        <Link to="/login">
          <button className="btn">התחברות</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
