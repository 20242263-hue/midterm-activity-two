import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

function Register({ students, setStudents }) {
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Register Students</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default Register;