import { useTranslation } from "react-i18next";
import PropertyCard from "../../ui/cards/PropertyCard";

export default function MyProperties() {
  const { t } = useTranslation();
  return (
    <section className="my_properties">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="header">
              <h3>{t("myProperties")}</h3>
              <form className="form">
                <input type="text" placeholder={t("searchForProperty")} />
                <i className="fa-regular fa-magnifying-glass"></i>
              </form>
            </div>
          </div>
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i} className="col-xxl-3 col-lg-4 col-md-6 col-12 p-2">
                <PropertyCard />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
