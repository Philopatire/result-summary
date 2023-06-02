import "./App.css"
import Result from "./Result"
import Summary from "./Summary"
import Reaction from "./images/icon-reaction.svg"
import Memory from "./images/icon-memory.svg"
import Verbal from "./images/icon-verbal.svg"
import Visual from "./images/icon-visual.svg"


let tasks = [
  {
    id: "101",
    name: "Reaction",
    icon: Reaction,
    score: 80,
    color: "red"
  },
  {
    id: "102",
    name: "Memory",
    icon: Memory,
    score: 92,
    color: "yellow"
  },
  {
    id: "103",
    name: "Verbal",
    icon: Verbal,
    score: 61,
    color: "green"
  },
  {
    id: "104",
    name: "Visual",
    icon: Visual,
    score: 72,
    color: "blue"
  }
]

function Attribute() {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Philopatire</a>
    </div>
  )
}

function App() {
  let totalScore = tasks.reduce((previousValue, CurrentValue, currentIndex, array) => {
    return previousValue + CurrentValue.score
  }, 0)
  let total = tasks.length * 100
  return (
    <>
    <div className="App">
      <Result score={Math.round(totalScore / total*100)}/>
      <Summary tasks={tasks}/>
    </div>
    <Attribute />
    </>
  );
}

export default App;
