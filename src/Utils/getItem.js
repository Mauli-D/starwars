const getTitle = ({ item, bucketId }) => {
  const keys = {
    people: "name",
    films: "title",
    planets: "name"
  };
console.log(item)
  const titleObj = item?.find(x => {
    const key = Object.keys(x)?.[0]
    return key === keys[bucketId]
  }) ?? {}

  return Object.values(titleObj)?.[0]
}

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

  const items = state?.[bucket[bucketId]]?.items;
  const item = items?.find((item) => item?.id === `/${bucketId}/${itemId}/`);

  if (item) {
    const validProplist =  Object.keys(item)
      .filter((key) => keys[bucketId].includes(key))
      .map((filteredKey) => ({
        [filteredKey]: item[filteredKey],
      }));

      return {
        item: validProplist,
        title: getTitle({ item: validProplist, bucketId })      
      }
  }
};
