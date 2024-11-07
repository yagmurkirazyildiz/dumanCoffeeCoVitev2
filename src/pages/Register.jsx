import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dumanlogo from "../components/media/dumanlogo.jpg";

function Register() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    phoneNumber: "",
    birthDate: "",
    isStudent: true,
  });

  const [loading, setLoading] = useState(false);

  const handleRegisterClick = async () => {
    setLoading(true);

    if (
      !user.email ||
      !user.password ||
      !user.name ||
      !user.surname ||
      !user.phoneNumber ||
      !user.birthDate
    ) {
      alert("Please fill in all required fields");
      setLoading(false);
      return;
    }

    axios
      .post("http://localhost:1415/duman/auth/register", user)
      .then(function (response) {
        console.log(response.data.data);
        alert("Kayıt Başarılı!");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="container">
      <div className="card">
        <div className="left-section">
          <div className="text-center">
            <div className="register-img">
              <img src={dumanlogo} style={{ width: "185px" }} alt="logo" />
            </div>
            <h4 className="mt-1 mb-5 pb-1">Join The Duman Team</h4>
          </div>

          <form>
            <p>Please create your account</p>
            {/* Name */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formName">
                Name
              </label>
              <input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                id="formName"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            {/* Surname */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formSurname">
                Surname
              </label>
              <input
                onChange={(e) => setUser({ ...user, surname: e.target.value })}
                type="text"
                id="formSurname"
                className="form-control"
                placeholder="Your surname"
              />
            </div>
            {/* Email */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formEmail">
                Email
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                id="formEmail"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            {/* Phone Number */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formPhone">
                Phone Number
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
                type="text"
                id="formPhone"
                className="form-control"
                placeholder="Your phone number"
              />
            </div>
            {/* Birth Date */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formBirthDate">
                Birth Date
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, birthDate: e.target.value })
                }
                type="date"
                id="formBirthDate"
                className="form-control"
              />
            </div>
            {/* Password */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formPassword">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                id="formPassword"
                className="form-control"
                placeholder="Your password"
              />
            </div>
            {/* Is Student Checkbox */}
            <label className="form-check-label" htmlFor="formIsStudent">
              Are you a student?
            </label>
            <div className="form-check mt-4">
              <input
                onChange={(e) =>
                  setUser({ ...user, isStudent: e.target.checked })
                }
                type="checkbox"
                id="formIsStudent"
                className="form-check-input"
                checked={user.isStudent}
              />
            </div>
            {/* Register Button */}
            <button
              type="button"
              className="auth-button"
              onClick={handleRegisterClick}
            >
              {loading ? "Loading..." : "Register"}
            </button>
            <div className="text-center mt-3">
              <a href="#!" className="text-muted">
                Forgot password?
              </a>
            </div>
            <br></br>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <p className="mb-0">Already have an account?</p>
              <br></br>
              <button
                type="button"
                className="auth-button"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="right-section">
          <h4>Bir kafeden çok daha fazlası!</h4>
          <p>
            Duman Kafe, sadece bir kafe değil; rahatlatıcı atmosferi, özenle
            seçilmiş kahve çekirdekleri ve lezzetli menüsüyle bir buluşma
            noktası. Misafirlerimize günlük koşuşturmadan uzaklaşabilecekleri,
            sıcak ve samimi bir ortam sunuyoruz. Gelin, kendinize bir an ayırın
            ve Duman Kafe'nin huzurlu atmosferinde keyifli bir mola verin
          </p>
          <a href="/" className="home-link">
            Duman'ı Keşfet!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
