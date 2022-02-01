import Button from "../Button/Button";

import './paginator.modules.css'

const Paginator = ({info: {pages}}) => {

    let pagesArr = [];

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
    }

    return (
        <div className={'PagButton'}>
            {pagesArr.map(page => <Button key={page} to={`?page=${page}`} isNav={true}>{page}</Button>)}
        </div>
    );
};

export default Paginator;