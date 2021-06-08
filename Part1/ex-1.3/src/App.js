import React from 'react'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <h2>{part1.name} {part1.exercises}</h2>
      <h2>{part2.name} {part2.exercises}</h2>
      <h2>{part3.name} {part3.exercises}</h2>
      <h3>Total Number of exercises :{part1.exercises + part2.exercises + part3.exercises}</h3>
      </div>
  )
}

  
export default App