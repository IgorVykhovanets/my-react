import {Outlet, useLocation} from "react-router-dom";

import PostDetail from "../../components/PostDetails/PostDetail";


const PostDetailsPage = () => {

    const {state} = useLocation()

    return (
        <div>
            <div>
                <div className={'postDetail'}>{state && <PostDetail post={state}/>}</div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export default PostDetailsPage;