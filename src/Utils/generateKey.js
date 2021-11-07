export const generateKey = (item) => {
    return {
        ...item, id: `${item.url.replace("https://swapi.dev/api", "")}`
    }
}