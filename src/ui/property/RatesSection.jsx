import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/css";

export default function RatesSection() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  return (
    <div className="w-100 p-2 mt-5">
      <div className="map_section">
        <h3>{t("ratesTitle")}</h3>
        <p>{t("ratesDesc")}</p>
        <Swiper
          slidesPerView={4}
          speed={1000}
          loop={true}
          spaceBetween={16}
          className="destinations_swiper"
          dir={lang === "ar" ? "rtl" : "ltr"}
          rtl={lang === "ar"}
          key={lang}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
