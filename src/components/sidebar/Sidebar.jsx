import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className="sidebarImg"
                    src="https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180816/970413fe941a4c49917796340f67e070.jpeg"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus quidem animi
                    minima quo repudiandae unde aperiam veritatis quasi reiciendis commodi culpa, eum,
                    adipisci modi! Illum deserunt praesentium molestias incidunt?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-qq"></i>
                    <i className="sidebarIcon fa-brands fa-weixin"></i>
                    <i className="sidebarIcon fa-brands fa-tiktok"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
