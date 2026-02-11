const App = (props) => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header course={course} />
      <Content 
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}/>
      <Total total={total} />
    </div>
  )
}
const Header =(props)=>{
  return(<h1>
    {props.course}
  </h1>)}
const Part =(props)=>{
  return(
    <p>{props.name}: {props.exercises}</p>
  )
}
const Content=(props)=>{return(
    <div>
      <Part name ="fundamentals of React" exercises = {props.exercises1}/>
      <Part name ="using props to pass data " exercises = {props.exercises2}/>
      <Part name ="state of a component" exercises = {props.exercises3}/>


  </div>)
}

const Total=(props)=>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}
 

export default App 