import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
       <h2>
        {props.part1} {props.exercises1}
      </h2>
      <h2>
        {props.part2} {props.exercises2}
      </h2>
      <h2>
        {props.part3} {props.exercises3}
      </h2>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3>
     Total Number of exercises :{props.exercises1 + props.exercises2 + props.exercises3}
      </h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total  exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3} />
    </div>
  )
}

export default App