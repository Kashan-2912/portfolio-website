import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Kashan's Portfolio",
  description: "Muhammad Kashan Ashraf is a seasoned Web Developer with expertise in MERN stack and NextJS. Kashan has been in web development for more than 2 years, He has made several projects from simple CRUD apps to AI Powered Interior designers, AI Powered Fitness trainer etc.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.variable + " w-full min-h-screen bg-light"}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
