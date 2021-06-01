import React, { useState } from 'react'

const App = () => {
  const anecdoteSet = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const highestVotes = () => {
    let high = 0
    let highestindex = 0
    votes.forEach((value, index) => {
      if (value> high) {
        high = value
        highestindex = index
      }
    })
    return highestindex
  }
  const [selected, setSelected] = useState(0)
  
  const RandomGenerationClick = () => {
    const randomgenerator= Math.floor(Math.random()*anecdoteSet.length)
    setSelected(randomgenerator)
  }

  const[votes,setVotes] =useState(Array.apply(null, new Array(anecdoteSet.length)).map(Number.prototype.valueOf,0))

  const VoteForAnecdote = () => {
    const increment=[...votes]
    increment[selected]+=1
    setVotes(increment)
  }
  return (
    <div>
      <h1><i>Anecdote of The Day</i></h1>
      <h3>{anecdoteSet[selected]}</h3>
      <h3>has {votes[selected]} votes</h3>
      <Button ClickOn={RandomGenerationClick} text="Next Anecdote"/>
      <Button ClickOn={VoteForAnecdote}  text="vote"/>
      <h1><i>Anecdote with highest Votes</i></h1>
      {votes[highestVotes()] === 0 ?
        <div>
          <h3>No votes yet!!</h3>
        </div>
        :
        <div>
          <h3>{anecdoteSet[highestVotes()]}</h3>
          <h3>has {votes[highestVotes()]} votes</h3>
        </div>
      }
   </div>
  )
}


const Button = ({ClickOn, text }) => {
    return (
      <>
      <button onClick={ClickOn}>{text}</button>
      </>
      
    )
  }

export default App