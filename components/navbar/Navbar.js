import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Sumadhura-Logo.png"
import styles from "./styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar({ active='' }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" className={styles.logoImage}/>
                </Link>
                <div className={styles.call}>
                    <a href="tel:7625039382" className={styles.bold}>Schedule Visit: +91 76250 39382</a>
                </div>
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href="#about" scroll={false}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#overview" scroll={false}  >
                        Overview
                    </Link>
                </li>
                <li>
                    <Link href="#pricing" scroll={false}>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href="#location" scroll={false}  >
                        Location
                    </Link>
                </li>
            </ul>
        </nav>
    )
}