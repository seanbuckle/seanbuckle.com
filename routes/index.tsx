import { Experience } from "../islands/Experience.tsx";
import { Projects } from "../islands/Projects.tsx";

export default function Home() {
  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple portfolio page.</p>
      <Experience />
      <Projects />
    </>
  );
}
