const getVisitedCountry = () => {
  const visitedCountry = localStorage.getItem("visited-country");
  if (visitedCountry) {
    return JSON.parse(visitedCountry);
  }
  return [];
};

const addToVisited = (country) => {
  const countries = getVisitedCountry();
  countries.push(country.cca2);
  localStorage.setItem("visited-country", JSON.stringify(countries));
};

const clearVisitedList = () => {
  localStorage.clear();
};

export { addToVisited, getVisitedCountry, clearVisitedList };
