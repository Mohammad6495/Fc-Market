import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { blogsListMainAction } from '../../../Redux/actions/blogs-actions'


const BlogsList = () => {

    const dispatch = useDispatch();
    const data = [];
    useEffect(() => {
        dispatch(blogsListMainAction());
    }, [dispatch]);
    const blogsListMain = useSelector((state) => state.blogsList);

    const { loading, blogs } = blogsListMain;

    return (
        <div className='blog-list-main'>
            <div className='container'>
                <div className='row'>
                    {loading ? <p className='text-center'>در حال دریافت اطلاعات...</p> : blogs.splice(0, 2).map((item) => {
                        return (
                            <div className='col-lg-6 mb-lg-0 mb-3' key={item.id}>
                                <div className='blog-list-item card'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img src={item.images} className='img-fluid' />
                                        </div>
                                        <div className='col-sm-6 py-2'>
                                            <div className='blog-info'>
                                                <h2>{item.title}</h2>
                                                <span>10 مرداد 1400</span>
                                                <div className='blog-des'>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                            <div className='blog-link d-flex justify-content-between'>
                                                <a href={`/${item.id}`} className='d-flex nav-link'>خواندن ادامه مطلب<span className='d-flex align-items-center'><i className='fa fa-long-arrow-left mx-1'></i></span></a>
                                                <a href='#' className='nav-link'><i className='fa fa-comment mx-1'></i><span>6</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default BlogsList