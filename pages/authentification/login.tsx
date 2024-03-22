import { useState } from 'react';
import Cookies from 'js-cookie';
import { createToken } from './auth';
import router from 'next/router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Style from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Code pour soumettre les informations de connexion
    const userData = {
      email,
      password,
    };
    // Ici, vous pouvez envoyer les données de connexion au serveur ou gérer l'authentification localement
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const token = await response.json();
        Cookies.set('token', token, { expires: 7, sameSite: 'none', secure: true });
        router.push({
          pathname: '/backoffice/jobs',
        });
      } else {
        alert('Une erreur s\'est produite lors de la connexion');
      }
    } catch (error) {
      alert('Une erreur s\'est produite lors de la requête vers l\'API');
    }


    console.log(userData);
  };

  return (
    <div>
      <Box
        height={400}
        width={400}
        my={20}
        mx={'auto'}
        display="flex"
        alignItems="center"
        flexWrap={'nowrap'}
        alignContent={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        gap={4}
        p={2}
        sx={{ border: '2px solid grey', borderRadius: 10 }}
      >
        <h1 className={Style.title}>Login OOSTAOO</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="email"
              name="email"
              label="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              fullWidth 
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Mot De Passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              fullWidth
              margin="normal"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={Style.submitButtom}
          >
            Connection
          </Button>
        </form>
      </Box>
    </div>
  );
}