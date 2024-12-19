import { useTranslation } from "react-i18next";
import { handlePhoneChange } from "../../utils/utils";
import { Link } from "react-router-dom";
import PhoneField from "../form/PhoneField";
import SubmitBtn from "../form/SubmitBtn";

export default function Login({ setFormData, formData }) {
  const { t } = useTranslation();

  return (
    <div className="auth_form">
      <div className="auth_header">
        <h5>{t("authTitle")}</h5>
        <p>{t("authDesc")}</p>
      </div>

      <form>
        <PhoneField
          placeholder="Enter phone number"
          required
          id="mobile_number"
          name="mobile_number"
          value={formData.mobile_number}
          onChange={(e) => handlePhoneChange(e, "mobile_number", setFormData)}
        />
        <SubmitBtn text={t("continue")} />
      </form>

      <div className="social_login">
        <div className="line">
          <span>{t("or")}</span>
        </div>

        <button className="stroked">
          <img src="/icons/google.svg" className="to_dark" alt="google" />
          <span>{t("continueWithGoogle")}</span>
        </button>
        <button className="stroked">
          <img src="/icons/apple.svg" className="to_dark" alt="apple" />
          <span>{t("continueWithApple")}</span>
        </button>
        <button className="stroked">
          <img src="/icons/email.svg" className="to_dark" alt="email" />
          <span>{t("continueWithEmail")}</span>
        </button>

        <p className="agreeToPrivacy">
          {t("byContinueYouAgreeTo")} <Link to="/terms">{t("terms")}</Link>{" "}
          {t("and")} <Link to="/privacy">{t("privacy")}</Link>
        </p>
      </div>
    </div>
  );
}
