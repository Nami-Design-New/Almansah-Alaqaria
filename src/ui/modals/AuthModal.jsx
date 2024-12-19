import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../../redux/slices/showAuthModal";
import Login from "../auth/Login";

export default function AuthModal() {
  const { show } = useSelector((state) => state.showAuthModal);
  const dispatch = useDispatch();
  const [authStep, setAuthStep] = useState("login");
  const [formData, setFormData] = useState({
    mobile_number: "",
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
            setAuthStep={setAuthStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}
