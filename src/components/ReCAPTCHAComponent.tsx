import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCAPTCHAProps {
  onChange: (value: string | null) => void;
}

const ReCAPTCHAComponent: React.FC<ReCAPTCHAProps> = ({ onChange }) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    onChange(value); 
  };

  useEffect(() => {
    // Make sure the recaptcha widget is initialized
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  return (
    <div className="mb-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default ReCAPTCHAComponent;