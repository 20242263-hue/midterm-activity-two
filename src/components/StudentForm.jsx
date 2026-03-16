import { useState } from 'react';

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!student.name) tempErrors.name = "Name is required";
    if (!student.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(student.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!student.course) tempErrors.course = "Course is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addStudent(student);
      setStudent({ name: '', email: '', course: '' });
    }
  };

  const isFormValid = Object.keys(errors).length === 0 &&
    student.name && student.email && student.course;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <input type="text" name="course" placeholder="Course" value={student.course} onChange={handleChange} />
        {errors.course && <span style={{ color: 'red' }}>{errors.course}</span>}
      </div>
      <button type="submit" disabled={!isFormValid}>Register</button>
    </form>
  );
}

export default StudentForm;