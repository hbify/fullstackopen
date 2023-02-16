import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClick = (feedback, setFeedback) => () => 
  setFeedback(feedback= feedback + 1)
  return (
    <div>
      <h1>Give Feadback</h1>
      <Button onClick = {handleClick(good, setGood)} text = "good" />
      <Button onClick = {handleClick(neutral, setNeutral)} text = "neutral"/>
      <Button onClick = {handleClick(bad, setBad)} text = "bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral= {neutral} bad={bad}/>
    </div>
  )
}

const Button = (props) =>  <button onClick={props.onClick}>{props.text}</button>


const Statistics = (props) => {
  const {good, neutral, bad} = props
  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = 100*good/all

  return (
      <div>
        {(all===0)? (<div><p>no feedback given</p></div>):(
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all" value ={all} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={positive+'%'} />
          </tbody>
        </table>)}
      </div>
  )
}
const StatisticLine = (props) => {
  const {text, value} = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


export default App