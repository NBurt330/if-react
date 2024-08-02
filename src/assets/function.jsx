export const filteredHotels = (arr, str) => {
    const strToLowerCase = str.toLowerCase();
    return arr.filter(
        ({ name, city, country }) =>
            name.toLowerCase().includes(strToLowerCase) ||
            city.toLowerCase().includes(strToLowerCase) ||
            country.toLowerCase().includes(strToLowerCase)
    );
};
