export const getContent = async () => {
  const path = new URL("../static/content/content.json", import.meta.url);
  const data = await Deno.readTextFile(path);
  return JSON.parse(data);
};
