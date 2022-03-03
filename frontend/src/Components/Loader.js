import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Oval} from "react-loader-spinner"
import "./AllExercises/AllExercises.css"

function Loader() {
  return (
    <div className="loader">
      <Oval arialLabel="loading-indicator" color="#00cc66" height="40"/>
    </div>
  )
}

export default Loader
