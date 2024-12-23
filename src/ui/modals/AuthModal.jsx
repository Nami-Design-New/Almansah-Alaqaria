import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../../redux/slices/showAuthModal";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ConfirmCode from "../auth/ConfirmCode";

export default function AuthModal() {
  const { show } = useSelector((state) => state.showAuthModal);
  const dispatch = useDispatch();

  const [authStep, setAuthStep] = useState("login");
  const [formData, setFormData] = useState({
    login: "+966 (000) 000 000",
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

        <div className={`auth_img ${authStep === "register" ? "d-none" : ""}`}>
          <img src="/images/auth.jpg" alt="" />
        </div>

        <div
          className={`auth_form ${authStep === "register" ? "register" : ""}`}
        >
          {authStep === "login" && (
            <Login
              formData={formData}
              setFormData={setFormData}
              setAuthStep={setAuthStep}
            />
          )}

          {authStep === "confirm" && (
            <ConfirmCode
              formData={formData}
              setFormData={setFormData}
              setAuthStep={setAuthStep}
            />
          )}

          {authStep === "register" && (
            <Register
              formData={formData}
              setFormData={setFormData}
              setAuthStep={setAuthStep}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
