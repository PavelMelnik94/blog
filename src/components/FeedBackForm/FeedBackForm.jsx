import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID } from "../../config";
import SocialMedia from "../SocialMedia/SocialMedia";
import Notification from "../Notification/Notification";


export default function FeedBackForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  

  const changeName = (e) => {
    setNameValue(e.target.value);
  };
  const changeEmail = (e) => {
    setEmailValue(e.target.value);
    validateEmail(emailValue) 
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
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  return setEmailValid(re.test(String(email).toLowerCase()));
}

  const submitForm = (event) => {
    event.preventDefault();
    
    if (nameValue !== '' 
    && emailValue !== ''
    && emailValid 
    && messageValue !== ''
    && (isChecked) ) {

        emailjs
        .send(
          String(SERVICE_ID),
          String(TEMPLATE_ID),
          templateParams,
          "user_srp83JEFVkrJ9JOqabT0f"
        )
        .then(
          (response) => {
            setStatusMessage('success')
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            setStatusMessage('error')
            console.log("FAILED...", err);
          }
        );
    setIsChecked(false)
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
    
  } else {
    setStatusMessage('noData')
  }

    
  };

  

let timerId;
  useEffect(() => {
    timerId = setTimeout(() => {
        setStatusMessage('')
    }, 2000)
    return () => {
      clearTimeout(timerId)
    }
  }, [statusMessage])

  return (
      <>
      {statusMessage === 'success' ?  <Notification type='#428ab48f' message='отлично! сообщение доставлено!' />  : null }
      
      { statusMessage === 'error' ? <Notification type='#ecc33cd3' message='ой! Сбой на сервере. попробуйте позже' /> : null}

      { statusMessage === 'noData' ? <Notification type='#ec8b3cd3' message='Заполните все данные.' /> : null}

      
    <div classNam="form-wrapper">
            
        
      <form id="form" className="topBefore">
        <input
          id="name"
          type="text"
          value={nameValue}
          onChange={changeName}
          placeholder="имя"
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
          placeholder="сообщение"
          value={messageValue}
          onChange={changeMessage}
          required
        ></textarea>

        <div className='checkbox-policy'>
        {/* <input id="policy" type="checkbox"  />  */}
        <input type="checkbox" id="checkbox-b" name="checkbox" onChange={handlePolicy} checked={isChecked} required/>
                            <label for="checkbox-b">Checkbox 2</label>
        <label htmlFor="policy">принимаю политику конфиденциальности</label>
        </div>

        <input
          id="submit"
          type="submit"
          value="отправить"
          onClick={submitForm}
        />
        
        
        
      </form>

      <div className='social-wrapper'>
            
        <SocialMedia />
        </div>

    </div>
    
</>
  );
}
