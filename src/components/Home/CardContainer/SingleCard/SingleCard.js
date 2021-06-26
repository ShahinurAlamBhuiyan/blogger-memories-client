import React from 'react';
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const SingleCard = ({ blog }) => {
    const classes = useStyles();
    const history = useHistory();
    console.log(blog._id);

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>{(blog.author).charAt(0)} </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={blog.author}
                subheader={moment(blog.createdAt).fromNow()}
            />
            <CardMedia
                className={classes.media}
                image={blog.selectedFile}
                title={blog.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                    {blog.title}
                </Typography>
            </CardContent>
            <CardActions className="d-flex justify-between items-center">
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon color="secondary" />
                </IconButton>
                <Button variant="contained" color="primary" onClick={() => history.push(`blog/${blog._id}`)}>Details</Button>
            </CardActions>
        </Card>
    );
};

export default SingleCard;