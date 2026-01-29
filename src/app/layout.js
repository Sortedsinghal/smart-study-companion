// src/app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";
import Container from "@/components/Container";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
