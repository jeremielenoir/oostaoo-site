import logOostaoo from "../../assets/logo-oostaoo.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import linkedin from "../../assets/img/linkedin.png";
import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link.js";
import { Button } from "@mui/material";
import { useState } from "react";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Nav() {
  const [displayFull, setDisplayFull] = useState("accueil");

  return (
    <div className={styles.navContainer}>
      <section className={styles.navTop}>
        <div className={styles.navTopLeft}>
          <a href="">
            {/* <LocalPhoneIcon /> */}
            01 42 63 77 27
          </a>
          <a href="">contact@oostaoo.com</a>
        </div>
        <div className={styles.navTopRight}>
          <Image src={facebook} alt="logo facebook" width={33} />
          <Image src={twitter} alt="logo twitter" width={33} />
          <Image src={linkedin} alt="logo linkedin" width={33} />
        </div>
      </section>
      <section className={styles.navBottom}>
        <Image src={logOostaoo} alt="logo Oostaoo" width={100} />
        <ul className={styles.navBottomRight}>
          <li>
            <Link href="#accueil">
              <Button
                variant={displayFull === "accueil" ? "contained" : ""}
                onClick={() => {
                  setDisplayFull("accueil");
                }}
              >
                Accueil
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <Button variant="text">Servies</Button>
            </Link>
          </li>
          <li>
            <Link href="#technos">
              <Button variant="text">Technos</Button>
            </Link>
          </li>
          <li>
            <Link href="#references">
              <Button variant="text">References</Button>
            </Link>
          </li>
          <li>
            <Link href="#offres">
              <Button variant="text">Offres</Button>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <Button style={{ color: "#3edac6" }} variant="text">
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
