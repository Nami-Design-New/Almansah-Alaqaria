import { useTranslation } from "react-i18next";
import MapSection from "../ui/property/MapSection";
import GallerySection from "../ui/property/GallerySection";
import AboutSection from "../ui/property/AboutSection";
import ReservationSection from "../ui/property/ReservationSection";
import RatesSection from "../ui/property/RatesSection";
import { Dropdown } from "react-bootstrap";

export default function PropertyDetails({ isHost }) {
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
              {!isHost && (
                <button>
                  <i className="fa-sharp fa-light fa-heart"></i> {t("save")}
                </button>
              )}
              {isHost && (
                <Dropdown>
                  <Dropdown.Toggle>
                    <img className="to_dark" src="/icons/settings.svg" alt="" />
                    {t("settings")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <img src="/public/icons/hide.svg" alt="hide" /> {t("hide")}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <img src="/public/icons/edit.svg" alt="hide" /> {t("edit")}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <img src="/public/icons/delete.svg" alt="hide" /> {t("delete")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="details"></div>
        </div>

        <GallerySection />

        <div className="row mt-3">
          <AboutSection isHost={isHost} />
          {!isHost && <ReservationSection />}
        </div>

        <RatesSection />

        <MapSection />
      </div>
    </section>
  );
}
