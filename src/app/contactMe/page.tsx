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
            <div className="relative text-7xl hover-glow-title">CONTACT ME</div>
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

            {/* ReCAPTCHA Component */}
            <ReCAPTCHAComponent onChange={(value) => setCaptchaToken(value)} />

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


// "use client";

// import { useState } from 'react';

// export default function ContactMe() {
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: 'Test User',
//           email: 'test@test.com',
//           message: 'Test message'
//         }),
//       });

//       const data = await response.json();
//       console.log('Response:', data);
      
//       if (response.ok) {
//         setStatus('Success! API endpoint reached.');
//       } else {
//         setStatus(`Error: ${data.error || 'Something went wrong'}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('Error: Could not reach API endpoint');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">Contact Form API Test</h1>
      
//       <button 
//         onClick={handleSubmit}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Test API Connection
//       </button>

//       {status && (
//         <p className="mt-4">
//           Status: {status}
//         </p>
//       )}
//     </div>
//   );
// }









// "use client";

// import { FormEvent, useState } from "react";
// import ReCAPTCHAComponent from '@/components/ReCAPTCHAComponent';

// export const ContactMe = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');

//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);



//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted'); // Debug log
//     setStatus('sending');

    
//     try {
//       console.log('Sending data:', { name, email, message }); // Debug log

//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Response status:', res.status); // Debug log

//       const data = await res.json();
//       console.log('Response data:', data); // Debug log

//       if (res.ok) {
//         setStatus('success');
//         // Clear the form
//         setName('');
//         setEmail('');
//         setMessage('');
//         alert('Message sent successfully!');
//       } else {
//         setStatus('error');
//         alert(`Failed to send message: ${data.error || 'Unknown error'}`);
//       }
//     } catch (err) {
//       console.error('Error sending message:', err);
//       setStatus('error');
//       alert('Failed to send message. Check console for details.');
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4">
//       <input
//         value={name}
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />

//       <input
//         value={email}
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="p-2 border rounded"
//       />

//       <textarea
//         value={message}
//         placeholder="Your message"
//         onChange={(e) => setMessage(e.target.value)}
//         required
//         className="p-2 border rounded min-h-[100px]"
//       />

//       <ReCAPTCHAComponent onChange={(value) => setCaptchaToken(value)} />

//       <button
//         type="submit"
//         disabled={status === 'sending'}
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
//       >
//         {status === 'sending' ? 'Sending...' : 'Submit'}
//       </button>

//       {status === 'success' && (
//         <p className="text-green-500">Message sent successfully!</p>
//       )}

//       {status === 'error' && (
//         <p className="text-red-500">Failed to send message. Please try again.</p>
//       )}
//     </form>
//   );
// };

// export default ContactMe;