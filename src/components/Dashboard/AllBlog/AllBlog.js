import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../../actions/blogs';
import moment from 'moment';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const AllBlog = () => {
    const dispatch = useDispatch();

    const blogs = useSelector((state) => state.blogs);
    console.log(blogs)
    const classes = useStyles();

    return (
        <div className='m-5 pt-5 '>
            <h1 className="text-center text-xl">All Published Blog List</h1>
            <TableContainer component={Paper} className='orderTableContainer'>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Author Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Blog Title</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Published</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            blogs.map(blog => (
                                <TableRow key={blog._id}>
                                    <TableCell>
                                        {blog.author}
                                    </TableCell>
                                    <TableCell>{blog.title}</TableCell>
                                    <TableCell>{moment(blog.createdAt).fromNow()}</TableCell>
                                    <TableCell  onClick={() => dispatch(deleteBlog(blog._id))}><button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faTrashAlt} /></button> </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllBlog;