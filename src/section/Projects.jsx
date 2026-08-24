import { ArrowUpRight, Github } from "lucide-react";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

const projects = [
  {
    title: "Ethio Massage",
    description:
      "A modern massage and wellness booking platform where users can explore services, view available options, and easily schedule appointments through a simple and responsive interface.",
    image: proj1,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://ethiomassage.egmhoney.workers.dev/",
    github: "https://github.com/anaifeshetu/ethiomassage",
  },

  {
    title: "Live Football Score",
    description:
      "A real-time football score application that uses an external football API to fetch and display live match scores, fixtures, team information, and football updates in a clean interface.",
    image: proj2,
    tags: ["React", "JavaScript", "API"],
    liveDemo: "https://live-football-score.egmhoney.workers.dev/",
    github: "https://github.com/anaifeshetu/Live-Football-Score",
  },

  {
    title: "World News",
    description:
      "A modern world news application that uses a news API to fetch the latest articles and present breaking stories, categories, and global news in a clean and responsive interface.",
    image: proj3,
    tags: ["React", "JavaScript", "API"],
    liveDemo: "https://world-news.egmhoney.workers.dev/",
    github: "https://github.com/anaifeshetu/World_News",
  },

  {
    title: "Kids Learning Website",
    description:
      "An interactive educational website designed for children with engaging learning experiences, colorful interfaces, and age-friendly activities that make learning more enjoyable.",
    image: proj4,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        right-0
        w-96
        h-96
        bg-primary/10
        rounded-full
        blur-[120px]
        "
      >
      </div>

      <div
        className="
        absolute
        bottom-20
        left-0
        w-72
        h-72
        bg-primary/5
        rounded-full
        blur-[120px]
        "
      >
      </div>

      <div
        className="
        container
        mx-auto
        px-6
        relative
        z-10
        "
      >
        {/* Heading */}

        <div
          className="
          text-center
          max-w-3xl
          mx-auto
          mb-20
          animate-fade-in
          "
        >
          <span
            className="
            text-primary
            uppercase
            tracking-[0.3em]
            text-sm
            font-medium
            "
          >
            My Portfolio
          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-white
            "
          >
            Projects that
            <span className="text-primary">
              {" "}
              create impact
            </span>
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-muted-foreground
            leading-8
            "
          >
            A collection of my frontend projects where I combine
            modern technologies, clean design, APIs, and real-world
            solutions.
          </p>
        </div>

        {/* Project Cards */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              relative
              glass
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              hover:border-primary/30
              hover:-translate-y-3
              transition-all
              duration-500
              animate-fade-in
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  "
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <div
                  className="
                  flex
                  justify-between
                  items-center
                  "
                >
                  <h3
                    className="
                    text-2xl
                    font-semibold
                    text-white
                    group-hover:text-primary
                    transition
                    "
                  >
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                    w-5
                    h-5
                    text-muted-foreground
                    group-hover:text-primary
                    transition
                    "
                  />
                </div>

                <p
                  className="
                  mt-4
                  text-sm
                  text-muted-foreground
                  leading-7
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                  "
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-xs
                      text-muted-foreground
                      hover:text-white
                      hover:border-primary/40
                      transition
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div
                  className="
                  flex
                  gap-4
                  mt-7
                  "
                >
                  {/* Live Demo */}

                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-primary
                      text-white
                      text-sm
                      font-medium
                      hover:scale-105
                      transition
                      "
                    >
                      Live Demo

                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-primary
                      text-white
                      text-sm
                      font-medium
                      hover:scale-105
                      transition
                      "
                    >
                      Live Demo

                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {/* Github */}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-primary
                      text-primary
                      text-sm
                      font-medium
                      hover:bg-primary
                      hover:text-white
                      transition
                      "
                    >
                      <Github className="w-4 h-4" />

                      Github
                    </a>
                  ) : (
                    <button
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-primary
                      text-primary
                      text-sm
                      font-medium
                      hover:bg-primary
                      hover:text-white
                      transition
                      "
                    >
                      <Github className="w-4 h-4" />

                      Github
                    </button>
                  )}
                </div>
              </div>

              {/* Border */}

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                border
                border-primary/10
                group-hover:border-primary/30
                transition
                pointer-events-none
                "
              >
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}

        <div
          className="
          flex
          justify-center
          mt-16
          animate-fade-in
          animation-delay-500
          "
        >
          <button
            className="
            flex
            items-center
            gap-3
            px-7
            py-3
            rounded-full
            glass
            border
            border-primary/30
            text-white
            hover:bg-primary
            transition-all
            duration-300
            "
          >
            View All Projects

            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}