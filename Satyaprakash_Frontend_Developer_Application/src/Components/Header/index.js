import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    header: {
        display:'flex',
        flexGrow:1,
        height:'4rem',
        overflow:'hidden',
        backgroundColor:'white',
        zIndex:'100',
        fontFamily: 'Quicksand, sans-serif',
        padding: '0 5rem',
        position:'sticky',
        top:0
    },
    title : {
        fontSize:'2rem',
    },

    nav :{
        fontSize:'1rem',
    }

}));



const Header = () => {
  const classes = useStyles();
    return (
        <Grid container
            className={classes.header}
            justify="space-evenly"
            alignItems="center">
            <Hidden smDown>
                <Grid item md={4} className={classes.title} >
                    Higher
                </Grid>
                <Grid item md={4} container alignItems="center" className={classes.nav}>
                    <Grid item xs={4} style={{color:'#00A5EC'}}>
                        Find Job
                    </Grid>
                    <Grid item xs={4}>
                        Find Company
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:'2rem'}}>
                        Find Salaries
                    </Grid>
                </Grid>
                <Grid item md={4} container alignItems="center" justify="flex-end">
                    <Grid item xs={6}>
                        <IconButton style={{marginLeft:'7rem'}}>
                            <Avatar alt="Bill" src="https://qph.fs.quoracdn.net/main-qimg-d93e4546f1215e3e2b0fe23805efb15d" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item className={classes.title} >
                        Higher
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default Header
