import { useState } from 'react';
import Cookies from 'js-cookie';
import { createToken } from './auth';
import router from 'next/router';

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
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }