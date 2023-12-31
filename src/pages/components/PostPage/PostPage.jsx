import {useGetPostQuery} from "../../../widgets/api/store/api/PostApi.jsx";
import {useParams, useNavigate} from "react-router-dom";
import "./PostPage.scss"

const PostPage = () => {

    const {id} = useParams()
    const {data, isLoading} = useGetPostQuery({id})
    const history = useNavigate()

    if (isLoading)
        return (<h1>Loading</h1>)

    return (
        <div className={"post-page"}>
            <a className={"post-page__button"} onClick={() => history(-1)}>Назад</a>
            <div className={"post-page__id"}>№ {data.id}</div>
            <div className={"post-page__title"}>Title: {data.title}</div>
            <div className={"post-page__body"}>Body: {data.body}</div>
        </div>
    );
};

export default PostPage;