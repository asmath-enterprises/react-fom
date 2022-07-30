import React, { useState } from "react";
import axios from "axios";

const Seleniumform = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [company, setcompany] = useState("");
  const [role, setrole] = useState("");
  const [experience, setexperience] = useState("");
  const [technology, settechnology] = useState("");

  function onChangeValue(event) {
    setGender(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gender,
      phonenumber: phonenumber,
      company: company,
      role: role,
      experience: experience,
      technology: technology,
    };
    const cDate = new Date();
    const teledata = `<b>New Registration</b> %0A%0AName: ${data.firstname} %20 ${data.lastname} %0A %0A Gender:${gender} %0A %0A Email: ${email} %0A %0A Phone Number: ${phonenumber} %0A %0A company: ${company} %0A %0A Role: ${role} %0A %0A Experience: ${experience}  %0A %0A Technology: ${technology} %0A %0A<i>RegisteredAt: ${cDate}</i>`;
    axios.post(
      `https://api.telegram.org/bot5561940346:AAGv1UkvoFXBj_jZSAm99nsbdgxYRiXpmHg/sendMessage?chat_id=-1001706990465&text=${teledata}&parse_mode=html`
    );
    alert("Registration Successful");
    console.log(data);
    setcompany("");
    setEmail("");
    setFirstname("");
    setLastname("");
    setPhonenumber("");
    setGender("");
  };

  return (
    <div>
      {" "}
      <div className="logo">
        <img src="logo.png" alt="baboolsoft" />
      </div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Training Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div onChange={onChangeValue} className="radioname">
                  <input type="radio" value="Male" name="gender" />
                  <label>Male</label>
                  <input type="radio" value="Female" name="gender" />
                  <label>Female</label>
                  <input type="radio" value="Other" name="gender" />
                  <label>other</label>
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    type="tel"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i className="fa-solid fa-building"></i>
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setcompany(e.target.value)}
                    placeholder="company Name (optional)"
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i className="fa-solid fa-user-gear"></i>
                  </span>
                  <input
                    type="text"
                    name="role"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                    placeholder="Enter your role"
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i
                      className="fa-solid fa-briefcase"
                      style={{ paddingTop: "16px" }}
                    ></i>
                  </span>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setexperience(e.target.value)}
                  >
                    <option selected disabled>
                      select Your Experience
                    </option>
                    <option value="fresher">Fresher</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-6 years">3-6 years</option>
                    <option value="6+ years">6+ years</option>
                  </select>
                </div>
                <div className="input_field">
                  <span>
                    <i className="fa-solid fa-gears"></i>
                  </span>
                  <input
                    type="textarea"
                    name="company"
                    value={technology}
                    onChange={(e) => settechnology(e.target.value)}
                    placeholder="Technology used"
                    rows="2"
                  />
                </div>

                <input
                  className="button"
                  name="submit"
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="credit">
        Copyright © 2022
        <a
          href="https://baboolsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Baboolsoft</span>
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Seleniumform;
