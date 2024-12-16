import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SelectField from "../../ui/form/SelectField";
import SubmitBtn from "../../ui/form/SubmitBtn";

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useSelector((state) => state.theme);

  return (
    <section className="hero_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2 mb-3">
            <h1>{t("searchForYourDreamHome")}</h1>
            <p>{t("searchForYourDreamHomeDesc")}</p>
          </div>
          <div className="col-lg-8 col-12 p-2">
            <div className="search_box">
              <form className="search_form">
                <SelectField
                  value=""
                  id="property_type"
                  name="property_type"
                  hiddenOption={{ value: "", label: t("city") }}
                  options={[
                    { value: "riyadh", label: "الرياض" },
                    { value: "jeddah", label: "جدة" },
                    { value: "dammam", label: "الدمام" },
                    { value: "makkah", label: "مكة المكرمة" },
                    { value: "madinah", label: "المدينة المنورة" },
                    { value: "khobar", label: "الخبر" },
                    { value: "taif", label: "الطائف" },
                    { value: "abha", label: "أبها" },
                  ]}
                />
                <SelectField
                  value=""
                  id="property_type"
                  name="property_type"
                  hiddenOption={{ value: "", label: t("propertyType") }}
                  options={[
                    { value: "studio", label: "إستودبو" },
                    { value: "apartment", label: "شقة" },
                    { value: "house", label: "فيلا" },
                  ]}
                />
                <SubmitBtn
                  text={t("search")}
                  img={
                    theme === "light"
                      ? "/images/icons/search.svg"
                      : "/images/icons/search-dark.svg"
                  }
                />
                <button className="filter_btn">
                  <img
                    src={
                      theme === "light"
                        ? "/images/icons/filter.svg"
                        : "/images/icons/filter-dark.svg"
                    }
                    alt="filter"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
