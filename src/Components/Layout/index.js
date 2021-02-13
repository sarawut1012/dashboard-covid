import Header from "./Header";
import Container from "@material-ui/core/Container";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { orange, lightBlue, deepPurple, deepOrange, grey, blueGrey, lightGreen } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Index({ children, date = null }) {
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? grey[800] : lightGreen[800];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

    const theme = createMuiTheme({
        typography: {
            fontFamily: ["Krub"].join(","),
        },
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor,
            },
            secondary: {
                main: mainSecondaryColor,
            },
        },
    });
    const handleThemeChange = (val) => {
        setDarkState(!val);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header date={date} handleThemeChange={handleThemeChange} />
            <Container>{children}</Container>
        </ThemeProvider>
    );
}
