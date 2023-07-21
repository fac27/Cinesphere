export const getImdbIds = (films: any) => {
  const imdbIdSet = new Set();
  for (const screening of films) {
    imdbIdSet.add(screening.imdbId);
  }
  return Array.from(imdbIdSet);
};