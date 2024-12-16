import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dumanlogo from "../components/media/Images/dumanlogo.jpg";

function Login({ setToken }) {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLoginClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:1415/duman/auth/login",
        user
      );
      const token = response.data.data;
      localStorage.setItem("token", token);
      setToken(token);

      const roleResponse = await axios.post(
        "http://localhost:1415/duman/auth/role",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const role = roleResponse.data.data;
      if (role === "ROLE_ADMIN") {
        navigate("/adminPage");
      } else if (role === "ROLE_MANAGER") {
        navigate("/managerPage");
      } else if (role === "ROLE_EMPLOYEE") {
        navigate("/employeePage");
      } else {
        navigate("/customerPage");
      }
    } catch (error) {
      console.error("Login error: ", error);
      if (error.response) {
        if (error.response.status === 401) {
          alert("Kullanıcı adı veya şifre hatalı!");
        } else if (error.response.status === 403) {
          alert("Bu işlemi gerçekleştirme yetkiniz yok!");
        } else if (error.response.status === 500) {
          alert("Sunucu hatası! Lütfen daha sonra tekrar deneyin.");
        } else {
          alert("Bir hata oluştu: " + error.response.data.message);
        }
      } else if (error.request) {
        alert(
          "Sunucuya ulaşılamıyor. Lütfen internet bağlantınızı kontrol edin."
        );
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <div className="card">
        <div className="left-section">
          <div className="text-center">
            <div className="login-img">
              <img src={dumanlogo} style={{ width: "185px" }} alt="logo" />
            </div>
            <h4 className="mt-1 mb-5 pb-1">Welcome to Duman Kafe</h4>
          </div>

          <form>
            <p>Please sign in to your account</p>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example11">
                Email
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                id="form2Example11"
                className="form-control"
                placeholder="Email address"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example22">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                id="form2Example22"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              className="auth-button"
              onClick={handleLoginClick}
            >
              {loading ? "Loading..." : "Log In"}
            </button>
            <div className="text-center mt-3">
              <a href="#!" className="text-muted">
                Forgot password?
              </a>
            </div>
            <br></br>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <p className="mb-0">Don't have an account?</p>
              <br></br>
              <button
                type="button"
                className="auth-button"
                onClick={handleRegisterClick}
              >
                Create one
              </button>
            </div>
          </form>
        </div>

        <div className="right-section">
          <h4>Duman Kafe Hakkında</h4>
          <p>
            Duman Kafe, taze demlenmiş kahve kokusuyla sizi sarıp sarmalayan,
            huzurlu ve samimi bir ortam sunuyor. Sevdiklerinizle keyifli
            sohbetlere dalabileceğiniz, günün yorgunluğunu atabileceğiniz ve her
            yudumda kahve keyfini doyasıya yaşayabileceğiniz bir mekân.
            Kendinizi evinizde hissetmeniz için buradayız!
          </p>
          <a href="/" className="home-link">
            Duman'ı Keşfet!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
