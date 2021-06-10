import React from 'react'

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    );
};

const Total = ({parts}) => {
  return (
      <h2> Total number of exercises :{parts[0].exercises + parts[1].exercises + parts[2].exercises}</h2>
  );
};

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Part = ({part}) => {
  return (
      <h2>
          {part.name}:{part.exercises}
      </h2>
  );
};

export default App