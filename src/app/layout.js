import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ibrahim Muhammad Yusoof",
  description:
    "Full Stack Web Developer with 3 years of experience in designing and implementing high-quality applications and services. Strong background in JavaScript, Node.js, React, Next, and AWS Cloud Services. Excellent team player with a passion for exploring new ideas and tools, and a proven ability to deliver results in challenging environments.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <nav id="navbarContainer">
            <div id="navbar">
              <div className="column" id="start">
                <div id="logo">
                  <p>Hi, I&apos;m Ibrahim 👋</p>
                </div>
              </div>
              <div className="column">
                <div id="mainLink">
                  <Link href="/">Home</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Projects</Link>
                  <Link href="/">Contact</Link>
                </div>
              </div>
              <div className="column" id="end">
                <div id="linksOut">
                  <AiFillGithub />
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
          </nav>
          <div id="spacer"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
