import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/slice/comments.slice";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    } ,[])

    const {comments} = useSelector(state => state['commentsReducer']);



    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;