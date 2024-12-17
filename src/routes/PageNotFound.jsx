import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className="page_not_found">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="error_container">
              <img src="/icons/error.svg" alt="not found" />
              <h1>{t("page_not_found.title")}</h1>
              <p>{t("page_not_found.description")}</p>
              <Link to="/">{t("page_not_found.button")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
