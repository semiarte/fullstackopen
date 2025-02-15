import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
    const { course } = props;
    return(
        <>
            <Header name={course.name} />
            <Content 
                part={course.parts[0].name} 
                exercises={course.parts[0].exercises} 
            />
            <Content 
                part={course.parts[1].name} exercises={props.course.parts[1].exercises} 
            />
            <Content 
                part={course.parts[2].name} exercises={props.course.parts[2].exercises} 
            />
            <Content 
                part={course.parts[3].name} exercises={props.course.parts[3].exercises} 
            />
            <Total parts={course.parts} />
        </>
    );
}

export default Course;