import React from "react";
import "./index.css";

const Part = (props) => {
  return (
    <div>
     <h2>{props.concept} : {props.excercises}</h2>
    </div>
  );
};

const Header = (props) => {
  return (
  <div>
  <h1>{props.course.name}</h1>
  </div>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part concept={props.parts[0].concept} excercises={props.parts[0].exercises} />
      <Part concept={props.parts[1].concept} excercises={props.parts[1].exercises} />
      <Part concept={props.parts[2].concept} excercises={props.parts[2].exercises} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        concept: "Fundamentals of React",
        exercises: 10,
      },
      {
        concept: "Using props to pass data",
        exercises: 7,
      },
      {
        concept: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
    <h3>  
     return {props.parts[0].exercises +props.parts[1].exercises +props.parts[2].exercises}
    </h3>
    </div>
  );
};



export default App