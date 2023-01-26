import logoOostaoo from "../../assets/logo-oostaoo.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import linkedin from "../../assets/img/linkedin.png";
import Image from "next/image";
import styles from "./Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {  } from "@mui/material";
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export default function Nav() {
  const [displayFull, setDisplayFull] = useState("accueil");

  const [homeFocus, setHomeFocus] = useState(false);
  const [servicesFocus, setServicesFocus] = useState(false);
  const [technosFocus, setTechnosFocus] = useState(false);
  const [referencesFocus, setReferencesFocus] = useState(false);
  const [offersFocus, setOffersFocus] = useState(false);
  const [contactFocus, setcontactFocus] = useState(false);

  useEffect(() => {
    console.log("effect");
    if (displayFull === "accueil") {
      setHomeFocus(true);
      setServicesFocus(false);
      setTechnosFocus(false)
      setReferencesFocus(false);
      setOffersFocus(false);
      setcontactFocus(false);
    }
    else if (displayFull === "services") {
      setHomeFocus(false);
      setServicesFocus(true);
      setTechnosFocus(false)
      setReferencesFocus(false);
      setOffersFocus(false);
      setcontactFocus(false);      
    }
    else if (displayFull === "technos") {
      setHomeFocus(false);
      setServicesFocus(false);
      setTechnosFocus(true)
      setReferencesFocus(false);
      setOffersFocus(false);
      setcontactFocus(false);
    }
    else if (displayFull === "references") {
      setHomeFocus(false);
      setServicesFocus(false);
      setTechnosFocus(false)
      setReferencesFocus(true);
      setOffersFocus(false);
      setcontactFocus(false);
    }
    else if (displayFull === "offers") {
      setHomeFocus(false);
      setServicesFocus(false);
      setTechnosFocus(false)
      setReferencesFocus(false);
      setOffersFocus(true);
      setcontactFocus(false);
    }
    else if (displayFull === "contact") {
      setHomeFocus(false);
      setServicesFocus(false);
      setTechnosFocus(false)
      setReferencesFocus(false);
      setOffersFocus(false);
      setcontactFocus(true);
    }
  }, [setDisplayFull, displayFull]);

  return (
    <div className={styles.navContainer}>
      <section className={styles.navTop}>
        <div className={styles.navTopLeft}>
          <a className={styles.navTopLeftContact} href="tel:+330142637727">
            <LocalPhoneIcon />
            01 42 63 77 27
          </a>
          <a
            className={styles.navTopLeftContact}
            href="mailto:contact@oostaoo.com"
          >
            <MailRoundedIcon />
            contact@oostaoo.com
          </a>
        </div>
        <div className={styles.navTopRight}>
          <a href="https://www.facebook.com/oostaoo/">
            <Image src={facebook} alt="logo facebook" height={33} width={33} />
          </a>
          <a href="https://twitter.com/oostaoo?lang=fr">
            <Image src={twitter} alt="logo twitter" height={33} width={33} />
          </a>
          <a href="https://www.linkedin.com/company/oostaoo-consulting/">
            <Image src={linkedin} alt="logo linkedin" height={33} width={33} />
          </a>
        </div>
      </section>
      <section className={styles.navBottom}>
        <Image src={logoOostaoo} alt="logo Oostaoo" height={70} width={100} />
        <ul className={styles.navBottomRight}>
          <li>
            <Link              
              activeClass="active"
              to={"accueil"}
              spy
              spyThrottle={600}
              smooth
              duration={500}
              onSetActive={() => setDisplayFull("accueil")}
            >
              <Button
                className={homeFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setHomeFocus(true)}
                // onBlur={() => setHomeFocus(false)}
                variant={displayFull === "accueil" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("accueil");
                }}
              >
                Accueil
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to={"services"}
              spy
              spyThrottle={600}
              smooth
              offset={-100}
              duration={500}
              onSetActive={() => setDisplayFull("services")}
            >
              <Button
                className={servicesFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setServicesFocus(true)}
                // onBlur={() => setServicesFocus(false)}
                variant={displayFull === "services" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("services");
                }}
              >
                Services
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="technos"
              spy
              spyThrottle={600}
              smooth
              offset={-100}
              duration={500}
              onSetActive={() => setDisplayFull("technos")}
            >
              <Button
                className={technosFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setTechnosFocus(true)}
                // onBlur={() => setTechnosFocus(false)}
                variant={displayFull === "technos" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("technos");
                }}
              >
                Technos
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="references"
              spy
              spyThrottle={600}
              smooth
              offset={-100}
              duration={500}
              onSetActive={() => setDisplayFull("references")}
            >
              <Button
                className={referencesFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setReferencesFocus(true)}
                // onBlur={() => setReferencesFocus(false)}
                variant={displayFull === "references" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("references");
                }}
              >
                References
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="offers"
              spy
              spyThrottle={600}
              smooth
              offset={-130}
              duration={500}
              onSetActive={() => setDisplayFull("offers")}
            >
              <Button
                className={offersFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setOffersFocus(true)}
                // onBlur={() => setOffersFocus(false)}              
                variant={displayFull === "offers" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("offers");
                }}
              >
                offers
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy
              spyThrottle={600}
              smooth
              offset={-150}
              duration={500}
              onSetActive={() => setDisplayFull("Contact")}
            >
              <Button
                className={contactFocus ? styles.navButtonFocused : styles.navButton}
                // onFocus={() => setcontactFocus(true)}
                // onBlur={() => setcontactFocus(false)}
                variant={displayFull === "contact" ? "contained" : undefined}
                onClick={() => {
                  setDisplayFull("contact");
                }}
              >
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
