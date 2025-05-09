import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export const metadata: Metadata = {
  title: "Modern Portfolio Built with Next.js",
  description:
    "Explore CodeBucks's Next.js developer portfolio and discover the latest webapp projects and software engineering articles. Showcase your skills as a full-stack developer and software engineer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
