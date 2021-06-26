import React, { useEffect } from 'react';
import HeaderContent from './Header/HeaderContent';
import CardContainer from './CardContainer/CardContainer';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../actions/blogs';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch])

    return (
        <>
            <HeaderContent />
            <div style={{display: "flex", justifyContent: "center", marginLeft: "auto"}}>
                <CardContainer />
            </div>
        </>
    );
};

export default Home;