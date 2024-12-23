import { useTranslation } from "react-i18next";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function PropertyDetails() {
  const { t } = useTranslation();

  const images = [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return (
    <section className="property_details">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
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
          <div className="col-12 p-2">
            <div className="gallery">
              <div className="main_img">
                <a href={images[0]} data-fancybox="property_gallery">
                  <img src={images[0]} alt="property" />
                </a>
              </div>
              <div className="thumbnails_grid">
                {images.slice(1).map((image, i) => (
                  <div key={i} className="img">
                    <a href={image} data-fancybox="property_gallery">
                      <img src={image} alt="property" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
