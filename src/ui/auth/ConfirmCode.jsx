import { useTranslation } from "react-i18next";
import SubmitBtn from "./../form/SubmitBtn";
import OtpContainer from "../form/OtpContainer";
import ResendCode from "../form/ResendCode";

export default function ConfirmCode({ formData, setFormData, setAuthStep }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="auth_header">
        <h5>{t("enterOtp")}</h5>
        <p>
          {t("enterotpDescforPhone")} <b>{formData.login}</b>
          <span onClick={() => setAuthStep("login")}>{t("edit")}</span>
        </p>
      </div>

      <form>
        <OtpContainer formData={formData} setFormData={setFormData} />
        <ResendCode />
        <SubmitBtn text={t("confirm")} />
      </form>

      <div className="social_login">
        <button className="stroked">
          <img src="/icons/whatsapp.svg" className="to_dark" alt="google" />
          <span>{t("recieveCodeOnWhatsApp")}</span>
        </button>
      </div>
    </>
  );
}
