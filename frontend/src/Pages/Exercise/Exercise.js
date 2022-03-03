import "./Exercise.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Exercise() {
  const { id } = useParams()

  const [oneExercise, setExercise] = useState()

  useEffect(getExercise, [id])

  function getExercise() {
    axios
      .get(`http://localhost:3000/exercise/${id}`)
      .then((result) => setExercise(result.data.exercise[0]))
  }

  const textDiff = {
    easy: "קל",
    medium: "בינוני",
    hard: "קשה",
  }

  // const textType = {
  //   short: "קצר",
  //   rolling: "תרגיל מתגלגל",
  //   tutorial: "מדריך",
  // }

  return (
    <>
      {oneExercise && (
        <div className="exercise-page">
          <div className="exercise">
            <div>
              <h2 className="ex-title">{oneExercise.title}</h2>
            </div>
            <div>
              <label className="ex-diff">דרגת קושי: </label>
              {/* <span>{texytDiff[oneExercise.difficulty]}</span> */}
            </div>
            <div className="ex-dscr">
              <strong>תיאור: </strong>
              <span>{oneExercise.description}</span>
            </div>
            <div className="ex-content">
              <p>{oneExercise.content.content}</p>
            </div>

            <div className="ex-tags">
              <label>תגיות: </label>
              <span>{oneExercise.tags.join(", ")}</span>
            </div>
            <div className="ex-solution">
              <button>פתרונות</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Exercise
