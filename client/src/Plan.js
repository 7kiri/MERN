import React from 'react';
import './Plan.css'; // Import CSS file for styling

function Plan() {
  return (
    <div className="plan-container">
      <header className="plan-header">
        <h1>Grading Plan</h1>
      </header>
      <main className="plan-content">
        <p>Our grading system follows the standard grading scale:</p>
        <ul>
          <li>A: 90% - 100%</li>
          <li>B: 80% - 89%</li>
          <li>C: 70% - 79%</li>
          <li>D: 60% - 69%</li>
          <li>F: Below 60%</li>
        </ul>
        <p>Grades will be calculated based on the following criteria:</p>
        <ul>
          <li>Assignments: 40%</li>
          <li>Quizzes: 20%</li>
          <li>Midterm Exam: 20%</li>
          <li>Final Exam: 20%</li>
        </ul>
        <p>
          Students' overall grades will be calculated by adding up the weighted scores from each category and mapping them to the grading scale.
        </p>
        <p>
          For example, if a student scores 80% on assignments, 90% on quizzes, 85% on the midterm exam, and 75% on the final exam, their overall grade would be calculated as follows:
          <br />
          <strong>
            (40% * 80%) + (20% * 90%) + (20% * 85%) + (20% * 75%) = 32 + 18 + 17 + 15 = 82%
          </strong>
          <br />
          Based on the grading scale, this student would receive a grade of B.
        </p>
      </main>
      <footer className="plan-footer">
        <p>Copyright &copy; 2024 Student Grading Management System</p>
        <a href="/" className="back-link">Back to login Page</a> {/* Apply back-link class */}
      </footer>
    </div>
  );
}
 
export default Plan;
