import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="username..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="email..." />
                <label>Password</label>
                <input className="registerInput" type="text" placeholder="password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
