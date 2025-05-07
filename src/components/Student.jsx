import '../index.css';

function Student({ name, present, onToggle }) {
  return (
    <div className={`student-card ${present ? 'present' : 'absent'}`}>
      <span>{name}</span>
      <button className="toggle-btn" onClick={onToggle}>
        {present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  );
}

export default Student;
