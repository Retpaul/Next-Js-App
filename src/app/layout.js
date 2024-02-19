import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/navbar/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0d0c22] text-white`}>
        <div className=" w-[90%] m-auto px-5 md:px-12 min-h-dvh flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
