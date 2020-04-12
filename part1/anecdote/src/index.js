import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Uint8Array(6))
  const copyVoteArray = vote.slice() // slice array to make a copy


  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const incrementVote = () => {
    copyVoteArray[selected] += 1  // increment at index 
    setVote(copyVoteArray) // set state of array to copied array
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {props.anecdotes[selected]}<br/>
      {copyVoteArray[selected]} votes<br/>
      <Button onClick={incrementVote} text="Vote" />
      <Button onClick={handleSelected} text="Next Anecdote"/>
      <MostVotes anecdote={props.anecdotes} allVotes={copyVoteArray}/>
      </p>
      <div>
      
      </div>
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

// Pass array of anecdote and vote count 
const MostVotes = ({anecdote, allVotes}) =>{
  const highestVotes = allVotes.indexOf(Math.max.apply(null, allVotes))

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote[highestVotes]}<br/>
      has {allVotes[highestVotes]} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)