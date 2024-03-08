const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        primary:{
            main : "#e91e63"
        },
        secondary:{
            main : "#5A20CB"
        },
        black:{
            main : "#242B2E"
        },
        background:{
            main : "#000000",
            default : "#0D0D0D",
            paper : "#0D0D0D"
        },
        textColor : {
            main : "#111111"
        }
    }
})
export const lightTheme = createTheme({
    palette:{
        mode: "light",
        primary: {
            main: '#FFA500'
        },
        secondary: {
            main: '#e91e63'
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF'
        },
        text: {
            primary: '#242B2E',
            secondary: '#111111'
        }
    }
})