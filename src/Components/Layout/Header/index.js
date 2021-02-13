import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    marginHeader: {
        marginTop: 7,
    }
}));

export default function Index({ date, handleThemeChange }) {
    const classes = useStyles();
    const [darkState, setDarkState] = useState(false);
    const handleClick = () => {
        setDarkState(!darkState);
        handleThemeChange(darkState);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.marginHeader} variant="h6" color="inherit">
                                อัพเดตผู้ป่วยโควิด 19 ใหม่ในไทย
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="right">
                                <IconButton onClick={handleClick}>{darkState ? <BrightnessHighIcon /> : <Brightness4Icon />}</IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
