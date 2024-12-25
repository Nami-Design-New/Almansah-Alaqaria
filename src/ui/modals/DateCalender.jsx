import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Calendar } from "react-multi-date-picker";

export default function DateCalender({ showModal, setShowModal }) {
  const { t } = useTranslation();

  return (
    <Modal
      centered
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header className="pb-0" closeButton>
        <h6>{t("selectDates")}</h6>
      </Modal.Header>
      <Modal.Body className="calender_modal">
        <p>{t("selectDatesDesc")}</p>
        <div className="calender_wrapper">
          <Calendar range numberOfMonths={2} minDate={new Date()} />
        </div>
      </Modal.Body>
    </Modal>
  );
}
