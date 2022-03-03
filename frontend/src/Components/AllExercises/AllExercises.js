import { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"
import ExerciseCard from "../ExerciseCard/ExerciseCard"
import LangCard from "../LangCard/LangCard"
import "./AllExercises.css"
import Loader from "../Loader"

function AllExercises(props) {
  const { isAdmin } = props
  const [languages, setLanguages] = useState([])
  const [exercises, setExercises] = useState([])
  const [filter, setFilter] = useState({
    search: "",
    exercise_diff: "",
    exercise_type: "",
  })

  function checkFilterValues() {
    const FilteredBySearch = filter.search
      ? exercises.filter((exercise) => exercise.title.includes(filter.search))
      : exercises

    const FilteredByDiff = filter.exercise_diff
      ? FilteredBySearch.filter(
          (exercise) => exercise.difficulty === filter.exercise_diff
        )
      : FilteredBySearch

    const FilteredByType = filter.exercise_type
      ? FilteredByDiff.filter(
          (exercise) => exercise.exec_type === filter.exercise_type
        )
      : FilteredByDiff

    return FilteredByType
  }
  const FilteredArray = checkFilterValues()

  useEffect(getLanguages, [])

  function getLanguages() {
    axios.get("http://localhost:3000/lang").then((result) => {
      setLanguages(result.data)
    })
  }

  function getExercises(id) {
    axios.get(`http://localhost:3000/exercisebylang/${id}`).then((result) => {
      setExercises(result.data)
    })
  }

  function getSearchValue(e) {
    let searchValue = e.target.value
    setFilter({ ...filter, search: searchValue })
  }

  function getDiffValue(e) {
    let diffValue = e.target.value
    setFilter({ ...filter, exercise_diff: diffValue })
  }

  function getExerTypeValue(e) {
    let exerTypeValue = e.target.value
    setFilter({ ...filter, exercise_type: exerTypeValue })
  }

  return (
    <>
      {exercises.length ? (
        <div className="lang-exercise">
          <h2>תרגילים</h2>

          <div className="exercise-filter">
            <div className="exercise-search">
              <input
                type="search"
                placeholder="חיפוש.."
                onChange={(e) => getSearchValue(e)}
              />
              <FaSearch className="search-icon" />
            </div>

            <div className="exer-filter">
              <label>דרגת קושי: </label>
              <select onChange={(e) => getDiffValue(e)}>
                <option></option>
                <option value="easy">קל</option>
                <option value="medium">בינוני</option>
                <option value="hard">קשה</option>
              </select>
            </div>

            <div className="exer-filter">
              <label>סוג תרגיל: </label>
              <select onChange={(e) => getExerTypeValue(e)}>
                <option></option>
                <option value="short">תרגיל קצר</option>
                <option value="rolling">תרגיל מתגלגל</option>
                <option value="tutorial">מדריך</option>
              </select>
            </div>
          </div>

          <div className="all-exercises">
            {FilteredArray.map((exercise) => (
              <div key={exercise._id}>
                <Link
                  {...exercise}
                  to={
                    isAdmin
                      ? `/admin/exercise/${exercise._id}`
                      : `/exercise/${exercise._id}`
                  }
                >
                  <ExerciseCard {...exercise} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="lang-option">
          {languages.length ? (
            <div className="languages">
              <h2>רשימת שפות</h2>
              <div className="languages-filter">
                {languages.map((lang) => (
                  <div key={lang._id} onClick={() => getExercises(lang._id)}>
                    <LangCard {...lang} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </>
  )
}

export default AllExercises
