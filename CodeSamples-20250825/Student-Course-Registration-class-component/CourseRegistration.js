import React from "react";

class CourseRegistration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            courses: [
                {code:"CS101", name : "Programming and Problem Solving"},
                {code:"CS102", name : "Fundamentals of Python"},
                {code:"CS103", name : "Operating Systems"},
                {code:"CS104", name : "Computer Architecture"},
                {code:"CS105", name : "Computational Methods"}

            ], selectedCourses: []
        };
    }
    handleCheckboxChange = (event) => 
    {
        const courseName = event.target.value;
        const { selectedCourses } = this.state;

        if (selectedCourses.includes(courseName)) 
        {
        // Remove if already selected
        this.setState({
            selectedCourses: selectedCourses.filter(course => course !== courseName)
        });
        } else 
        {
        // Add if not selected
        this.setState({
            selectedCourses: [...selectedCourses, courseName]
        });
        }
    };
    handleSubmit = (event) => 
    {
        event.preventDefault();
        alert(`You have selected: ${this.state.selectedCourses.join(", ")}`);
    };
    render()
    {
        
       return( 
            <div>
            <h1>Register for all required courses for your year:</h1>
            <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Select from the following:</label>
                {this.state.courses.map(course => (
              <div key={course.code}>
                <label>
                  <input
                    type="checkbox"
                    value={course.name}
                    checked={this.state.selectedCourses.includes(course.name)}
                    onChange={this.handleCheckboxChange}
                  />
                  {course.name}
                </label>
                </div>
                ))}
                
            </fieldset>
            <p><button type="submit">Register</button></p>
            </form>
            {/*{this.state.selectedCourses.length > 0 && (
            <div>
            <strong>Selected Courses:</strong> {this.state.selectedCourses.join(", ")}
            </div>
            )}*/}
            </div>
        
       );

    }
}
export default CourseRegistration;