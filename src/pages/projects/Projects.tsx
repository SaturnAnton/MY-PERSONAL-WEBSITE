import Navbar from "../../components/Navbar/Navbar"
import "./Projects.css"

function Projects(){
  const handleGitHubClick = () => {
    window.open("https://github.com/SaturnAnton", "_blank", "noopener noreferrer");
  };
    return (
        <>
            <Navbar />
          <h1 className = "title">PROJECTS</h1>
          <div className = "centered-box">
            For now, I've only been making projects for university,
            but in the next few months I want to start creating my own personal projects.
            If you want to take a look at my projects,they are on my GitHub.
            </div>
          <div className="github-button">
                <button onClick={handleGitHubClick}>
                    GitHub
                </button>
          </div>
        </>
      )
}

export default Projects