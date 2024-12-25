import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubmitBtn from "./../form/SubmitBtn";
import DateCalender from "../modals/DateCalender";

export default function ReservationSection() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="col-lg-4 col-12 p-2">
      <div className="reservation_holder">
        <div className="box">
          <h5>
            484 {t("sar")} / {t("night")}
          </h5>
          <h6>
            {t("total")} <span>3</span> {t("night")} <span>2,686.20</span>{" "}
            {t("sar")}
          </h6>
        </div>

        <div className="box">
          <div className="check_in_out">
            <div className="button" onClick={() => setShowModal(true)}>
              <h5>{t("checkIn")}</h5>
              <h6>{t("addDate")}</h6>
            </div>
            <div className="button" onClick={() => setShowModal(true)}>
              <h5>{t("checkOut")}</h5>
              <h6>{t("addDate")}</h6>
            </div>
          </div>
          <SubmitBtn text={t("reserveNow")} className="w-100" />
        </div>

        <div className="box">
          <div className="arrival_departure">
            <div>
              <h5>{t("arrivalTime")}</h5>
              <h6>01:00 PM</h6>
            </div>
            <div>
              <h5>{t("departureTime")}</h5>
              <h6>11:00 PM</h6>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="recipt">
            <ul>
              <li>
                <h6>
                  3 {t("night")} x 484 {t("sar")}
                </h6>
                <div>
                  <span>2,686.20 </span>
                  {t("sar")}
                </div>
              </li>
              <li>
                <h6>{t("cleaningFees")}</h6>
                <div>
                  <span>100.00 </span>
                  {t("sar")}
                </div>
              </li>
              <li>
                <h6>{t("ownerFees")} 5%</h6>
                <div>
                  <span>100.00 </span>
                  {t("sar")}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div className="total">
            <h6>{t("totalPrice")}</h6>
            <div>
              <span>2,686.20</span> {t("sar")}
            </div>
          </div>
        </div>
      </div>

      <DateCalender showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
