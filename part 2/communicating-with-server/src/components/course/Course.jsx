import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
    return(
        <>
            {courses.map(({name, id, parts}) => {
                return(
                    <div className="course" key={id}>
                        <Header name={name} />
                        { parts.map(part => <Content key={part.id} part={part.name} exercises={part.exercises}/>)}
                        <Total parts={parts} />
                    </div>
                );
            })}
        </>
    );
}

export default Course;