import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";
import {
  addToVisited,
  clearVisitedList,
  getVisitedCountry,
} from "../utils/localStorage";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const [lsCountries, setLsCounties] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json().then((data) => setCountries(data))
    );
  }, []);

  useEffect(() => {
    const lsVisitedCountry = getVisitedCountry();
    let savedCountries = [];
    for (const lsCca2 of lsVisitedCountry) {
      const fetchLsCountry = countries.find((c) => c.cca2 === lsCca2);
      if (fetchLsCountry) {
        savedCountries.push(fetchLsCountry);
      }
    }
    setLsCounties(savedCountries);
  }, [countries, lsCountries]);

  const handleAddToVisitedList = (country) => {
    const alreadyAdded = lsCountries?.find((c) => c.cca2 === country.cca2);
    if (alreadyAdded) {
      return alert("This Country is already added!");
    } else {
      addToVisited(country);
      return alert("Country has been added successfully!");
    }
  };

  const handleRemoveFromVisited = (country) => {
    const alreadyAdded = visitedCountry?.find((c) => c.cca2 === country.cca2);
    if (alreadyAdded) {
      const countryAfterRemoval = visitedCountry.filter(
        (c) => c.cca2 !== country.cca2
      );
      setVisitedCountry(countryAfterRemoval);
      return alert("Country is removed from your visited list!");
    } else {
      return alert("This country is not your visited list yet.");
    }
  };

  const [searchText, setSearchText] = useState("");

  const filteredCountry = countries?.filter((c) =>
    c?.name?.common?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl underline">
        Total Countries - {countries?.length}
      </h1>
      <div className="border-2 border-blue-400 my-4 p-4 rounded-md">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="font-bold">
            Total Visited Countries -{" "}
            <span className="bg-blue-400 border rounded-full px-4 p-2 text-white">
              {lsCountries?.length}
            </span>
          </h1>
          <button
            className="bg-red-500 py-1 px-2 font-mono text-xs rounded-md text-white font-semibold"
            onClick={clearVisitedList}
          >
            Clear Visited List
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-8 gap-3 my-4">
          {lsCountries?.map((country) => (
            <div className="border p-2 rounded-md">
              <p className="mb-2 border-b border-blue-400 font-semibold">
                {country?.name?.common}
              </p>
              <img className=" w-full" src={country?.flags?.png} alt="Flags" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 my-5">
        <input
          placeholder="Search By Name"
          type="text"
          className="border rounded-md w-full px-4 py-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {filteredCountry?.map((country) => {
          return (
            <SingleCountry
              key={country?.cca3}
              country={country}
              handleAddToVisitedList={handleAddToVisitedList}
              handleRemoveFromVisited={handleRemoveFromVisited}
            ></SingleCountry>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
