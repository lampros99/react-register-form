import { useState } from "react";
import UserInformation from "./componets/user-information";
import Address from "./componets/address";
import Confirmation from "./componets/confirmation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 
export default function App() {
  return (
    <div>
      <Steps />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
  });

  function handleNext() {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.street || !formData.city) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleSubmit() {
    console.log("Submitted data:", formData);

    toast.success("Registration Successful!", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => setIsOpen(false), 2500);
  }

  return (
    <div className="steps-container">
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          {step === 1 && <UserInformation formData={formData} setFormData={setFormData} />}
          {step === 2 && <Address formData={formData} setFormData={setFormData} />}
          {step === 3 && <Confirmation formData={formData} />}

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={step === 3 ? handleSubmit : handleNext}
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
