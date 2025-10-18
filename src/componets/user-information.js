import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";

function UserInformation({ formData, setFormData, onNext }) {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onNext();
  }; 
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" mb={2}>User Information</Typography>
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
      label="First Name"
        
        {...register("firstName", { required: "First name is required"})}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
      label="Last Name"
        {...register("lastName", { required: "Last name is required"})}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        label="Email"
        type="email"
        {...register("email", { 
          required: "Email is required", 
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email"}
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
       <Button sx={{color: "#7950f2", borderColor: "#7950f2"}} variant="outlined" type="submit" className="button">Next</Button>
      </Box>
    </form>
  );
}

export default UserInformation;