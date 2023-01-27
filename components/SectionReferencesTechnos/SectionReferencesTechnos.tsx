import styles from "./SectionReferencesTechnos.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { titles } from "../../assets/Titles";
import LogosWrapper from "../LogoWrapper/LogosWrapper";
import { SectionReferencesTechnosProps } from "@/types/types.js";

const logoArray = {
  technos: [
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
  ],
  references: [
    "aramisauto",
    "continental",
    "maisondumonde",
    "mazarinne",
    "mugler",
    "poliris",
    "sarenza",
    "tagcommander",
    "wynd",
  ],
};

export const SectionReferencesTechnos: React.FC<
  SectionReferencesTechnosProps
> = ({ section }) => {
  return (
    <section className={styles.SectionReferencesTechnosWrapper} id={section}>
      <SectionTitle
        title={
          section === "technos" ? titles.technos.title : titles.references.title
        }
        description={
          section === "technos"
            ? titles.technos.description
            : titles.references.description
        }
      />
      <LogosWrapper
        logos={section === "technos" ? logoArray.technos : logoArray.references}
        section={section}
      />
    </section>
  );
};
