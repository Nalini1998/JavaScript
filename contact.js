import React, { useState } from 'react';

function Contact() {
  const password = 'Meow.Nalini98';
  // checking if authorized is true
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }
const login = (
    <form action = "#" onSubmit = {handleSubmit}>
      <input 
        type="password"
        placeholder="Password"
      />
      <input 
        type="submit"
      />
    </form>
  );

  const contactInfo = (
        <ul>
          <li>
            meow@gmail.com
          </li>
          <li>
            038.580.64xx
          </li>
        </ul>
  );
  return (
      <div id="authorization">
          // make the h1 element display "Contact"
          {authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
          {authorized ? contactInfo : login}
      </div>
  );
}

export default Contact;