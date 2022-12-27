/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { useStateContext } from '../contexts/ContextProvider';
import { license } from '../data/dummy';

function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.value);
  };

  const { currentColor } = useStateContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/user/login', { Email, Password })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', JSON.stringify(response.data._id));
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
    >
      <MaskedTextBoxComponent
        className="e-large"
        placeholder="Enter Email"
        licenseKey={license}
        value={Email}
        onChange={handleEmailChange}
      />
      <MaskedTextBoxComponent
        className="e-large"
        placeholder="Enter Password"
        licenseKey={license}
        value={Password}
        onChange={handlePasswordChange}
        type="Password"
      />
      <button
        type="submit"
        className="text-xl w-full p-3 hover:drop-shadow-xl hover:bg-"
        style={{ backgroundColor: currentColor, color: 'white', borderRadius: '10px' }}
      >Login
      </button>
    </form>
  );
}

export default Login;
