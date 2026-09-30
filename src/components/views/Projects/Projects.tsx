import ProjectCard from "../../common/ProjectCard/ProjectCard";

import gamesScope from "../../../assets/images/projects/gameScope.png";
import envokemBeauty from "../../../assets/images/projects/envokemBeauty.png";
import elcinema from "../../../assets/images/projects/elcinema.png";
import dashboard from "../../../assets/images/projects/dashboard.png";

import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="sectionHeader">
          <h3>PROJECTS</h3>

          <h1>
            My Latest <span>Projects</span>
          </h1>

          <p>Projects I have worked on.</p>
        </div>

        <div className="cardsContainer">
          <ProjectCard
            image={gamesScope}
            title="Games Scope"
            desc="A modern game discovery platform for browsing games, platforms, reviews, and upcoming releases."
            technologies={["React", "React Query", "React Router", "RAWG API"]}
            githubUrl="https://github.com/mohamad-taha/GameScope"
            liveUrl="https://mohamad-taha.github.io/GameScope/"
          />

          <ProjectCard
            image={envokemBeauty}
            title="Envokem Beauty"
            desc="A beauty e-commerce website with product browsing, cart management, and a responsive user interface."
            technologies={["React", "Firebase", "React Query", "Firestore"]}
            githubUrl="https://github.com/mohamad-taha/chemosyndrome"
            liveUrl="https://envokem-beauty.web.app/"
          />

          <ProjectCard
            image={elcinema}
            title="ELcinema"
            desc="A web application for exploring movies and TV shows using the TMDB API, with details, ratings, genres, trailers, and trending content."
            technologies={["React", "Formik", "Material UI", "TMDB API"]}
            githubUrl="https://github.com/mohamad-taha/elcinema"
            liveUrl="https://mohamad-taha.github.io/elcinema/"
          />

          <ProjectCard
            image={dashboard}
            title="Dashboard"
            desc="A dynamic dashboard for efficient product management, allowing administrators to view, add, edit, and delete products."
            technologies={["React", "Formik", "Material UI", "REST API"]}
            githubUrl="https://mohamad-taha.github.io/dashboard/"
            liveUrl="https://github.com/mohamad-taha/dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
