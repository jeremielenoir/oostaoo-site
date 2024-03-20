import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return error;
  }
}