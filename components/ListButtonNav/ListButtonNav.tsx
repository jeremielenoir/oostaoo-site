import { Link } from "react-scroll";
import Button from "@mui/material/Button";
// import styles from "./listButtonNav.module.css";
import { ListButtonNavProps } from "@/types/types.js";

export const ListButtonNav: React.FC<ListButtonNavProps> = ({
  handleClick,
  displayFull,
  section,
}) => {
  // const [homeFocus, setHomeFocus] = useState(false);
  // const [servicesFocus, setServicesFocus] = useState(false);
  // const [technosFocus, setTechnosFocus] = useState(false);
  // const [referencesFocus, setReferencesFocus] = useState(false);
  // const [offersFocus, setOffersFocus] = useState(false);
  // const [contactFocus, setcontactFocus] = useState(false);

  // useEffect(() => {
  //   if (displayFull === "accueil") {
  //     setHomeFocus(true);
  //     setServicesFocus(false);
  //     setTechnosFocus(false);
  //     setReferencesFocus(false);
  //     setOffersFocus(false);
  //     setcontactFocus(false);
  //   } else if (displayFull === "services") {
  //     setHomeFocus(false);
  //     setServicesFocus(true);
  //     setTechnosFocus(false);
  //     setReferencesFocus(false);
  //     setOffersFocus(false);
  //     setcontactFocus(false);
  //   } else if (displayFull === "technos") {
  //     setHomeFocus(false);
  //     setServicesFocus(false);
  //     setTechnosFocus(true);
  //     setReferencesFocus(false);
  //     setOffersFocus(false);
  //     setcontactFocus(false);
  //   } else if (displayFull === "references") {
  //     setHomeFocus(false);
  //     setServicesFocus(false);
  //     setTechnosFocus(false);
  //     setReferencesFocus(true);
  //     setOffersFocus(false);
  //     setcontactFocus(false);
  //   } else if (displayFull === "offers") {
  //     setHomeFocus(false);
  //     setServicesFocus(false);
  //     setTechnosFocus(false);
  //     setReferencesFocus(false);
  //     setOffersFocus(true);
  //     setcontactFocus(false);
  //   } else if (displayFull === "contact") {
  //     setHomeFocus(false);
  //     setServicesFocus(false);
  //     setTechnosFocus(false);
  //     setReferencesFocus(false);
  //     setOffersFocus(false);
  //     setcontactFocus(true);
  //   }
  // }, [handleClick, displayFull]);

  return (
    <li>
      <Link
        to={section}
        spy
        spythrootle={600}
        smooth
        offset={-100}
        duration={500}
        onSetActive={() => handleClick(section)}
      >
        <Button
          // className={technosFocus ? styles.navButtonFocused : styles.navButton}
          variant={displayFull === section ? "contained" : undefined}
          onClick={() => handleClick(section)}
        >
          {section}
        </Button>
      </Link>
    </li>
  );
};
