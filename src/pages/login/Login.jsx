import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="email..." />
                <label>Password</label>
                <input className="loginInput" type="text" placeholder="password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}
