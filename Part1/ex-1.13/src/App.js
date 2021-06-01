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