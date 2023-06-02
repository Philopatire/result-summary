import "./Summary.css"

function Task({icon, text, score, addClass}) {
  return (
    <div className={`task ${addClass ? addClass : ""}`}>
      <img src={icon} />
      <span className="text">{text}</span>
      <div className="score">
        <span className="value">{score}</span> / 100
      </div>
    </div>
  )
}

function Summary({tasks}) {
  return (
    <div className="Summary">
      <h2 className="title">Summary</h2>
      {tasks.map((e) => <Task key={e.id} icon={e.icon} text={e.name} score={e.score} addClass={e.color} />)}
      <button className="next">Continue</button>
    </div>
  )
}

export default Summary