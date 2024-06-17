"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./components/MainHeaderBackground";
import NavLink from "./components/NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoImg}
            alt="Uma mesa com vários tipos de comida."
            priority
          />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Buscar Comidas</NavLink>
            </li>
            <li>
              <NavLink href="/community">Comunidade</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
