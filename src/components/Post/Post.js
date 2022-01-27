import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <div className={'postList'}>{id} --- {title} --- <button><Link to={`${id}`} state={post}>detailsPost</Link></button>
            </div>
        </div>
    );
};

export default Post;