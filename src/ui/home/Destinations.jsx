import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import DestinationCard from "../../ui/cards/DestinationCard";
import "swiper/css";

export default function Destinations() {
  const { lang } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <section className="destinations">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-4">
            <div className="sec_header">
              <div className="section_title">
                <h2>{t("destinations")}</h2>
                <p>{t("destinationsDesc")}</p>
              </div>
              <Link to="/destinations">{t("viewAll")}</Link>
            </div>
          </div>

          <div className="col-12 p-2">
            <Swiper
              slidesPerView={4}
              speed={1000}
              loop={true}
              modules={[Navigation, Autoplay]}
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
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
