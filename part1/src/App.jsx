import { useState } from "react"
const Button=({onClick, text})=>{
  return(<button onClick={onClick}>{text}</button>)
}


const App = () => {
  const [good,setGood]= useState(0)
  const [neutral,setNeutral]= useState(0)
  const [bad,setBad]= useState(0)

  const good_feedback=()=>{
  console.log("Setting good")
  setGood(good+1)
}

const neutral_feedback=()=>{
  console.log("Setting neutral")
  setNeutral(neutral+1)
}

const bad_feedback=()=>{
  console.log("Setting bad")
  setBad(bad+1)
}
const Total=()=>{
  return(good + neutral + bad)

}
const Average=()=>{
  return((good + (neutral*0) + (bad*-1))/Total())

}

const Positive=()=>{
  return((good/Total())*100)
}
const Statistics=()=>{
  return(<div>
    <h1>Statistics</h1>
    <p>Good: {good} </p>
    <p>neutral: {neutral} </p>
    <p>Bad: {bad} </p>
    <p>Total feedback tokens: {Total()} </p>
    <p>Average: {Average()} </p>
    <p>Positive: {Positive()}% </p>
  </div>)
}

  return(<div>
    <h1>Give Feedback</h1>
    <Button onClick={good_feedback} text="good"/>
    <Button onClick={neutral_feedback} text="neutral"/>
    <Button onClick={bad_feedback} text="bad"/>
    <Statistics/>

  </div>)
}

export default App 