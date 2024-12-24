import { useTranslation } from "react-i18next";
import MapSection from "../ui/property/MapSection";
import GallerySection from "../ui/property/GallerySection";
import AboutSection from "../ui/property/AboutSection";
import ReservationSection from "../ui/property/ReservationSection";
import RatesSection from "../ui/property/RatesSection";

export default function PropertyDetails() {
  const { t } = useTranslation();

  return (
    <section className="property_details">
      <div className="container">
        <div className="w-100 p-2">
          <div className="details_header">
            <h1>Ammos Holiday House</h1>
            <div className="actions">
              <button>
                <i className="fa-sharp fa-solid fa-share"></i> {t("share")}
              </button>
              <button>
                <i className="fa-sharp fa-light fa-heart"></i> {t("save")}
              </button>
            </div>
          </div>
        </div>

        <GallerySection />

        <div className="row mt-3">
          <AboutSection />
          <ReservationSection />
        </div>

        <RatesSection />

        <MapSection />
      </div>
    </section>
  );
}
