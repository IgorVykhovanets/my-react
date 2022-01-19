import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(comments => setComments(comments));
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;