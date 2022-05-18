import { NavLink } from "react-router-dom";
import "./ProjectListPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProjectListPage(props){

const navigate = useNavigate()


const deleteProject = (projectId)=>{

    

        axios.delete(`${process.env.REACT_APP_API_URL}/projects/${projectId}`)
        .then(response=>{
       return navigate("/projects")
        })
        .then(response=>{
       return props.reload()
        })
        .catch(err=>{console.log(err)})
    }

    const renderProjects = () => {
        const result = props.projects.map( (element) => {
            return (
                <div key={element._id} className="project-summary box">
                    <p>{element.title}</p>
                    <NavLink to="/">More details</NavLink> |&nbsp;
                    <NavLink to={`/projects/${element._id}/edit`}>Edit</NavLink>
                    <a href="#" onClick={()=>{deleteProject(element._id)}}> Delete </a>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="ProjectListPage">
            <h1>List of Projects</h1>

             <section>
                 { props.projects === null
                    ? <p>loading...</p>
                    : renderProjects()
                }
             </section>

        </div>
    );
}

export default ProjectListPage;