import { Box, CssBaseline, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    marginTop: {
        marginTop: 7,
    }
}));

export default function Index() {
    const classes = useStyles();
    useEffect(() => {
        callAPI();
    }, []);
    const [today, setToday] = useState("");
    const callAPI = async () => {
        const { data } = await axios.get("https://covid19.th-stat.com/api/open/today");
        await setToday(data);
        console.log(today);
    };

    return (
        <Layout date={today?.UpdateDate}>
            <CssBaseline />
            <>
                {today && (
                    <div className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.marginTop}>
                                <Typography align="right">ข้อมูลวันที่ : {today.UpdateDate}</Typography>
                                <Typography variant="subtitle2" align="right">
                                    ข้อมูลจาก :
                                    <a href={today.Source} color="inherit" target="_blank">
                                        {today.Source}
                                    </a>
                                </Typography>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>
                                    <Typography>จำนวนผู้ติดเชื้อสะสมทั้งหมด</Typography>
                                    <Typography variant="h3">{today.Confirmed}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>
                                    <Typography>จำนวนผู้ติดเชื้อรายใหม่</Typography>
                                    <Typography variant="h3">{today.NewConfirmed}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>
                                    <Typography>จำนวนผู้เสียชีวิต</Typography>
                                    <Typography variant="h3">{today.NewDeaths}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>
                                    <Typography>จำนวนผู้ป่วยที่รักษาหาย</Typography>
                                    <Typography variant="h3">{today.NewRecovered}</Typography>
                                </Paper>
                            </Grid>

                        </Grid>
                    </div>
                )}
            </>
        </Layout>
    );
}
