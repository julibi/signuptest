import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SIGNUP, SIGNOUT } from './store/user/actions';
import TextInput from './components/TextInput';

import './App.css';

const App = () => {
  const initialState = { name: '', email: '', password: '', pwConfirmation: '' };
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const user = useSelector(state => state.user);
  const { name, email, password, pwConfirmation } = input;
  const { disabled, error, loggedIn, name: username } = user;

  const dispatch = useDispatch();
  const changeName = (value) => {
    setInput({ ...input, name: value });
  };
  const changeEmail = (value) => {
    setInput({ ...input, email: value });
  };
  const changePassword = (value) => {
    setInput({ ...input, password: value });
  };
  const changePwConfirmation = (value) => {
    setInput({ ...input, pwConfirmation: value });
  };
  const handleSubmit = async(event) => {
    // why preventDefault?
    event.preventDefault();
    if (isValid()) {
      await dispatch(SIGNUP(input));
      // I need to get the latest state here and do all the things below - how do I get the latest Redux state via selector?
      console.log(loggedIn);
      if (loggedIn) {
        setInput({name: '', email: '', password: '', pwConfirmation: ''});
        window.localStorage.setItem('user', username);
      }
    }
  };

  const isValid = () => {
    let errors = {};
    let isValid = true;
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!input["name"].length) {
      isValid = false;
      errors = {...errors, name: "Please enter your name."};
    }
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors = {...errors, email: "Please enter valid email address."};
    }
    if (input["password"].length < 6) {
      isValid = false;
      errors = {...errors, password: "Please enter a password with a minimum of 6 charachters."};
    }
    if (input["password"] !== input["pwConfirmation"]) {
      isValid = false;
      errors = {...errors, pwConfirmation: "The passwords have to be identical."};
    }
    setErrors(errors);
    return isValid;
  };

  
  return (
    <div className="App">
      <fieldset disabled={disabled}>
      <form onSubmit={(event) => handleSubmit(event)} className="form">
        <p>Signup</p>
        <TextInput
          label={"Your Name"}
          value={name}
          handleChange={changeName}
          errorMessage={errors.name}
        />
        <TextInput
          label={"E-Mail"}
          value={email}
          handleChange={changeEmail}
          errorMessage={errors.email}
        />
        <TextInput
          label={"Password"}
          value={password}
          handleChange={changePassword}
          errorMessage={errors.password}
        />
        <TextInput
          label={"Confirm Password"}
          value={pwConfirmation}
          handleChange={changePwConfirmation}
          errorMessage={errors.pwConfirmation}
        />
          <input type="submit" value="Submit" className="submitButton" />
          {/* I don't like that in this approach the distance between submitbutton and fieldset jumps */}
          <p className="submitError">{error}</p>
      </form>
      </fieldset>
    </div>
  );
}

export default App;
