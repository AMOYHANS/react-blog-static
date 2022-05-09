import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201907%2F05%2F20190705220904_tdwth.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654596960&t=85d8e15c4617023f8e5d0b2b1a4808c9"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor, sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem voluptatem corrupti quaerat porro reiciendis placeat quibusdam asperiores maiores, at illum voluptates natus sed error sit architecto deserunt distinctio repudiandae.
                </p>
            </div>
        </div>
    )
}
