import { createTheme } from "@mui/material";


const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7950f2",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5f3dc4",
          },
          "& input::placeholder": {
            color: "#9e9e9e",
            opacity: 1,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6c6c6c", 
          "&.Mui-focused": {
            color: "#7950f2",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid transparent",
          transition: "0.2s",
          color: "#7950f2",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#7959f2",
            backgroundColor: "transparent",
            transform: "translateY(-2px)",
          },
        },
      },
    },
  },
});

export default theme;