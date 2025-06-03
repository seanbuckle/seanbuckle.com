
import HeaderScroll from "../islands/HeaderScroll.tsx";
import HomeIsland from "../islands/HomeIsland.tsx";
import { getContent } from "../data/content.ts";

export default async function Home() {
  const content = await getContent();
  return (<>
  <HeaderScroll />
  <HomeIsland content={content} />
  </>
  );
}
