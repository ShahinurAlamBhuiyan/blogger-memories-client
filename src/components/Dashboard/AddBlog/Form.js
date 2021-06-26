import React, { useState } from 'react';
import useStyles from './styles';
import { Button, Typography, Paper, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createBlog } from '../../../actions/blogs';

const Form = () => {
    const [blogData, setBlogData] = useState({ author: '', title: '', content: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createBlog(blogData));
        history.push("/home")
    }
console.log(blogData)
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating a Blog</Typography>

                <TextField
                    name="Author Name"
                    variant="outlined"
                    label="Author"
                    fullWidth value={blogData.author}
                    onChange={(e) => setBlogData({ ...blogData, author: e.target.value })} />

                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth value={blogData.title}
                    onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} />

                <TextField
                    name="content"
                    variant="outlined"
                    label="Content"
                    fullWidth value={blogData.content}
                    onChange={(e) => setBlogData({ ...blogData, content: e.target.value })} />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setBlogData({ ...blogData, selectedFile: base64 })} />

                    <Button
                        className={classes.buttonSubmit}
                        variant="contained" color="primary"
                        size="large" fullWidth
                        type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </Paper>
    );
};

export default Form;