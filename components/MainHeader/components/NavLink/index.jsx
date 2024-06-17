"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={
          path === href ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
