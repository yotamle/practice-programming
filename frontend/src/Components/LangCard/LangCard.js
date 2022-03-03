import "./LangCard.css"

function LandCard(props) {
  return (
    <div className="prog_lang">
      <h3>{props.prog_lang}</h3>
      <img
        src={props.icon}
        alt="language icon"
        />
    </div>
  )
}

export default LandCard
