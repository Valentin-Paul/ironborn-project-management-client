import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProjectListPage from './pages/ProjectListPage';
import { useEffect, useState } from "react";
import AddProjectPage from "./pages/AddProjectPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"

function App() {
  
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetchProjects();
  },[]);

  const fetchProjects = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
      .then(response => {
       setProjects(response.data);
      })
      .catch(e => console.log("error getting projects from API...", e))
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/projects' element={<ProjectListPage projects={projects} />} />
        <Route path='/projects/create' element={<AddProjectPage reload={fetchProjects}/>} />
        <Route path='/projects/:projectId/edit' element={<EditProjectPage projects={projects} reload={fetchProjects} />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

      </Routes>
    </div>
  );
}

export default App;
