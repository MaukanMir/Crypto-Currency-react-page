import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
title: {
    flex:1,
    color:"gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: 'pointer'
}
}));

const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark"
        },
    });

const Header = () => {
    const classes = useStyles()
    const history = useHistory();
    const { currency, setCurrency} = CryptoState()

    return (
        <ThemeProvider theme = {darkTheme}> 
        <AppBar color ="transparent" position ="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" onClick= {() => history.push("/")} className ={classes.title}>Crypto Hunter</Typography>
                    <Select 
                    variant ="outlined"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style ={{
                        width:100,
                        height:40,
                        marginRight:15,
                    
                    }} 
                    value ={currency} onChange ={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value ={"USD"}>USD</MenuItem>
                        <MenuItem value ={"CAD"}>CAD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header
