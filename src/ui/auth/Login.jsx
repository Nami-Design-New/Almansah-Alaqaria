import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleChange } from "./../../utils/utils";
import PhoneField from "../form/PhoneField";
import SubmitBtn from "../form/SubmitBtn";
import InputField from "../form/InputField";

export default function Login({ setFormData, formData }) {
  const { t } = useTranslation();
  const [loginType, setLoginType] = useState("phone");

  const handleChangeType = () => {
    loginType === "phone" ? setLoginType("email") : setLoginType("phone");
  };

  const handleChangePhone = (value) => {
    setFormData((prev) => ({ ...prev, login: value }));
  };

  return (
    <div className="auth_form">
      <div className="auth_header">
        <h5>{t("authTitle")}</h5>
        <p>{t("authDesc")}</p>
      </div>

      <form>
        {loginType === "phone" ? (
          <PhoneField
            placeholder="Enter phone number"
            required
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChangePhone}
          />
        ) : (
          <InputField
            placeholder="Enter Your Email"
            type="email"
            required
            name="email"
            onChange={(e) => handleChange(e, setFormData)}
          />
        )}
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

        <button className="stroked" onClick={handleChangeType}>
          <img
            src={
              loginType === "email" ? "/icons/device.svg" : "/icons/email.svg"
            }
            className="to_dark"
            alt="email"
          />
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
