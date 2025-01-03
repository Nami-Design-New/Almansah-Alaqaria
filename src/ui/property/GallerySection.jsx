import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function GallerySection() {
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
    <div className="w-100 p-2">
      <div className="gallery">
        <div className="main_img">
          <a href={images[0]} data-fancybox="property_gallery">
            <img src={images[0]} alt="property" />
          </a>
          <a
            href={images[0]}
            data-fancybox="property_gallery"
            className="view_all_img"
            onClick={(e) => {
              e.preventDefault();
              Fancybox.show(
                images.map((image) => ({ src: image, type: "image" })),
                { id: "property_gallery" }
              );
            }}
          >
            <i className="fa-light fa-images"></i> {t("viewAllImages")}
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
  );
}
