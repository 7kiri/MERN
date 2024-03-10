import React from 'react';
import {Link} from 'react-router-dom'

function AboutUs() {
    return (
        <div>
            <h2>About Us</h2>
            <Link to="/">Back to Login</Link>
            <p>Welcome to the Student Marks/Grade Management System!</p>
            <p>Our project aims to provide an efficient and user-friendly platform for managing student grades and marks. With our system, educators can easily input, track, and analyze student performance, while students and parents can access their grades and progress reports conveniently.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Secure user authentication and authorization system</li>
                <li>Input and update student grades and marks</li>
                <li>Generate reports and analytics on student performance</li>
                <li>Real-time notifications for grade updates</li>
                <li>User-friendly interface accessible on various devices</li>
            </ul>
            <h3>Our Team:</h3>
            <p>Our project was developed by a dedicated team of software engineers passionate about education and technology:</p>
            <ul>
                <li>Deepika </li>
                <li>Narayana</li>
                <li>Krishna Ramya</li>
           
            </ul>
            <p>For any inquiries or feedback, feel free to contact us at <a href="contact us@example.com">info@example.com</a>.</p>
        </div>
    );
}

export default AboutUs;
