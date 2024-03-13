import SubmitButton from "../components/SubmitButton"
import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log('Email subscribed successfully!');
        // Optionally, you can reset the form after successful submission
        setEmail('');
      } else {
        console.error('Failed to subscribe email.');
      }
    } catch (error) {
      console.error('Error subscribing email:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section id="contact-us" className=" max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className='text-4xl leading-[68px] lg:max-w-xl font-palanquin font-bold'>
        Sign Up for <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <form className=" flex w-full" onSubmit={handleSubmit}>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required placeholder="Subscribe@nike.com" className=" input cursor-text"/>
          <div className=" flex max-sm:justify-end items-center max-sm:w-full">
            <SubmitButton label="Sign Up" fullWidth className="cursor-pointer"/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
