import AllExercise from '../../Components/AllExercises/AllExercises'
import { Link } from "react-scroll"
import "./Home.css"

function Home() {
  return (
    <div>
      <div className="welcome-page">
        <div className="bg-img"></div>
        <div className="welcome-message">
          <h1>ברוכים הבאים</h1>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונסקטורר
            אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
            וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
            בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך
            תצטריק לרטי.
          </p>
          <button className="btn-start">
            <Link to="exercises" spy={true} smooth={true}>
              בואו נתחיל
            </Link>
          </button>
          <button className="btn-about">אודות</button>
        </div>
      </div>
      <div id="exercises">
        <AllExercise />
      </div>
    </div>
  )
}

export default Home
