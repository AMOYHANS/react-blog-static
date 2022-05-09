import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201907%2F05%2F20190705220904_tdwth.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654596960&t=85d8e15c4617023f8e5d0b2b1a4808c9"
                    alt=""
                    className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum, dolor sit
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa-solid fa-trash-can"></i>
                        <i class="singlePostIcon fa-solid fa-file-pen"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAu">
                        Author: <b>Hans</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus eius, odio quisquam itaque ut quo officia impedit,
                    deleniti dolore consectetur dicta accusamus,
                    laudantium explicabo quos assumenda? Sint aspernatur recusandae voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus eius, odio quisquam itaque ut quo officia impedit,
                    deleniti dolore consectetur dicta accusamus,
                    laudantium explicabo quos assumenda? Sint aspernatur recusandae voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus eius, odio quisquam itaque ut quo officia impedit,
                    deleniti dolore consectetur dicta accusamus,
                    laudantium explicabo quos assumenda? Sint aspernatur recusandae voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus eius, odio quisquam itaque ut quo officia impedit,
                    deleniti dolore consectetur dicta accusamus,
                    laudantium explicabo quos assumenda? Sint aspernatur recusandae voluptatibus.
                </p>
            </div>
        </div>
    )
}
