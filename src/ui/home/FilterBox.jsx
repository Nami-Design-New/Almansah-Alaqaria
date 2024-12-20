import { useState } from "react";
import { useTranslation } from "react-i18next";
import SelectField from "../../ui/form/SelectField";
import SubmitBtn from "../../ui/form/SubmitBtn";
import FilterModal from "../../ui/modals/FilterModal";

export default function FilterBox() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  return (
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
        <SubmitBtn text={t("search")} img="/icons/search.svg" />
        <button
          className="filter_btn"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          <img src="/icons/filter.svg" className="to_dark" alt="filter" />
        </button>
      </form>
      <FilterModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
