import { ContentProvider } from "../context/ContentContext.tsx";
import { Skills } from "../components/Skills.tsx";
import { Experience } from "./Experience.tsx";
import { Projects } from "./Projects.tsx";

type HomeIslandProps = {
  content: any; // Replace 'any' with your content type if available
};

export default function HomeIsland({ content }: HomeIslandProps) {
  return (
    <ContentProvider content={content}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple portfolio page.</p>
      <Skills />
      <Experience experience={content.experience} />
      <Projects />
    </ContentProvider>
  );
}
