import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import JobCard from '../JobCard';
import { withRouter } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';




const useStyles = makeStyles((theme) => ({
    container :{
        padding:'3rem 1rem',
    },
    formControl: {
        margin: theme.spacing(3),
        
    },
    formLabel : {
        fontFamily: 'Raleway, sans-serif',
        marginBottom:'1rem',
        fontWeight:'700'
    }


}));


const GET_JOB = gql`
  query GetJobs {
    jobs {
        id
        title
        isFeatured
        slug
        company {
            name, 
            slug
        }
        tags (first:5) {
            name
            id
        }
        commitment {
            title
        }
    }  
}
`;





const Content = (props) => {
    const classes = useStyles();

    const handleClick = (jobSlug,company ) =>{
        const { slug } = company
        props.history.push(`/${slug}/${jobSlug}`);
    }

    function GetJob(){
        const { loading, error, data } = useQuery(GET_JOB);
    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        
        return data.jobs.map(({id, title, company, tags, commitment, isFeatured, slug})=>(
            <Grid item xs={12} sm={12} md={6} lg={4} container justify="center" key={id} onClick={()=>handleClick(slug,company)} >
                <Grid item>
                    <JobCard title={title} company={company} tags={tags} 
                    commitment={commitment} isFeatured={isFeatured} />
                </Grid>
            </Grid>
        ))
    }

    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item sm={3} container direction="column">
                        <Grid item xs={12}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend" className={classes.formLabel}>Type of Employment</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox  name="gilad" />}
                                            label="Full Time"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox  name="jason" />}
                                            label="Part Time"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="antoine" />}
                                            label="Remote"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="antoine" />}
                                            label="Internship"
                                        />
                                    </FormGroup>
                            </FormControl>
                        </Grid>
                        
                    </Grid>

                    <Grid item sm={9} container spacing={2} justify="flex-start" >
                        <GetJob />
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    )
}

export default withRouter(Content)
