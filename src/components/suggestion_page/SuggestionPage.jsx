import React, { useState, useEffect } from "react";
import styles from "./SuggestionPage.module.css";
import { Header } from "./Header";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "./SearchBar";
import { ScrollToTop } from "./ScrollToTop";

function SuggestionPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <main className={styles.SuggestionPage}>
      <Header />
      <div>
        <SearchBar projects={projects} setFilteredProjects={setFilteredProjects} />
      </div>

      <section className={styles.projectsSection}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.project_id}
              title={project.title}
              type={project.type}
              carpetArea={project.carpet_area}
              status={project.status}
              bhk={project.bhk}
              image={project.image_url}
            />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </section>
      <ScrollToTop />
    </main>
  );
}

export default SuggestionPage;
