import React from "react";
import "./index.css";

const Part = (args) => {
  return (
    <div>
     <h2>{args.concept} : {args.excercises}</h2>
    </div>
  );
};

const Header = (args) => {
  return (
  <div>
  <h1>{args.course.name}</h1>
  </div>
  )
};

const Content = (args) => {
  return (
    <div>
      <Part concept={args.parts[0].concept} excercises={args.parts[0].exercises} />
      <Part concept={args.parts[1].concept} excercises={args.parts[1].exercises} />
      <Part concept={args.parts[2].concept} excercises={args.parts[2].exercises} />
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

const Total = (args) => {
  return (
    <div>
    <h3>  
     return {args.parts[0].exercises +args.parts[1].exercises +args.parts[2].exercises}
    </h3>
    </div>
  );
};



export default App