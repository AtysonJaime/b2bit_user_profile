import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import StyledJsxRegistry from './registry'

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2Bit User Profile",
  description: "A simple user profile app",
  authors: [{ name: "Atyson Jaime (atysonjaime@gmail.com)", url: "https://atysonjaime.github.io" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastContainer/>
        <StyledJsxRegistry>
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
