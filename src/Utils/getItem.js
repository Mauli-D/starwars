export const getItem = ({ bucketId, state, itemId }) => {
  const keys = {
    people: ["name", "height", "mass", "hair_color", "skin_color", "gender", "birth_year"],
    films: ["title", "director", "producer", "release_date"],
    planets: ["name", "terrain", "population"]
  };

  const bucket = {
    people: "people",
    films: "movies",
    planets: "planets"
  } 

  const item = state?.[bucket[bucketId]]?.items?.find((item) => item?.id === `/${bucketId}/${itemId}/`);

  if (item) {
    return Object.keys(item)
      .filter((key) => keys[bucketId].includes(key))
      .map((filteredKey) => ({
        [filteredKey]: item[filteredKey],
      }));
  }
};
