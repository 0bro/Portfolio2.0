import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./LinkUpArrow.module.css";

// A preset for a Link that has a Arrow points out to the right
function LinkUpArrow({ children, ...props }) {
  return (
    <>
      {/* next/Link Component inherits the props that are passed but uses our styling */}
      <Link className={styles.link} {...props}>
        {children}
        {/* Preset Arrow that we'll use along with it's styling  */}
        <FiArrowUpRight className={styles.arrow} />
      </Link>
    </>
  );
}

export default LinkUpArrow;
