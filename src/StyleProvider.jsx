import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

export default function StyleProvider({ children }) {
    const theme = createTheme({
        palette: {
            mode: useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
        }, components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#171717',
                    }
                }
            }, MuiBottomNavigationAction: {
                styleOverrides: {
                    label: {
                        fontFamily: 'SF Pro Display, sans-serif',
                    }
                }
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}