import Student from './Student';

function StudentList({ students, onToggle }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          present={student.present}
          onToggle={() => onToggle(student.id)}
        />
      ))}
    </div>
  );
}

export default StudentList;


