import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "boilerplate-nextjs-mongo",
  description: "The boilerplate starting project folder for PROG3017",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        {/* Google reCAPTCHA script */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
