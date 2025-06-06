import HeroSection from "../../components/common/HeroSection";
import CustomBackgroundImage from "../../components/common/CustomBackgroundImage";
import projects from "../../data/projectsData";
import Section from "../../components/section/Section";
import { projectsHero } from "../../data/heroData";
/**
 * A page showing all projects of KSI.
 *
 * @returns A JSX element representing the Projects page.
 */
const Projects = () => {
  return (
    <>
      <CustomBackgroundImage />
      <HeroSection
        header={projectsHero.header}
        subheader={projectsHero.subheader}
      />
      <div
        className="bg-section-primary lg:py-16 pb-8 pt-44"
        style={{ clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)" }}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Section
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              readMore={project.readMore}
              readMoreText={project.readMoreText}
              contentPosition={project.contentPosition as "right" | "left"}
              idx={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
