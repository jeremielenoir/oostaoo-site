import styles from "./References.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { titles } from "../../assets/Titles";
import LogosWrapper from "../LogoWrapper/LogosWrapper";

const logosArray = [
  "aramisauto",
  "continental",
  "maisondumonde",
  "mazarinne",
  "mugler",
  "poliris",
  "sarenza",
  "tagcommander",
  "wynd",
];

export const References = () => {
  return (
    <section className={styles.referencesWrapper} id="references">
      <SectionTitle
        title={titles.references.title}
        description={titles.references.description}
      />
      <LogosWrapper logos={logosArray} section={"references"} />
    </section>
  );
};
