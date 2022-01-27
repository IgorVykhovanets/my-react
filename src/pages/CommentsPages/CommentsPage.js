import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Comments from "../../components/Comments/Comments";

const CommentsPage = () => {

    const {id} = useParams()

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postsService.getByIdComments(id).then(comments => setComments(comments));
    },[id])


    return (
        <div>
            {comments.map(comments => <Comments key={comments.id} comment={comments}/>)}
        </div>
    );
};

export default CommentsPage;