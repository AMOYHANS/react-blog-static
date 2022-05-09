import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    const user = false
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-qq"></i>
                <i className="topIcon fa-brands fa-weixin"></i>
                <i className="topIcon fa-brands fa-tiktok"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">{user && "LOGOUT"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180816/970413fe941a4c49917796340f67e070.jpeg"
                            alt="" />
                    ) :
                        (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to="/login" className="link">LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link to="/register" className="link">REGISTER</Link>
                                </li>
                            </ul>
                        )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
