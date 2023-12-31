import "./PostItem.scss"

const PostItem = ({post}) => {

    const {title, id, body} = post

    return (
        <div className={"item-list"}>
            <div className="item-list__content">
                <div className="item-list__number">№ {id}</div>
                <div
                    className="item-list__title">Title: {title.length > 100 ? title.substring(0, 100) + "..." : title}</div>
                <div
                    className="item-list__description">Body: {body.length > 200 ? body.substring(0, 200) + "..." : body}</div>
            </div>
            <a className={"item-list__button"} href={`/post/${id}`}>Просмотр</a>
        </div>
    );
};

export default PostItem;