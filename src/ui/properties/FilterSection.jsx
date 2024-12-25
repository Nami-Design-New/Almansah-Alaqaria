import { useState } from "react";
import { useTranslation } from "react-i18next";
import SelectField from "./../form/SelectField";
import DateCalender from "./../modals/DateCalender";
import FilterModal from "./../modals/FilterModal";

export default function FilterSection() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <section className="top_filter">
      <div className="container">
        <div className="filter">
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
          <button className="date_btn" onClick={() => setShowModal(true)}>
            From Wednesday, January 1, 2025
          </button>
          <button className="date_btn" onClick={() => setShowModal(true)}>
            To Thursday, January 2, 2025
          </button>

          <button
            className="filter_btn"
            onClick={() => setShowFilterModal(true)}
          >
            <img src="/icons/filter.svg" className="to_dark" alt="filter" />
          </button>
        </div>
      </div>
      <DateCalender showModal={showModal} setShowModal={setShowModal} />
      <FilterModal
        showModal={showFilterModal}
        setShowModal={setShowFilterModal}
      />
    </section>
  );
}
