import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CreateProperty1 from "../../ui/host.jsx/CreateProperty1";

export default function ListProperty() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className="add_property">
      <div className="form_holder">
        <div className="steps_header">
          <div className="title">
            <button onClick={() => navigate(-1)}>
              <i className="fa-regular fa-angle-left"></i>
            </button>
            <h3>{t("add_ad")}</h3>
          </div>
          <div className="actions">
            <p>
              <span>1</span> / 6
            </p>
          </div>
        </div>
        <div className="steps">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className={`step ${activeSlideIndex === i ? "active" : ""}`}
              key={i}
            />
          ))}
        </div>

        <div className="wizard_wrapper">
          <CreateProperty1 setActiveSlideIndex={setActiveSlideIndex} />
        </div>
      </div>
      <div className="banner_holder">
        <img src="/images/banner.jpg" alt="banner" />
        <img src="/images/logo-dark-en.svg" alt="" className="logo" />
      </div>
    </section>
  );
}
