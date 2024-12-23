import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SubmitBtn from "../form/SubmitBtn";
import InputField from "../form/InputField";
import SelectField from "./../form/SelectField";

export default function Register() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  const avatars = [
    "/avatars/av1.png",
    "/avatars/av2.png",
    "/avatars/av3.png",
    "/avatars/av4.png",
    "/avatars/av5.png",
  ];

  return (
    <>
      <div className="auth_header">
        <h5>{t("createAccount")}</h5>
        <p>{t("createAccountDesc")}</p>
      </div>

      <form>
        <div className="form_field">
          <label htmlFor="avatar">
            {t("personalAvatar")} <span>({t("optional")})</span>
          </label>
          <Swiper
            slidesPerView={3}
            speed={200}
            spaceBetween={12}
            className="choose_img"
            dir={lang === "ar" ? "rtl" : "ltr"}
            rtl={lang === "ar"}
            key={lang}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <label className="choose_img">
                <input type="file" name="" id="" />
                <div className="upload_img">
                  <img src="/icons/gallery.svg" alt="upload" />
                </div>
              </label>
            </SwiperSlide>
            {avatars.map((avatar, index) => (
              <SwiperSlide key={index}>
                <label className="choose_img">
                  <input type="radio" name="avatar" id="avatar" />
                  <div className="img_wrap">
                    <img src={avatar} alt="avatar" />
                  </div>
                </label>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="form_field">
          <label htmlFor="name">{t("fullName")}</label>
          <div className="d-flex gap-3">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder={t("firstName")}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder={t("lastName")}
            />
          </div>
        </div>

        <div className="form_group">
          <InputField
            id="birthdate"
            name="birthdate"
            label={t("birthdate")}
            type="date"
            required
            hint={t("optional")}
          />

          <SelectField
            id="city"
            name="city"
            required
            label={t("city")}
            hint={t("optional")}
            value=""
            hiddenOption={{ value: "", label: t("selectCity") }}
            options={[
              { value: "riyadh", label: "الرياض" },
              { value: "jeddah", label: "جدة" },
              { value: "dammam", label: "الدمام" },
            ]}
          />
        </div>

        <SubmitBtn text={t("confirm")} className="mt-3" />
      </form>
    </>
  );
}
