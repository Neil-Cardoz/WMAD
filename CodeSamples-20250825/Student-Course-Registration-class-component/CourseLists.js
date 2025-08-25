import React from "react";

function CourseList()
{
    const courses = [{name:"Data Structures and Algorithms", code:"CS2100", isMandatory:true},
        {name:"Fundamentals of Java", code:"CS3101", isMandatory:true},
        {name:"Machine Learning Fundamentals", code:"ML1101", isMandatory:false}];
   
    const courseItems = courses.map(course=>
        <li key = {course.code}
            style={{color:course.isMandatory?'red':'green'}}
        >
            {course.name}
        </li>

    );
    return(<ol>{courseItems}</ol>);
};
export default CourseList;