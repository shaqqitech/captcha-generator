// src/components/CaptchaGenerator.js
import React, { useState } from 'react';
import { GrFormRefresh } from 'react-icons/gr';

const CaptchaGenerator = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }

  function handleRefreshClick() {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setInputValue('');
    setMessage('');
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    if (event.target.value === captcha) {
      setMessage('Captcha matched successfully!');
    } else {
      setMessage('Captcha does not match. Please try again.');
    }
  }

  return (
    <div className="w-64 p-4 mx-auto mt-8 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <span>Captcha:</span>
          <span className="ml-2 font-bold">{captcha}</span>
        </div>
        <button
          className="px-2 py-1 text-gray-700 rounded-full w-10 h-10 flex justify-center items-center"
          onClick={handleRefreshClick}
        >
          <GrFormRefresh color={'black'} size={25} />
        </button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded-md"
          placeholder="Enter Captcha"
        />
      </div>
      <div className="mt-2 text-red-500 font-semibold">{message}</div>

    </div>
  );
};

export default CaptchaGenerator;
