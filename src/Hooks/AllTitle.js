import { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `GOL | ${title}`;
    }, [title])
};

export default AllTitle;