import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getResolvedTheme } from "../redux/slices/themeSlice";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const resolvedTheme = useSelector(getResolvedTheme);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="footer_header">
              <Link className="logo">
                <img
                  src={
                    resolvedTheme === "light"
                      ? lang === "en"
                        ? "/images/logo-en.svg"
                        : "/images/logo.svg"
                      : lang === "en"
                      ? "/images/logo-dark-en.svg"
                      : "/images/logo-dark.svg"
                  }
                  alt="logo"
                />
              </Link>
              <div className="follow">
                <h3>{t("followUs")} </h3>
                <div className="social_media">
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="col">
              <h5>{t("support")}</h5>
              <div className="links">
                <Link to="/contact">{t("contactUs")}</Link>
                <Link to="/help">{t("help")}</Link>
                <Link to="/cancellation-policy">{t("cancellationPolicy")}</Link>
                <Link to="/faqs">{t("faqs")}</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="col">
              <h5>{t("quickLinks")}</h5>
              <div className="links">
                <Link to="/">{t("home")}</Link>
                <Link to="/about">{t("about")}</Link>
                <Link to="/listings">{t("ads")}</Link>
                <Link to="/login">{t("login")}</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="col">
              <h5>{t("categories")}</h5>
              <div className="links">
                <Link to="/properties">{t("dailyRent")}</Link>
                <Link to="/properties-for-sale">{t("propertiesForSale")}</Link>
                <Link to="/real-estate-projects">
                  {t("realEstateProjects")}
                </Link>
                <Link to="/wanted-for-purchase">{t("wantedForPurchase")}</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="col">
              <h5>{t("newsletter")}</h5>
              <p>{t("newsletterDesc")}</p>
              <form className="newsletter-form">
                <input type="email" placeholder={t("email")} />
                <button type="submit">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="col-12 p-2">
            <div className="copy_rights">
              <p>
                &copy; {new Date().getFullYear()} {t("copyright")}
                <Link to="/"> {t("almansah")} </Link>
              </p>
              <div className="links">
                <Link to="/terms-conditions">{t("terms")}</Link>
                <Link to="/privacy-policy">{t("privacy")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
