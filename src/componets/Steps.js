import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Box, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserInformation from "./user-information";
import Address from "./address";
import Confirmation from "./confirmation";

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
        maxWidth: { xs: "95%", sm: 600, md: 900, lg: 600 },
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
            boxShadow: 6,
            bgcolor: "#f7f7f7",
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
      <ToastContainer position="top-center" autoClose={2000} />
    </Box>
    
  );
}

export default Steps;