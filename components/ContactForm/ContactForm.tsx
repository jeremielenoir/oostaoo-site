import {
  useEffect, useState, FormEvent,
} from 'react';

import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import sendEmail from '../../requests/sendEmail';

import styles from './ContactForm.module.css';
import {
  NAME_REGEX, EMAIL_REGEX, MESSAGE_REGEX, SUBJECT_REGEX,
} from '../../assets/RegExps';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [subject, setSubject] = useState('');
  const [validSubject, setValidSubject] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);

  const [message, setMessage] = useState('');
  const [validMessage, setValidMessage] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const clearInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  useEffect(() => {
    const result = SUBJECT_REGEX.test(subject);
    setValidSubject(result);
  }, [subject]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !NAME_REGEX.test(name) ||
      !EMAIL_REGEX.test(email) ||
      !MESSAGE_REGEX.test(message) ||
      !SUBJECT_REGEX.test(subject)
    ) {
      setErrMsg('Informations Invalides');
      return;
    }

    try {
      const req = await sendEmail({
        email,
        subject,
        message: `Bonjour,<br><br>Je suis ravi de vous transmettre ce message venant du site Oostaoo contact !<br><br>Voici les détails que la personne souhaite partager avec vous :<br><br>---<br><br>- Nom -<br>${name}<br><br>- Adresse e-mail -<br>${email}<br><br>- Objet du message -<br>${subject}<br><br>- Message -<br>${message}<br><br>---<br><br>Merci d'avoir pris le temps de lire le message de votre bot favori.<br><br>Cordialement,<br>botContact`,
      });
      if (req.status === 250) {
        setSuccess(true);
        clearInputs();
      }
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setErrMsg("Une erreur interne s'est produite. Veuillez réessayer");
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoWrapper}>
          <span className={styles.IconWrapper}>
            <LocalPhoneOutlinedIcon
              className={styles.offerIcon}
              style={{ fill: 'white' }}
            />
          </span>
          <a href="tel:+330142637727">01 42 63 77 27</a>
        </div>
        <div className={styles.contactInfoWrapper}>
          <span className={styles.IconWrapper}>
            <MailOutlineIcon
              className={styles.offerIcon}
              style={{ fill: 'white' }}
            />
          </span>
          <a href="mailto:contact@oostaoo.com">contact@oostaoo.com</a>
        </div>
        <div className={styles.contactInfoWrapper}>
          <span className={styles.IconWrapper}>
            <PlaceOutlinedIcon
              className={styles.offerIcon}
              style={{ fill: 'white' }}
            />
          </span>
          <a href="https://www.google.com/maps/place/OOSTAOO+CONSULTING/@48.8733599,2.3433706,15z/data=!4m5!3m4!1s0x0:0x9609e46b78e3a337!8m2!3d48.8733333!4d2.3433717">
            3 Rue Geoffroy-Marie, 75009 Paris
          </a>
        </div>
      </div>
      {success ? (
        <div>
          <h3>Message Envoyé !</h3>
        </div>
      ) : (
        <div className={styles.contactSectionForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formUpperElement}>
              <div className={styles.formUpperElementName}>
                <TextField
                  className={styles.formUpperElementNameField}
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                  required
                  label="Nom et Prénom"
                  variant="outlined"
                  placeholder="Doe John"
                />
                {nameFocus || (nameFocus && !validName) ? (
                  <p className={`${styles.fieldNameDescription} ${!validName && styles.redText}`}>
                    max 40 char.
                  </p>
                ) : null}
              </div>
              <div className={styles.formUpperElementEmail}>
                <TextField
                  className={styles.formUpperElementEmailField}
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  required
                  label="Email"
                  variant="outlined"
                />
                {emailFocus || (emailFocus && !validEmail) ? (
                  <p className={`${styles.fieldEmailDescription} ${!validEmail && styles.redText}`}>
                    exemple@mail.fr
                  </p>
                ) : null}
              </div>
            </div>
            <div className={styles.formUpperElementSubject}>
              <TextField
                className={styles.formUpperElementSubjectField}
                id="subject"
                autoComplete="off"
                onChange={(e) => setSubject(e.target.value)}
                onFocus={() => setSubjectFocus(true)}
                onBlur={() => setSubjectFocus(false)}
                required
                label="Objet"
                variant="outlined"
              />
              {subjectFocus || (subjectFocus && !validSubject) ? (
                <p className={`${styles.fieldSubjectDescription} ${!validSubject && styles.redText}`}>
                  max 75 char.
                </p>
              ) : null}
            </div>
            <div className={styles.formUpperElementMsg}>
              <TextField
                className={styles.formUpperElementMsgField}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setMessageFocus(true)}
                onBlur={() => setMessageFocus(false)}
                required
                multiline
                rows={8}
                label="Nous Contacter"
                variant="outlined"
                placeholder="Bonjour, je souhaiterais prendre contact..."
                value={message}
              />
              {messageFocus || (messageFocus && !validMessage) ? (
                <p className={`${styles.fieldMsgDescription} ${!validMessage && styles.redText}`}>
                  max 500 char.
                </p>
              ) : null}
            </div>
            <p className={errMsg ? styles.errMsg : styles.offscreen}>{errMsg}</p>
            <Button
              className={styles.submitButton}
              disabled={!validName || !validEmail || !validMessage || !validSubject}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Envoyer
            </Button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
