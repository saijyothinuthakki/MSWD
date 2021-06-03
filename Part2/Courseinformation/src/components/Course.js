import React from 'react'

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => 
        <> 
            <Part key={part.id} name={part.name} exercises={part.exercises}/> 
        </>)}
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <h2><i>{props.name}</i></h2>
      </div>
    )
  }
  
  const Part= (props) => {
    return (
    <div>
      <h3>{props.name}: {props.exercises}</h3>
    </div>
    )
  }
  
  const Total = (props) => {
      const total = props.parts.reduce((total, part) => total + part.exercises, 0)
      return (
        <div>
          <h3><i>Sum of exercises: {total}</i></h3>
        </div>
      )
  }
  const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}></Total>
      </div>
    )
  }
  
  export default Course