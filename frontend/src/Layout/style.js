import { makeStyles, alpha } from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none",
        width: "100%"
    },
    toolBar: {
        backgroundColor: "#EFA80A",
    },
    image: {
        marginRight: "-5px",
    },
    linkNav: {
        textDecoration: "none",
        color: "white",
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    menuItem: {
        textDecoration: "none",
    },
    hideBurger: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },
    burgerLink: {
        backgroundColor: "red"
    }
}));