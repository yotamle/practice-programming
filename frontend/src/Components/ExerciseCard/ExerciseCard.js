import "./ExerciseCard.css"

function ExerciseCard(props) {
  return (
    <div className="one-exercise">
        <img
          src={props.icon}
          alt="language icon"
        />
        {/* <div>ICON</div> */}

        <div className="exercise-details">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <span>{props.exec_type}</span>
        </div>

        <div>
          <div>
            <small>{props.difficulty}</small>
          </div>
          {/* <span>{props.status}</span> */}
        </div>
      </div>
  )
}

export default ExerciseCard
