import "./PostItem.scss"

const PostItem = ({post}) => {

    const {title, id, body} = post

    return (
        <div className={"item-list"}>
            <div className="item-list__number">№{id}</div>
            <div className="item-list__title"><strong>Title:</strong> {title}</div>
            <div className="item-list__description"><strong>Body:</strong> {body}</div>
            <a className={"item-list__button"} href={`/picasso-react/post/${id}`}>Просмотр</a>
        </div>
    );
};

export default PostItem;