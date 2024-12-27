import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Government College Of Technology",
  description: "Leading Technical College in Asia",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
    <html lang="en">
     
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        </body>
    </html>
        </ClerkProvider>
  );
}
