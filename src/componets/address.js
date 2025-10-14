import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";

function Address({ formData, setFormData, onNext, onPrevious }) {
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data}));
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" mb={2}>Address</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Street"
        {...register("street", { required: "Street is required" })}
        />
     
      <TextField
        label="City"
        {...register("city", { required: "City is required" })}
        error={!!errors.city}
        helperText={errors.city?.message}
      />

      <TextField
      label="phone-number"
      {...register("phoneNumber", { required: "Phone number is required" })}
      error={!!errors.phoneNumber}
      helperText={errors.phone?.message}
      />
    
      <Box display="flex" gap={2} justifyContent="flex-end" >
        <Button sx={{borderColor: '#7950f2', color: "#7950f2"}} variant="outlined" onClick={onPrevious}>Previous</Button>
        <button type="submit" variand="contained" className="button" >Next</button>
      </Box>
    </Box>
  </form>
  );
}

export default Address;