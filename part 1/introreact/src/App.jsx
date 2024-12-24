/* eslint-disable react/prop-types */
const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return <p>{part} {exercises}</p>
}

const Content = () => {
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
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = ({a, b, c}) => {
  return <p>Number of exercises {a + b + c}</p>
}

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
  }

  return (
    <>
      <Header course={course.name} />
      <Content />
      <Total a={course.parts[0].exercises} b={course.parts[1].exercises} c={course.parts[2].exercises} />
    </>
  )
}

export default App