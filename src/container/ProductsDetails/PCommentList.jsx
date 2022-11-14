import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { commentDetailslist } from '../../Redux/actions/comments-actions';

const PCommentList = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentDetailslist(id));
    }, [dispatch, id]);

    const commentList = useSelector((state) => state.commentsList);
    const { loading, comments } = commentList;

    return (
        <div className='comments'>
            <h4 className='details-title mb-4'><span>({comments.length})</span> نظر مشتری</h4>
            {comments.length == 0 ? <p className='text-danger'>هیج نظری برای این محصول ثبت نشده است ...</p> : loading ? <p>لطفا صبر کتید...</p> : comments.map((item) => {
                return (
                    <>
                        <div className='d-flex align-items-start mt-4' key={item.id}>
                            <img src="/images/null-profile.png" className='comment-profile-img' alt="" />
                            <div className='comment-text mx-3 border'>
                                <span>مدیر – {item.DateTime}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default PCommentList