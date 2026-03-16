import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import StudentDetails from './components/StudentDetails';

function App() {
  const [students, setStudents] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register students={students} setStudents={setStudents} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;