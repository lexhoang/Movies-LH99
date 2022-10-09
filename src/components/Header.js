import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useState, useEffect } from "react";


export default function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <div style={{
            position: "fixed", width: "100%", zIndex: 10,
            backgroundColor: `${scroll ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.3)"}`, color: "white"
        }}>
            <Grid container py={1} style={{ borderBottom: "1px solid #424242" }}>
                <Grid item md={6} xs={6} sx={{ pl: 2 }} >
                    <Typography component={Link} to="/" variant="h4" style={{ textDecoration: "none", color: "white", fontSize: "30px" }} fontWeight={900}>LH FILM</Typography>
                </Grid>

                <Grid item md={6} xs={6} textAlign="right" sx={{ pr: 2 }}>
                    <button className="btn-login">Login</button>
                </Grid>
            </Grid>

            <Grid container pb={1}>
                <Grid item md={3}></Grid>
                <Grid item md={9} xs={12}>
                    <Grid container>
                        <Grid item md={2} xs={3} textAlign="center" >
                            <Button component={Link} style={{ textDecoration: "none", color: "white", }} to="/">
                                <Grid container >
                                    <Grid item md={6} xs={12}><HomeIcon></HomeIcon></Grid>
                                    <Grid item md={6} xs={12}>
                                        HOME
                                    </Grid>
                                </Grid>
                            </Button >
                        </Grid>
                        <Grid item md={2} xs={3} textAlign="center">
                            <Button component={Link} style={{ textDecoration: "none", color: "white", }} to="/treading">
                                <Grid container >
                                    <Grid item md={6} xs={12}><WhatshotIcon></WhatshotIcon> </Grid>
                                    <Grid item md={6} xs={12}>
                                        TRENDING
                                    </Grid>
                                </Grid>

                            </Button>
                        </Grid>
                        <Grid item md={2} xs={3} textAlign="center">
                            <Button component={Link} style={{ textDecoration: "none", color: "white", }} to="/movies">
                                <Grid container >
                                    <Grid item md={6} xs={12}> <GroupWorkIcon></GroupWorkIcon> </Grid>
                                    <Grid item md={6} xs={12}>
                                        MOVIES
                                    </Grid>
                                </Grid>

                            </Button>

                        </Grid>
                        <Grid item md={2} xs={3} textAlign="center">
                            <Button component={Link} style={{ textDecoration: "none", color: "white", }} to="/tvseries">
                                <Grid container >
                                    <Grid item md={6} xs={12}><LiveTvIcon></LiveTvIcon> </Grid>
                                    <Grid item md={6} xs={12}>
                                        TVSERIES
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
