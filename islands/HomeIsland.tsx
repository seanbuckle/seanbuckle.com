import { Skills } from "../components/Skills.tsx";
import { Experience } from "./Experience.tsx";
import { Projects } from "./Projects.tsx";

type Content = {
  skills: [];
  experience: [];
};

type HomeIslandProps = {
  content: Content;
};

export default function HomeIsland({ content }: HomeIslandProps) {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple portfolio page.</p>
      <Skills skills={content.skills} />
      <Experience experience={content.experience} />
      <Projects />
    </main>
  );
}
