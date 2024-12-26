import { useTranslation } from "react-i18next";
import SelectField from "../form/SelectField";
import InputField from "../form/InputField";
import SubmitBtn from "../form/SubmitBtn";

export default function CreateProperty1() {
  const { t } = useTranslation();
  return (
    <form className="row">
      <div className="col-lg-6 col-12 p-2">
        <SelectField
          value=""
          id="property_type"
          name="property_type"
          label={t("propertyType")}
          hiddenOption={{ value: "", label: t("propertyType") }}
          options={[
            { value: "studio", label: "إستودبو" },
            { value: "apartment", label: "شقة" },
            { value: "house", label: "فيلا" },
          ]}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          id="property_name"
          name="property_name"
          label={t("propertyName")}
          placeholder={t("propertyNamePlaceholder")}
        />
      </div>

      <div className="col-12 p-2">
        <InputField
          as="textarea"
          id="description"
          name="description"
          label={t("propertyDescription")}
          placeholder={t("propertyDescriptionPlaceholder")}
        />
      </div>

      <div className="col-12 p-2">
        <h6 className="other_info_title">
          {t("otherInfo")} <span>{t("optional")}</span>
        </h6>
        <div className="other_info">
          <div className="row">
            <div className="col-12 p-2"></div>
            <InputField
              id="area"
              name="area"
              type="number"
              img={"/icons/size.svg"}
              label={t("area")}
              placeholder={"00"}
            />
          </div>
          <div className="col-12 p-2">
            <InputField
              id="rooms"
              name="rooms"
              type="number"
              img={"/icons/beds.svg"}
              label={t("rooms")}
              placeholder={"00"}
            />
          </div>
          <div className="col-12 p-2">
            <InputField
              id="baths"
              name="baths"
              type="number"
              img={"/icons/baths.svg"}
              label={t("baths")}
              placeholder={"00"}
            />
          </div>
        </div>
      </div>

      <div className="col-12 p-2 mt-3">
        <SubmitBtn text={t("next")}/>
      </div>
    </form>
  );
}
