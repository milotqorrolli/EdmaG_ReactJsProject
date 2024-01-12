import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contact.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formSubmissions, setFormSubmissions] = useState([]); // Step 1: Create a state variable

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(event.target.value ? "" : "Name is required");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(event.target.value ? "" : "Email is required");
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(
      event.target.value.match(/^\d{10}$/)
        ? ""
        : "Please enter a 10-digit phone number"
    );
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(event.target.value ? "" : "Message is required");
  };

  const handleFormSubmit = () => {
    if (!name || !email || !phone || !message) {
      alert("Please fill out all required fields");
      return;
    }

    // Create a new submission object
    const newSubmission = {
      name,
      email,
      phone,
      message,
    };

    // Add the new submission to the array
    setFormSubmissions([...formSubmissions, newSubmission]);

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  useEffect(() => {
    console.log("Form Submissions:", formSubmissions);
  }, [formSubmissions]);

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1>- Contact -</h1>
        <p className="parahero">Together we can make dreams come true</p>
        <div className="form-container">
          <div className="form1">
            <ul>
              <li>
                <strong>Address:</strong>
                <ul>
                  <li>Täfernstrasse 2a</li>
                  <li>5405 Dättwil</li>
                </ul>
              </li>
              <li>
                <strong>Phone Numbers:</strong>
                <ul>
                  <li>079 586 00 92</li>
                  <li>044 593 54 11</li>
                </ul>
              </li>
              <li>
                <strong>Email:</strong>
                <ul>
                  <li> edma@gmx.ch </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="form2">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "39ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="name"
                  label="Name"
                  value={name}
                  onChange={handleNameChange}
                  // required
                  error={!!nameError}
                  helperText={nameError}
                />
              </div>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "39ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={handleEmailChange}
                  // required
                  error={!!emailError}
                  helperText={emailError}
                />
              </div>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "39ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="phone"
                  label="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  // required
                  error={!!phoneError}
                  helperText={phoneError}
                />
              </div>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "39ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="message"
                  label="Message"
                  value={message}
                  onChange={handleMessageChange}
                  // required
                  error={!!messageError}
                  helperText={messageError}
                />
              </div>
            </Box>
            <div className="btn">
              <button onClick={handleFormSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
