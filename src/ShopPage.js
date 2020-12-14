import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { signout } from './firebase/auth';
import ShopContent from './ShopContent';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#618833'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ShopPage(props) {
    const classes = useStyles();

    return (
        <Dialog fullScreen open={props.isOpen} onClose={props.handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Shop</Typography>
                    <Button autoFocus color="inherit" onClick={signout}>logout</Button>
                </Toolbar>
            </AppBar>
            <ShopContent user={props.user} />
        </Dialog>
    );
}

export default ShopPage;
