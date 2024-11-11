import { pbkdf2Sync, randomBytes } from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const SALT_LENGTH = parseInt(process.env.SALT_LENGTH, 10) ;
const ITERATIONS = parseInt(process.env.ITERATIONS, 10);
const KEY_LENGTH = parseInt(process.env.KEY_LENGTH, 10);
const DIGEST = process.env.DIGEST;

//to generate salt
function generateSalt() {
  return randomBytes(SALT_LENGTH).toString('hex'); 
}

//to encrypt password
export function encryptPassword(password) {
  const salt = generateSalt(); 
  const hash = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST).toString('hex');
  return { hash, salt }; 
}

//to verify password
export function verifyPassword(password, hash, salt) {
  const derivedHash = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST).toString('hex');
  return derivedHash === hash; 
}
