import {Link} from "react-router-dom";

const PostDetail = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <div>{id} --- {title} --- {body}</div>
            <div><button><Link to={'comments'}>GetComments</Link></button></div>
        </div>
    );
};

export default PostDetail;