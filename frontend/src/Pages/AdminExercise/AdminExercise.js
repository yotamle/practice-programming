import "./AdminExercise.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function AdminExercise() {
  const { id } = useParams()
  const [languages, setLanguages] = useState([])
  const [oneExercise, setExercise] = useState([])

  const [updateExercise, setUpdateExercise] = useState({
    title: "",
    description: "",
    exec_type: "",
    difficulty: "",
    status: "",
    prog_lang: "",
    content: {},
    tags: [],
    solution: "",
  })

  useEffect(getLanguages, [])

  function getLanguages() {
    axios.get("http://localhost:3000/lang").then((result) => {
      setLanguages(result.data)
    })
  }
  useEffect(getExercise, [id])

  function getExercise() {
    axios
      .get(`http://localhost:3000/exercise/${id}`)
      .then((result) => setExercise(result.data.exercise[0]))
  }

  const updateForm = (e) => {
    e.preventDefault()
    console.log(e.target)

    // axios.put(`localhost:3000/update-exercise/${id}`)
  }

  return (
    <div className="edit-exercise-page">
      <form className="edit-exercise" onSubmit={updateForm}>
        <h2>עריכת תרגיל</h2>

        <div className="edit-exer">
          <h5>כותרת: </h5>
          <input
            type="text"
            placeholder="כותרת"
            value={oneExercise.title}
            name="title"
          ></input>
        </div>

        <div className="edit-exer">
          <h5>תיאור: </h5>
          <input
            type="text"
            placeholder="תיאור"
            value={oneExercise.description}
            name="description"
          ></input>
        </div>

        <div className="edit-exer">
          <h5>סוג תרגיל: </h5>
          <select value={oneExercise.exec_type} name="exec_type">
            <option></option>
            <option value="short">תרגיל קצר</option>
            <option value="rolling">תרגיל מתגלגל</option>
            <option value="tutorial">מדריך</option>
          </select>
        </div>

        <div className="edit-exer">
          <h5>דרגת קושי: </h5>
          <select value={oneExercise.difficulty} name="difficulty">
            <option></option>name="difficulty"
            <option value="easy">קל</option>
            <option value="medium">בינוני</option>
            <option value="hard">קשה</option>
          </select>
        </div>

        <div className="edit-exer">
          <h5>סטטוס: </h5>
          <select value={oneExercise.status} name="status">
            <option></option>
            <option value="draft">טיוטה</option>
            <option value="publish">פורסם</option>
            <option value="deleted">נמחק</option>
          </select>
        </div>

        <div className="edit-exer">
          <h5>שפת תכנות: </h5>
          <select>
            <option></option>
            {languages.map((language) => (
              <option>{language.id}</option>
            ))}
          </select>
        </div>

        <div className="edit-exer">
          <h5>תוכן התרגיל: </h5>
          <textarea className="content-textarea"></textarea>
        </div>

        <div className="edit-exer">
          <h5>תגיות (יש להפריד את התגיות בפסיק): </h5>
          <textarea className="tags-textarea"></textarea>
        </div>

        <div className="edit-exer">
          <h5>פתרון: </h5>
          <textarea className="solution-textarea"></textarea>
        </div>

        <div className="div-btn-update">
          <button type="submit" className="btn-update">
            עדכן
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminExercise
