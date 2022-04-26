import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { toast } from "react-toastify"
import { UserContext } from "../../App"

function SignUp() {
  const { setUserLogin } = useContext(UserContext)
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const { name, email, password, password2 } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error("הסיסמאות אינם תואמות!")
    }
    else {
      registerUser(formData)
    }
  }

  const registerUser = (user) => {
    axios
      .post("http://localhost:3000/register", user)
      .then((result) => {
        if (result.data.message) {
          toast.error(result.data.message)
        }
        else {
          setUserLogin(result.data)
          toast.success("נרשמת בהצלחה")
          navigate("/")
        }
      })
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
              placeholder="שם"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="signup-input"
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="דואר אלקטרוני"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="signup-input"
              type="password"
              placeholder="סיסמא"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="signup-input"
              type="password"
              placeholder="אימות סיסמא"
              name="password2"
              id="password2"
              value={password2}
              onChange={handleChange}
              required
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
