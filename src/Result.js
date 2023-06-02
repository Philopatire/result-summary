import "./Result.css"

function Score({score}) {
  return (
    <div className="score">
      <span className="value">{score}</span>
      <span className="total">of 100</span>
    </div>
  )
}

function Text() {
  return (
    <div className="text">
      <h3>Great</h3>
      <p>You scored highter than 65% of the people who have taken these tests.</p>
    </div>
  )
}

function Result({score}) {
  return (
    <div className="Result">
      <h2 className="title">Your Result</h2>
      <Score score={score}/>
      <Text />
    </div>
  )
}

export default Result