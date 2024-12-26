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
              <h3>{t("unCompletedLisiting")}</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-2">
            <div className="uncompleted_property">
              <div className="img">
                <img src="/public/images/house-2.jpg" alt="house" />
              </div>
              <div className="info">
                <span>{t("uncompleted")}</span>
                <h6>
                  House for sale in Tuwaiq district, Al Kharj city, Riyadh
                  region
                </h6>
                <button>{t("complete")}</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 p-2">
            <div className="uncompleted_property">
              <div className="img">
                <img src="/public/images/house-3.jpg" alt="house" />
              </div>
              <div className="info">
                <span className="verify">{t("verifyIdentityToPublish")}</span>
                <h6>Villa in Jeddah</h6>
                <button>{t("verifyIdentity")}</button>
              </div>
            </div>
          </div>

          <div className="col-12 p-2 mt-3">
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
                <PropertyCard isHost={true} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
