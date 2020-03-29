// For fetch image with tags
export const fetchBooks = async api => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
};
