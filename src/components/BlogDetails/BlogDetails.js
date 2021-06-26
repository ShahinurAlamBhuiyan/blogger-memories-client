import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: '50px'
    },
});

const BlogDetails = () => {
    const blogs = useSelector((state) => state.blogs)
    const { id } = useParams();
    const blog = blogs.find(blog => blog._id === id)
    console.log(blog)
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={blog.selectedFile}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{blog.content}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6">Author- {blog.author}</Typography>
                        <Typography variant="p" color="textSecondary">Published {moment(blog.createdAt).fromNow()}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
};

export default BlogDetails;