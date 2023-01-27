import { PropsLogosWrapper } from "@/types/types.js";
import Image from "next/image.js";
import styles from "./LogosWrapper.module.css";

export default function LogosWrapper({ logos, section }: PropsLogosWrapper) {
  return (
    <div className={styles.logosWrapper}>
      {logos.map((logo, index) => (
        <Image
          className={styles.logoContainer}
          key={`section${index}`}
          src={`/../public/assets/${
            section === "technos" ? "technos" : "references"
          }/${logo}.png`}
          alt={`logo ${logo}`}
          width={section === "technos" ? 80 : 150}
          height={section === "technos" ? 80 : 150}
          objectFit={"contain"}
        />
      ))}
    </div>
  );
}
