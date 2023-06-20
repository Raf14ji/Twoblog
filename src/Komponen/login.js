import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SignUp } from "./signup.js"

export const LoginPage = () => {

    return (
        <div className=" justify-content-center alignt-items-center 100-w vh-100 bg-warning">
            <div className="40-w p-5 rounded bg-white ">
                <form>
                    <h3>Login</h3>
                    <div className="mb-2">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        placeholder="Enter username" 
                        className="form-control"
                        name="username" 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter Password" 
                        className="form-control" 
                        name="password"
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-dark">Login</button>
                    </div>
                    <p className="mt-2 text-none"> 
                        Forgot <a href="" className="ms-1">Password ?</a><Link to="/register" className="ms-2">Register</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}