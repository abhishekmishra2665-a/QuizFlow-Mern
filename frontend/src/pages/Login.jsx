import { useState } from "react";
import "./Login.css";
import { MdQuiz } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import api from "../api/api";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function handleSubmit() {
    const response = await api.post("/user/login", data);
    if (response.data?.success) {
      alert("Login Successfully");
      const data = response.data?.data;
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      alert("Login Failed");
    }
  }
  return (
    <section className="login-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="login-header">
          <div className="login-icon">
            <MdQuiz />
          </div>
          <h1>QuizFlow</h1>
          <p>Welcome back to the coaching portal</p>
        </div>
        <div className="form-rows">
          <label htmlFor="">Email Address</label>
          <div className="form-input">
            <MdMailOutline className="form-input-icon" />
            <input
              type="email"
              placeholder="admin@institute.com"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-rows">
          <label htmlFor="">Password</label>
          <div className="form-input">
            <MdLockOutline className="form-input-icon" />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="login-button">Login</button>
      </form>
    </section>
  );
}
export default Login;