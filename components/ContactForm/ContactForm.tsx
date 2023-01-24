import styles from "./ContactForm.module.css";

import { TextField, Button, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";

const NAME_REGEX = /^(?![\s.]+$)[a-zA-Z\s.]{1,4}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MESSAGE_REGEX = /^(?:\b\w+\b[\s\r\n]*){1,250}$/;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emaifFocus, setEmailFocus] = useState(false);
  
  const [message, setMessage] = useState('');
  const [validMessage, setValidMessage] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  },[name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  },[email]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  },[message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!NAME_REGEX.test(name) || !EMAIL_REGEX.test(email) || !MESSAGE_REGEX.test(message)) {
      setErrMsg("Informations Invalides");
      return;
    }
    // Here we put our request Logic
    // const result = await senMessage(name, email, message);
		// if (result === "success") {
		// 	setSuccess(true);
		// 	clearInputs();
		// }
		// else {
		// 	setErrMsg(result);
		// }
    // For now we will set every submi as a success
    setSuccess(true);
    clearInputs();

  }

  return (
      <>
        {
          success
          ?
          <section>
            <h3>Message Envoyé !</h3>
          </section>
          :
          <section>
            <p
              className={errMsg ? "" : styles.offscreen}
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
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
                <TextField
                  id="email"
                  autoComplete="off" 
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  required
                  label="Email" 
                  variant="outlined" 
                  placeholder="exemple@mail.fr" 
                />
                <TextField
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setMessageFocus(true)}
                  onBlur={() => setMessageFocus(false)}
                  required
                  multiline
                  rows={4} 
                  label="Nous Contacter" 
                  variant="outlined" 
                  placeholder="Bonjour, je souhaiterais prendre contact..." 
                  value={message} 
                />
                <Button
                  disabled={!validName || !validEmail || !validMessage ? true : false}
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Envoyer
                </Button>

              </div>
            </form>          
          </section>
        }
      </>
    );
}

export default ContactForm;