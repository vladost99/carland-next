import React from "react";
import { useSearchContext } from "../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

const Search = () => {
  const { searchActive } = useSearchContext();

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      }
        hidden xl:block w-full relative shadow-lg
        
        `}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection/>

        <div className="xl:h-full flex items-center px-6 xl:px-0">
            <button className={`btn ${searchActive ? 'btn-sm' : 'btn-lg'} btn-accent ${searchActive ? 'xl:w-[164px]' : 'xl:w-[184px]'}`}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
