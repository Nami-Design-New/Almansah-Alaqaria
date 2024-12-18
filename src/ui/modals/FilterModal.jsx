import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RangeSlider from "../form/RangeSlider";
import InputField from "./../form/InputField";

export default function FilterModal({ showModal, setShowModal }) {
  const { t } = useTranslation();
  return (
    <Modal
      centered
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header className="pb-0" closeButton>
        <h6>{t("filters")}</h6>
      </Modal.Header>
      <Modal.Body className="filter_modal">
        <div className="row">
          {/* property type */}
          <div className="filter_field">
            <div className="head">
              <h6>{t("propertyType")}</h6>
              <button>{t("clear")}</button>
            </div>
            <div className="body">
              <label className="checkbox_field" htmlFor="studio">
                <input type="checkbox" id="studio" />
                <div>إستوديو</div>
              </label>
              <label className="checkbox_field" htmlFor="apartment">
                <input type="checkbox" id="apartment" />
                <div>شقة</div>
              </label>
              <label className="checkbox_field" htmlFor="house">
                <input type="checkbox" id="house" />
                <div>فيلا</div>
              </label>
            </div>
          </div>

          {/* price range */}
          <div className="filter_field">
            <div className="head">
              <h6>{t("priceRange")}</h6>
              <button>{t("clear")}</button>
            </div>
            <div className="body">
              <RangeSlider
                min={5}
                max={2000}
                steps={5}
                value={[5, 2000]}
                minType={t("sar")}
                maxType={t("sar")}
              />

              <div className="d-flex gap-2 w-100">
                <InputField
                  label={t("minPrice")}
                  placeholder="5 SAR"
                  value={5}
                  type="number"
                />
                <InputField
                  label={t("maxPrice")}
                  placeholder="2000 SAR"
                  value={2000}
                  type="number"
                />
              </div>
            </div>
          </div>

          {/* rooms and bedrooms */}
          <div className="filter_field">
            <div className="head">
              <h6>{t("roomsAndBedrooms")}</h6>
              <button>{t("clear")}</button>
            </div>
            <div className="body">
              <div className="counter_field">
                <h6>{t("numberOfPersons")}</h6>

                <div className="counter_input">
                  <button>
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <span>{t("all")}</span>

                  <button>
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="counter_field">
                <h6>{t("bedrooms")}</h6>

                <div className="counter_input">
                  <button>
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <span>+3</span>

                  <button>
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="counter_field">
                <h6>{t("bathrooms")}</h6>

                <div className="counter_input">
                  <button>
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <span>{t("all")}</span>

                  <button>
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* rate */}
          <div className="filter_field">
            <div className="head">
              <h6>{t("rate")}</h6>
              <button>{t("clear")}</button>
            </div>
            <div className="body">
              <label className="checkbox_field" htmlFor="1">
                <input type="checkbox" id="1" />
                <div>
                  <img src="/icons/star.svg" alt="star" />
                  <span>{t("oneOrMore")}</span>
                </div>
              </label>
              <label className="checkbox_field" htmlFor="2">
                <input type="checkbox" id="2" />
                <div>
                  <img src="/icons/star.svg" alt="star" />
                  <span>{t("twoOrMore")}</span>
                </div>
              </label>
              <label className="checkbox_field" htmlFor="3">
                <input type="checkbox" id="3" />
                <div>
                  <img src="/icons/star.svg" alt="star" />
                  <span>{t("threeOrMore")}</span>
                </div>
              </label>
              <label className="checkbox_field" htmlFor="4">
                <input type="checkbox" id="4" />
                <div>
                  <img src="/icons/star.svg" alt="star" />
                  <span>{t("fourOrMore")}</span>
                </div>
              </label>
            </div>
          </div>

          {/* features */}
          <div className="filter_field">
            <div className="head">
              <h6>{t("features")}</h6>
              <button>{t("clear")}</button>
            </div>

            <div className="body">
              <label className="checkbox_field" htmlFor="parking">
                <input type="checkbox" id="parking" />
                <div>
                  <span>موقف سيارة</span>
                </div>
              </label>

              <label className="checkbox_field" htmlFor="elevator">
                <input type="checkbox" id="elevator" />
                <div>
                  <span>مصعد</span>
                </div>
              </label>

              <label className="checkbox_field" htmlFor="pool">
                <input type="checkbox" id="pool" />
                <div>
                  <span>مسبح</span>
                </div>
              </label>

              <label className="checkbox_field" htmlFor="garden">
                <input type="checkbox" id="garden" />
                <div>
                  <span>حديقة</span>
                </div>
              </label>

              <label className="checkbox_field" htmlFor="security">
                <input type="checkbox" id="security" />
                <div>
                  <span>أمن</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="filter_footer">
          <button className="clearAll">{t("clearAll")}</button>
          <Link to="/" className="submit_btn">
            {t("show")} 32 {t("results")}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}
