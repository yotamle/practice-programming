import { useState } from "react"
import AllExercises from "../../Components/AllExercises/AllExercises"
import Loader from "../../Components/Loader"
import "./Admin.css"

function Admin() {
  const [show, setShow] = useState("default")

  const showByClick = {
    default: (
      <div className="admin-details">
        <h3>דף ניהול</h3>
      </div>
    ),
    exercises: (
      <div>
        <AllExercises isAdmin={true} />
      </div>
    ),
  }

  return (
    <div className="admin-flex">
      <div className="admin-navigate">
        <button className="admin-btn" onClick={() => setShow("exercises")}>
          תרגילים
        </button>
        <button className="admin-btn">סטטיסטיקה</button>
        <button className="admin-btn">משתמשים</button>
      </div>
      {showByClick[show]}
    </div>
  )
}

export default Admin
