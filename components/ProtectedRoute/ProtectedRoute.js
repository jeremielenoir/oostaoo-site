// components/ProtectedRoute.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { verifyToken } from '../../pages/authentification/auth';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier l'authentification de l'utilisateur ici
    const token = Cookies.get('token');
    if (!verifyToken(token)) {
      router.push('/authentification/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    } else {
      setAuthenticated(true);
    }
  }, []);

  return authenticated ? children : null;
}