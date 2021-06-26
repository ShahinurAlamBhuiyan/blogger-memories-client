import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import SingleCard from './SingleCard/SingleCard';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const CardContainer = () => {
    const blogs = useSelector((state) => state.blogs)
    const classes = useStyles();

    console.log(blogs);
    return (
        !blogs.length ? <CircularProgress className={classes.progress} /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch">
                {blogs.map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={4}>
                        <SingleCard blog={blog}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default CardContainer;