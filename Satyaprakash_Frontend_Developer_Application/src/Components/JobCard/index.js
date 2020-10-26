import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height:'100%',
    display:'inline-block'
  },
  avatar: {
    backgroundColor: red[500],
  },
}));




const JobCard = ({title, company, tags, commitment, isFeatured}) => {
    const classes = useStyles();
    const [color, setColor] = useState('inherit');

    const handleClick = () =>{
        setColor(prevColor =>
            prevColor==='inherit' ? 'secondary' : 'inherit'
            )
    }


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar className={classes.avatar}>
                    R
                </Avatar>
                }
                title={title}
                subheader={company.name}
                style={{height:'12vh'}}
            />
            <CardContent style={{height:'20vh'}} >
                <Chip label={commitment.title} style={{margin:'.2rem'}} />
                {
                    tags.map(({name, id}) =>(
                        <Chip label={name} style={{margin:'.2rem'}} key={id} />
                    ))
                }
                
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleClick}>
                    <FavoriteIcon color={color} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                {
                    isFeatured ? 
                        <IconButton aria-label="promoted">
                            <DoneAllIcon />
                        </IconButton>
                    :
                        null
                }
            </CardActions>
            </Card>
    )
}

export default JobCard
