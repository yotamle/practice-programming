import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

function SignUp() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser(user)
  }

  const registerUser = (user) => {
    axios
      .post("http://localhost:3000/register", user)
      .then((result) => console.log(result.data))
  }

  function backToLogin() {
    navigate("/login")
  }
  return (
    <div className="signup-page">
      <div className="signup">
        <h2>הרשמה</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="signup-input"
              type="text"
              placeholder="שם מלא"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="signup-input"
              type="text"
              name="email"
              placeholder="דואר אלקטרוני"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="signup-input"
              type="password"
              placeholder="סיסמא"
              name="password"
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="הרשם" className="btn-login"></input>
        </form>
        <div className="signup-link">
          <label>כבר רשום? </label>
          <label className="btn-signup" onClick={backToLogin}>
            התחבר כאן!
          </label>
        </div>
      </div>
    </div>
  )
}

export default SignUp
