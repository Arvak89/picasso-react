import {postAPI} from "../../api/store/api/PostApi.jsx";
import PostItem from "../../../features/PostItem/PostItem.jsx";
import "./ListPost.scss"
import {useEffect, useState} from "react";

const ListPosts = () => {

    const [limit, setLimit] = useState(20)
    const [start, setStart] = useState(0)
    const {data, isLoading, isError, isFetching} = postAPI.useGetPostsQuery({
        limit: limit,
        start: start
    } )

    useEffect(() => {

        document.addEventListener("scroll", onScrollDown);
        document.addEventListener("scroll", onScrollUp);

        return () => {
            document.removeEventListener("scroll", onScrollDown);
            document.removeEventListener("scroll", onScrollUp);
        };
    }, [start, isFetching]);

    const onScrollDown = (e) => {

        const scrolledToBottom =
            e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100  && start < 80
        if (scrolledToBottom && !isFetching) {
            console.log("Down");
            setStart(start + 4);
            console.log(start)
        }
    };

    const onScrollUp = (e) => {

        const scrolledToTop =
            e.target.documentElement.scrollTop < 100 && start > 0
        if (scrolledToTop && !isFetching) {
            console.log("Up");
            setStart(start - 4);
            console.log(start)
        }
    };

    const renderList = (arr) => {
        return arr.map((item) => {

            return (
                <PostItem key={item.id} post={item}/>
            )
        })
    }

    return (
        <div className="list-posts">
            {isLoading && <h1>Loading</h1>}
            {isError && <h1>Error</h1>}
            {data && renderList(data)}
        </div>
    );
};

export default ListPosts;