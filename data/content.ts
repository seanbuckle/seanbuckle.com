export const getContent = () => {
  return fetch("/content/content.json")
    .then((response) => response.json());
};
