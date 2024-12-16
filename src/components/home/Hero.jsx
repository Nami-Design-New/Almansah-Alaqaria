import { useTranslation } from "react-i18next";
import FilterBox from "./FilterBox";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-2 mb-3">
            <h1>{t("searchForYourDreamHome")}</h1>
            <p>{t("searchForYourDreamHomeDesc")}</p>
          </div>
          <div className="col-lg-8 col-12 p-2">
            <FilterBox />
          </div>
        </div>
      </div>
    </section>
  );
}
