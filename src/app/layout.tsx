import type { Metadata } from "next";
import "./globals.css";
import { ProjectsProvider } from "@/context/ProjectsContext";

export const metadata: Metadata = {
  title: "boilerplate-nextjs-mongo",
  description: "The boilerplate starting project folder for PROG3017",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <ProjectsProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ProjectsProvider>
  );
}
