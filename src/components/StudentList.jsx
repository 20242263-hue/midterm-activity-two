import { Link } from 'react-router-dom';

function StudentList({ students }) {
  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map((s, index) => (
          <li key={index}>
            <Link to={`/student/${index}`}>{s.name} ({s.course})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;