import './globals.css';

import type { Metadata } from 'next';
// Importing Inter font from Next.js's built-in Google Fonts integration.
import { Inter } from 'next/font/google';

// Tells Next.js to apply Inter only to latin characters (english alphabets)
// You can add more subsets like 'latin-ext' if you need special characters
const inter = Inter({
  subsets: ['latin']
})

// Metadata is Next.js's way of controlling what goes in the <head> tag.
// This sets the browser tab title and the description search engines see.
// You never write a <head> tag yourself — Next.js builds it from this object.
// For SEO
export const metadata: Metadata = {
  title: 'GitHub Profile Explorer',
  description: 'Analyse and Explore Github Profiles of several Users',
}

// RootLayout is the permanent frame around every page in the app.
// children = whatever page the user is currently on, injected automatically by Next.js.
// React.ReactNode means children can be anything — a component, text, null, etc.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* inter.className applies the Inter font to everything inside the body. */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}