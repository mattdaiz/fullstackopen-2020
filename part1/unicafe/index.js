import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
  }

  // const handleAll = () =>{
  //   setAll(good + neutral + bad)
  // }

  // const handleAverage = () => {
  //   setAverage( good - bad / all)
  // }

  // const handlePositive = () =>{
  //   setPositive(good / all * 100)
  // }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClicks} text="good" />
      <Button onClick={handleNeutralClicks} text="neutral" />
      <Button onClick={handleBadClicks} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = (props) => {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><Statistic text='good' value={props.good} /></td>
          </tr>
          <tr>
            <td><Statistic text='neutral' value={props.neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text='bad' value={props.bad} /></td>
          </tr>
          <tr>
            <td><Statistic text='all' value={props.good + props.neutral + props.bad} /></td>
          </tr>
          <tr>
            <td><Statistic text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} /></td>
          </tr>
          <tr>
            <td><Statistic text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100} /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  if (props.text === 'positive') {
    if (isNaN(props.value)) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    else {
      return (
        <div>
          {props.text} {props.value}%
        </div>
      )
    }
  }
  else if (props.text === 'average') {
    if (isNaN(props.value)) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    else {
      return (
        <div>
          {props.text} {props.value}
        </div>
      )
    }
  }
  else if (props.value === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        {props.text} {props.value}
      </div>
    )
  }
}

// const Button = (props) => {

//   return (
//     <>
//       <button onClick={props.onClick}>{props.text}</button>
//     </>
//   )
// }

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

ReactDOM.render(<App />, document.getElementById('root'))