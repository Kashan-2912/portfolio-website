import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={montserrat.variable + " w-full min-h-screen bg-light dark:bg-dark text-dark dark:text-light"}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
