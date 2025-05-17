import { getProjects } from "../routes/api/projects.ts";
import { useEffect, useState } from "preact/hooks";

export function Projects() {
  interface Project {
    name: string;
    homepage: string;
    html_url: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((projects) => {
        const names = [
          "Advice-generator-app",
          "age-calculator",
          "Interactive-rating-component",
          "nc-news",
          "nc-news-api",
          "Results-summary-component"];
        const filteredProjects = projects.filter((project: Project) =>
          names.includes(project.name),
        );
        
        console.log(filteredProjects);
        
        setProjects(filteredProjects);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setIsError(true);
      });
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {isError
        ? (
          <>
            <p>Not found</p>
          </>
        )
        : (
          <>
            {!isLoading
              ? (
                <>
                  {projects.map((project, i) => (
                    <section key={i} class="card">
                      <img
                        src={`https://raw.githubusercontent.com/seanbuckle/${project?.name}/refs/heads/main/images/screenshot.png`}
                        alt=""
                        onError={(e) => {
                          e.currentTarget.onerror = null; // Prevents infinite loop
                          e.currentTarget.src = "/under-construction.jpeg";
                        }}
                      />
                      <h3>
                        {project?.name.replaceAll("-", " ")}
                      </h3>
                      <a href={project?.homepage}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.5rem"
                          viewBox="0 -960 960 960"
                          width="1.5rem"
                          fill="currentcolor"
                        >
                          <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                        </svg>
                        Live site
                      </a>
                      <a href={project?.html_url}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.5rem"
                          viewBox="0 -960 960 960"
                          width="1.5rem"
                          fill="currentcolor"
                        >
                          <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                        </svg>Source
                      </a>
                    </section>
                  ))}
                </>
              )
              : (
                <>
                  <p>loading...</p>
                </>
              )}
          </>
        )}
    </>
  );
}
