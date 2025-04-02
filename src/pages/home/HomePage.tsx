import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

function HomePage() {
    return (
        <>
            <div className="profile-container">
                <div className="description-container">
                    <h1 className="profile-name">Antongiulio Donno</h1>
                    <h2 className="profile-title">Computer Science Student at UniVr</h2>
                    <p className="profile-location">Verona, Italy</p>
                </div>
                <div className="image-container">
                    <img 
                        src="kaiba.png" 
                        alt="Kaiba" 
                        className="kaiba-image"
                    />
                </div>
            </div>
            <Navbar />
            <div className="elenco">
            <p>INSTAGRAM: _antongiulio.d</p>
            <p>GITHUB: SaturnAnton</p>
            <p>EMAIL: antongiuliodonno1@gmail.com</p>
            </div>
            <div className="link-container">
                <a 
                    href="https://en.wikipedia.org/wiki/Seto_Kaiba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="profile-link"
                >
                    Who is that guy with the book?
                </a>
            </div>
        </>
    );
}

export default HomePage;
