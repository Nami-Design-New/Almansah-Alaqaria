import { useTranslation } from "react-i18next";
import PropertyCard from "../cards/PropertyCard";

export default function ListingSection({ setViewMap }) {
  const { t } = useTranslation();

  return (
    <section className="properties">
      <div className="container">
        <div className="row">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i} className="col-xxl-3 col-lg-4 col-md-6 col-12 p-2">
                <PropertyCard />
              </div>
            ))}
        </div>
      </div>
      <button className="view_map" onClick={() => setViewMap(true)}>
        <div className="icon">
          <img src="/icons/map.svg" alt="map" className="to_dark" />
        </div>
        {t("viewOnMap")}
      </button>
    </section>
  );
}
