import "./Login.css"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
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
              placeholder="דואר אלקטרוני"
              name="email"
            />
          </div>
          <div>
            <input
              className="login-input"
              type="password"
              placeholder="סיסמא"
              name="password"
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
