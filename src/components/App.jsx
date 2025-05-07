import { useState } from 'react';
import StudentList from './StudentList';
import '../index.css';

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: true },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: true },
    { id: 4, name: 'Diana', present: false }
  ];

  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const resetAttendance = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, present: false }))
    );
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div className="container">
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: {presentCount} / {students.length}</p>
      <button className="reset-btn" onClick={resetAttendance}>Reset Attendance</button>
      <StudentList students={students} onToggle={toggleAttendance} />
    </div>
  );
}

export default App;
