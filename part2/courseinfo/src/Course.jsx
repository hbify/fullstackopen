
const Course = ({course}) => { 
    const {name, parts} = course
    console.log(parts, name);
    const Header = ({name}) => <h2>{name}</h2>

    const Part = ({part}) => <p> {part.name} {part.exercises}</p>
    
    const Content = ({parts}) => { 
        return parts.map( part => <Part part={part} key = {part.id}/>)
    }

    const Total = ({sum}) => <p> <b> Total of {sum} exercises</b></p>
    
    return (
        <div>
            <Header name= {name} />
            <Content parts = {parts} />
            <Total sum= {parts.reduce( (s,p) => s + p.exercises, 0)}/>
        </div>
    )
   }

export default Course