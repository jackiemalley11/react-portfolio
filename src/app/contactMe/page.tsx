"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Navbar from '../../components/navBar';
import ReCAPTCHAComponent from '@/components/ReCAPTCHAComponent';

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactMe() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data: ContactFormInputs) => {
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    console.log('Sending data:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      message: data.message,
      captcha: captchaToken
    });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: data.message,
          captcha: captchaToken, 
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        reset();
        setCaptchaToken(null);
      } else {
        alert(responseData.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway">
      <div className="flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 mt-48">
          <div className="relative flex justify-center items-center mb-10">
            <div className="relative text-5xl md:text-7xl hover-glow-title">CONTACT ME</div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto bg-blue rounded-lg shadow-lg p-14 gradient-border"
          >
            <div className="mb-4">
              <label className="block mb-2">First Name</label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className="w-full p-2 rounded bg-white/10 text-white"
              />
              {errors.firstName && <p className="text-red-300">{errors.firstName.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Last Name</label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className="w-full p-2 rounded bg-white/10 text-white"
              />
              {errors.lastName && <p className="text-red-300">{errors.lastName.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full p-2 rounded bg-white/10 text-white"
              />
              {errors.email && <p className="text-red-300">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 rounded bg-white/10 text-white h-32"
              />
              {errors.message && <p className="text-red-300">{errors.message.message}</p>}
            </div>

            <div className='w-1/4 md:w-full'>
              <ReCAPTCHAComponent onChange={(value) => setCaptchaToken(value)} />
            </div>

            <button
              type="submit"
              className="w-full gradient-background text-3xl font-semibold text-white p-2 rounded border-4 border-transparent hover:border-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}