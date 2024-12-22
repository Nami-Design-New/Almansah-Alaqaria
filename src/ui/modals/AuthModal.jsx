import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../../redux/slices/showAuthModal";
import Login from "../auth/Login";
import ConfirmCode from "../auth/ConfirmCode";

export default function AuthModal() {
  const { show } = useSelector((state) => state.showAuthModal);
  const dispatch = useDispatch();

  const [authStep, setAuthStep] = useState("confirm-code");
  const [formData, setFormData] = useState({
    login: "+996 (000) 000 000",
  });

  return (
    <Modal
      centered
      size="lg"
      show={show}
      backdrop="static"
      onHide={() => dispatch(setShowAuthModal(false))}
    >
      <Modal.Body className="auth_modal">
        <div
          className="modal_close_btn"
          onClick={() => dispatch(setShowAuthModal(false))}
        />

        <div className="auth_img">
          <img src="/images/auth.jpg" alt="" />
        </div>

        {authStep === "login" && (
          <Login
            formData={formData}
            setFormData={setFormData}
            setAuthStep={setAuthStep}
          />
        )}

        {authStep === "confirm-code" && (
          <ConfirmCode
            formData={formData}
            setFormData={setFormData}
            setAuthStep={setAuthStep}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}
