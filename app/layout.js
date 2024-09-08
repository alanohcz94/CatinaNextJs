import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css"

import {Josefin_Sans} from 'next/font/google';

const josefinSansFont = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
})

export const metadata = {
  title: {
    template: `%s / The Cantina House`,
    default: "Welcome / The Cantina House"
  },
  description: "This is a house where all living beings can come and stay and enjoy. Droids are allowed too"
};

export default function RootLayout({children}) {
  return <html lang="en">
    {/* antialiased - Smooth the font on the level of the pixel, as opposed to the subpixel */}
    <body className={`${josefinSansFont.className} relative= bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}>
      <Header />
      <div className="flex-1 px-8 py-12 grid">
        <main className="max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
      <footer>Footer</footer>
    </body>
  </html>
}