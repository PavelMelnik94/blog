import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID } from "../../config";
import SocialMedia from "../SocialMedia/SocialMedia";
import Alert from "../Alert/Alert";
import Policy from "./Policy/Policy";
import Preloader from "../Preloaders/Preloader";

export default function FeedBackForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [MessageLoading, setMessageLoading] = useState(false);
  



  const changeName = (e) => {
    setNameValue(e.target.value);
  };
  const changeEmail = (e) => {
    setEmailValue(e.target.value);
    validateEmail(emailValue);
  };
  const changeMessage = (e) => {
    setMessageValue(e.target.value);
  };
  const handlePolicy = (e) => {
    setIsChecked(!isChecked);
  };

  const templateParams = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    return setEmailValid(re.test(String(email).toLowerCase()));
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (
      nameValue !== "" &&
      emailValue !== "" &&
      emailValid &&
      messageValue !== "" &&
      isChecked
    ) {
      emailjs
        .send(
          String(SERVICE_ID),
          String(TEMPLATE_ID),
          templateParams,
          "user_srp83JEFVkrJ9JOqabT0f"
        )
        .then(
          (response) => {
            setStatusMessage("email-success");
            setMessageLoading(false);
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            setStatusMessage("email-danger");
            setMessageLoading(false);
            console.log("FAILED...", err);
          }
        );
      setIsChecked(false);
      setNameValue("");
      setEmailValue("");
      setMessageValue("");
      setEmailValid(false);

      setMessageLoading(true);
    } else {
      setStatusMessage("email-warning");
    }
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      setStatusMessage("");
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [statusMessage]);

  return (
    <>
      {statusMessage !== "" ? <Alert type={statusMessage} /> : null}
      {MessageLoading ? <Preloader /> : null}


      <div>
        <form id="form" className="topBefore">
          <input
            id="name"
            type="text"
            value={nameValue}
            onChange={changeName}
            placeholder="??????"
            required
          />


          <input
            id="email"
            type="text"
            placeholder="E-MAIL"
            value={emailValue}
            onChange={changeEmail}
            required
          />

          <textarea
            id="message"
            type="text"
            placeholder="??????????????????"
            value={messageValue}
            onChange={changeMessage}
            required
          ></textarea>

          <div className="checkbox-policy">
            {/* <input id="policy" type="checkbox"  />  */}
            <input
              type="checkbox"
              id="checkbox-b"
              name="checkbox"
              onChange={handlePolicy}
              checked={isChecked}
              required
            />
            <label htmlFor="checkbox-b">Checkbox 2</label>
            <Policy
              className="w-100"
              buttonLabel="???????????????? ???????????????? ????????????????????????????????????"
            />
          </div>

          <input
            id="submit"
            type="submit"
            value="??????????????????"
            onClick={submitForm}
          />
        </form>

        <div className="social-wrapper">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
