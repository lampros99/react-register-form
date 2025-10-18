import { Box, Typography, Button } from "@mui/material";

function Confirmation({ formData, onPrevious, onSubmit }) {
  return (
    <Box>
      <Typography variant="h5" mb={2}>Confirmation</Typography>
      <Typography mb={2}>Please review your information before submitting.</Typography>

      <Box mb={2}>
        <Typography variant="h6">User Information</Typography>
        <Typography><strong>First Name:</strong> {formData.firstName}</Typography>
        <Typography><strong>Last Name:</strong> {formData.lastName}</Typography>
        <Typography><strong>Email:</strong> {formData.email}</Typography>
        </Box>

        <Box mb={2}>
        <Typography variant="h6">Address</Typography>
        <Typography><strong>Street:</strong> {formData.street}</Typography>
        <Typography><strong>City:</strong> {formData.city}</Typography>
        <Typography><strong>Phone Number:</strong> {formData.phoneNumber}</Typography>
        </Box>
    
        <Box display="flex" gap={2} justifyContent="flex-end">
        <Button sx={{borderColor: '#7950f2', color: "#7950f2"}} variant="outlined" onClick={onPrevious}>Previous</Button>
        <Button sx={{borderColor: '#7950f2', color: "#7950f2"}} variant="outlined" onClick={onSubmit}>Submit</Button>
        </Box>
      
    </Box>
  );
}


export default Confirmation;