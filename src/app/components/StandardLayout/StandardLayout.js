import styles from "./StandardLayout.module.css";
import "../../globals.css";
import Navbar from "../Navbar/Navbar";

export const metadata = {
  title: "Ibrahim Muhammad Yusoof",
  description:
    "Full Stack Web Developer with 3 years of experience in designing and implementing high-quality applications and services. Strong background in JavaScript, Node.js, React, Next, and AWS Cloud Services. Excellent team player with a passion for exploring new ideas and tools, and a proven ability to deliver results in challenging environments.  ",
};

export default function StandardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <main className={styles.centerMe}>
            <Navbar />
            <div className={styles.spacer} />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
{
}
