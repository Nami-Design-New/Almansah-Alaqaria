import { useState } from "react";
import FilterSection from "../ui/properties/FilterSection";
import MapSection from "../ui/properties/MapSection";
import ListingSection from "../ui/properties/ListingSection";

export default function Properties() {
  const [viewMap, setViewMap] = useState(false);

  return (
    <>
      <FilterSection />
      {viewMap ? (
        <MapSection setViewMap={setViewMap} />
      ) : (
        <ListingSection setViewMap={setViewMap} />
      )}
    </>
  );
}
