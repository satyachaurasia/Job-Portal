import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';   
import { gql, useQuery } from '@apollo/client';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container :{
        margin:'5rem'
    }
}));




const JobDetail = (props) => {
    const classes = useStyles();

    const GET_JOB_DETAIL = gql`
        query GetJobsDetail($companySlug:String!, $jobSlug:String!) {
            job(input:{
                jobSlug: $jobSlug,
                companySlug: $companySlug
            }){
                id
                title
                isFeatured
                description
                applyUrl
                isFeatured
                postedAt
                company{
                    name
                }
                commitment {
                  title
                }
                cities {
                  name
                }
                remotes {
                  name
                  type
                }
                tags {
                  name
                  id
                }
              }
        }
        `;

    function GetJobDetail(){
        const { loading, error, data } = useQuery(GET_JOB_DETAIL, {
            variables:{jobSlug:props.match.params.jobSlug, companySlug:props.match.params.companySlug},
        });
    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        
        return  <Grid container>
                    <Grid item xs={6} container justify="center" direction="column">
                        <p style={{fontSize:'1.5rem', fontFamily: 'Raleway, sans-serif', margin:5, fontWeight:700}}>{data.job.title}</p>
                        <p style={{fontSize:'1.2rem', fontFamily: 'Raleway, sans-serif', margin:5, fontWeight:600}}>{data.job.company.name}</p>
                    </Grid>
                    <Grid item xs={6} container justify="flex-start" direction="column" alignItems="flex-end">
                        <Avatar>
                            R
                        </Avatar>
                        {
                            data.job.isFeatured ? 
                                <IconButton aria-label="promoted">
                                    <DoneAllIcon />
                                </IconButton>
                            :
                                null
                        }

                    </Grid>
                    <Grid item xs={12}>
                        { data.job.cities ?
                                    <p style={{fontSize:'1rem', fontFamily: 'Raleway, sans-serif', margin:5}}>{data.job.cities.map(city=>
                                        city.name)}</p> 
                                    : <HomeIcon />
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Chip label={data.job.commitment.title} style={{margin:'.2rem'}} />
                        {
                            data.job.tags.map(({name, id}) =>(
                                <Chip label={name} style={{margin:'.2rem'}} key={id} />
                            ))
                        }
                    </Grid>

                    <Grid item xs={12}>
                        <Divider style={{margin:'2rem'}} />
                        <div style={{fontFamily: 'Raleway, sans-serif', textAlign: 'justify', fontSize:'1rem'}}>
                            {data.job.description}
                        </div>
                    </Grid>

                    <Grid item xs={12} container justify="center" alignItems="center">
                        <Button variant="contained" color="primary" href={data.job.applyUrl} size="large" 
                        style={{fontFamily: 'Raleway, sans-serif', fontSize:'1rem', 
                            fontWeight:700, margin:'2rem', padding:'.7rem 3rem',
                            backgroundColor:'#00A5EC'}}>
                            Apply
                        </Button>
                    </Grid>

                    
                    

                    
                </Grid>
    }

    return (
        <div className={classes.container}>
            <Container maxWidth="md">
                <GetJobDetail />
            </Container>
        </div>
        
    )
}

export default JobDetail
