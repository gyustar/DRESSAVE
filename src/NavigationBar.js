import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import logo from './images/logo.png';
import { signInWithGoogle } from './firebase/auth';

const useStyles = makeStyles(() => ({
    loginButton: {
        margin: '0.5% 0 0.5% 0'
    }
}));

function NavigationBar() {
    const Bar = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1% 2% 1% 2%;
        margin: 0;
        box-sizing: border-box;
    `;

    const Logo = styled.img`
        width: 10rem;
    `;

    const classes = useStyles();

    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#a2cf6e',
                main: '#8bc34a',
                dark: '#618833',
                contrastText: '#fff',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Bar>
                <Logo src={logo} />
                <Button variant="contained" color='primary' onClick={signInWithGoogle} className={classes.loginButton}>LOG IN</Button>
            </Bar>

        </ThemeProvider>
    );
}

export default NavigationBar;