import { useState } from "react";

export default function SingleCountry({
  country,
  handleAddToVisitedList,
  handleRemoveFromVisited,
}) {
  const { name, flags } = country;
  const [visit, setVisit] = useState(false);

  const handleVisited = () => {
    setVisit(!visit);
  };

  return (
    <div className="border rounded-md p-5 space-y-5">
      <h2 className="font-bold">{name?.common}</h2>
      <img className="h-[250px] w-full" src={flags?.png} alt="Flags" />
      {visit === true ? <h2>Already Visited</h2> : <h2>I will visit there</h2>}
      <button
        onClick={handleVisited}
        className={`bg-black text-white px-4 py-2 rounded-md text-center ${
          visit && "opacity-15"
        }`}
        // disabled={visit && "true"}
      >
        Visited
      </button>
      <div className="flex gap-2">
        <button
          onClick={() => handleAddToVisitedList(country)}
          className={`bg-green-400 text-white px-4 py-2 rounded-md `}
        >
          Add to Visited List
        </button>
        <button
          className={`bg-red-400 text-white px-4 py-2 rounded-md `}
          onClick={() => handleRemoveFromVisited(country)}
        >
          Remove From Visited
        </button>
      </div>
    </div>
  );
}
