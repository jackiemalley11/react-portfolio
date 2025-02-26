import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyCaptcha(captchaToken: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
  
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaToken}`,
      {
        method: 'POST',
      }
    );
  
    const data = await response.json();
    return data.success; // reCAPTCHA v2 only checks for success
  }

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { name, email, message, captcha } = await request.json();

    const isCaptchaValid = await verifyCaptcha(captcha);
    
    if (!isCaptchaValid) {
      return Response.json({ error: 'Invalid reCAPTCHA token' }, { status: 400 });
    }
    
    
    // Send email with the form data
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jackiemalley11@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({ 
        firstName: `${name}`,
        email: `${email}`,
        message: `${message}`
      }) as React.ReactElement,
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json({ 
      data,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json({ 
      error: 'Failed to send email'
    }, { status: 500 });
  }
}