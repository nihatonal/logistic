import React, { useState, useContext, useEffect } from "react";

import { useForm } from "../shared/hooks/SignUpFrom-hook";
import { VALIDATOR_REQUIRE } from "../shared/util/validators";
import Input from "../shared/FormElement/Input";
import { Text, LanguageContext } from "../shared/context/Language";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("Ваше имя");
  const [message, setMessage] = useState("Сообщение");
  const lang = useContext(LanguageContext);
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  useEffect(() => {
    if (lang.userLanguage === "ru") {
      setName("Ваше имя");
      setMessage("Сообщение");
    } else if (lang.userLanguage === "en") {
      setName("Your name");
      setMessage("Message");
    } else if (lang.userLanguage === "de") {
      setName("Ihren Namen");
      setMessage("Mitteilung");
    }
  }, [lang.userLanguage]);
  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">
          <Text tid="form-title" />
        </h2>
        <p className="section-desc form-desc">
          <Text tid="form-desc" />
        </p>
        <form className="form-wrapper-item">
          <div className="form-inputs">
            <Input
              id="name"
              element="input"
              type="text"
              placeholder={name}
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              placeholderclassName="label"
            />
            <Input
              id="email"
              element="input"
              type="text"
              placeholder="Email"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              classNameWrapper="email-input"
              placeholderclassName="label"
            />
            <Input
              id="message"
              element="textarea"
              type="text"
              placeholder={message}
              textareaClass="textarea"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              labelclassName="label"
            />
          </div>
          <p className="form-appeal-text">
            <Text tid="form-note" />
          </p>
          <button
            disabled={!formState.isValid}
            onClick={submitHandler}
            type="submit"
            className="form-btn"
          >
            <Text tid="form-btn" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
