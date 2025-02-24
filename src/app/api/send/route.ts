import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { name, email, message, captcha } = await request.json();
    
    
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