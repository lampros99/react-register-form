import { useState } from "react";
import UserInformation from "./componets/user-information";
import Address from "./componets/address";
import Confirmation from "./componets/confirmation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.#7950f2",
        px: 2,
      }}
    >
      <Steps />
      <ToastContainer position="top-center" autoClose={2000} />
    </Box>
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
    phoneNumber: "",
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: { xs: "95%", sm: 600, md: 900, lg: 1100 },
      }}
    >
      <IconButton
        onClick={() => setIsOpen((is) => !is)}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      {isOpen && (
        <Paper
          sx={{
            p: { xs: 2, sm: 3, md: 5 },
            borderRadius: 3,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            {[1, 2, 3].map((num) => (
              <Box
                key={num}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: step >= num ? "#7950f2" : "grey.300",
                  color: step >= num ? "#fff" : "#000",
                  fontWeight: "bold",
                }}
              >
                {num}
              </Box>
            ))}
          </Box>

          {step === 1 && (
            <UserInformation
              formData={formData}
              setFormData={setFormData}
              onNext={() => setStep((s) => s + 1)
                
              }
            />
          )}

          {step === 2 && (
            <Address
              formData={formData}
              setFormData={setFormData}
              onNext={() => setStep((s) => s + 1)} 
              onPrevious={() => setStep((s) => s - 1)}
            />
          )}

          {step === 3 && (
            <Confirmation
              formData={formData}
              onPrevious={() => setStep((s) => s - 1)}
              onSubmit={() => {
                toast.success("Registration Successful!");
                setIsOpen(false);
              }}
            />
          )}
        </Paper>
      )}
    </Box>
  );
}
