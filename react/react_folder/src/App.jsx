import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import Teacher from "./Teacher";
import Student from "./Student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
