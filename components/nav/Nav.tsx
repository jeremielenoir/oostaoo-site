import logOostaoo from "../../assets/logo-oostaoo.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import linkedin from "../../assets/img/linkedin.png";
import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link.js";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Nav() {
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
              <button>Accueil</button>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <button>Services</button>
            </Link>
          </li>
          <li>
            <Link href="#technos">
              <button>Technos</button>
            </Link>
          </li>
          <li>
            <Link href="#references">
              <button>References</button>
            </Link>
          </li>
          <li>
            <Link href="#offres">
              <button>Offres</button>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
