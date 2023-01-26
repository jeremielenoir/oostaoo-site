import styles from "./Technos.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { titles } from "../../assets/Titles";
import LogosWrapper from "../LogoWrapper/LogosWrapper";

const logosArray = [
  "android",
  "angular",
  "bootstrap",
  "css3",
  "git",
  "html5",
  "ios",
  "javascript",
  "jquery",
  "kibana",
  "nodejs",
  "php",
  "python",
  "react",
  "swift",
  "symfony",
  "vuejs",
  "zend",
];

export const Technos = () => {
  return (
    <section className={styles.technosWrapper} id="technos">
      <SectionTitle
        title={titles.technos.title}
        description={titles.technos.description}
      />
      <LogosWrapper logos={logosArray} section={"technos"} />
    </section>
  );
};
