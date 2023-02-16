const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
)}
const Content = (props) => {
  const {parts} = props;
  return (
    parts.map((par, index) => <Part key={index} part= {par.name} exercises = {par.exercises} />)
)}

const Total = (props) => {
  const {parts} = props;
  return (
      <p>Number of exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
)}

const Part = (props) => {
  const {part, exercises} = props;
  return (
      <p>
        {part} ': ' {exercises}
      </p>
)}



export default App