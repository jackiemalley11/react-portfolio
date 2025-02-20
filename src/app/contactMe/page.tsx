"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from '../../components/navBar';

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
    reset 
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    // TODO: Implement actual form submission logic
    
    console.log(data);
    alert('Message sent successfully!');
    reset();
    setCaptchaToken(null);
  };

  
    return (

      <div className="bg-bgBlue text-white min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="max-w-md mx-auto bg-[#9491DB] p-8 rounded-lg shadow-lg"
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
                        message: "Invalid email address"
                      }
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
      
                {/* <div className="mb-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div> */}
      
                <button 
                  type="submit" 
                  className="w-full bg-[#40F6FC] text-black p-2 rounded hover:bg-[#B5EEF0] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
      }
  