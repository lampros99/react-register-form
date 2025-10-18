import { ThemeProvider } from '@mui/material'
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import Steps from "./componets/Steps"
import theme from "./componets/theme"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "honeydew",
        color:"#7250f2",
        px: 2,
      }}
    >
      <Steps />
      
    </Box>
  </ThemeProvider>
  );
}



