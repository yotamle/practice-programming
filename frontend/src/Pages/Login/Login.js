import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { UserContext } from "../../App"


function Login() {
  const { setUserLogin } = useContext(UserContext)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(formData)
  }

  const loginUser = (user) => {
    axios
      .post("http://localhost:3000/login", user)
      .then((result) => {
        if (result.data.message) {
          toast.error(result.data.message)
        }
        else {
          setUserLogin(result.data)
          localStorage.setItem("token",result.data.token)
          navigate("/")
        }
      })
  }

  function goToSignUp() {
    navigate("/signup")
  }

  return (
    <div className="login-page">
      <div className="login">
        <h2>התחברות</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="login-input"
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
              className="login-input"
              type="password"
              placeholder="סיסמא"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" value="התחבר" className="btn-login"></input>
        </form>

        <div className="signup-link">
          <label>עדין לא רשום? </label>
          <label className="btn-signup" onClick={goToSignUp}>
            לחץ כאן!
          </label>
        </div>
      </div>
    </div>
  )
}

export default Login
