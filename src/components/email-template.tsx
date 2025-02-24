import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
  }

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    message,
  }) => (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>You received a new message from your website contact form.</p>
      <div>
        <p><strong>Name:</strong> {firstName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
      </div>
    </div>
);