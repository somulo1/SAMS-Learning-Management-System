import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

// Get the encryption key from environment variables, with a fallback to a default value
const SECRET_KEY = process.env.ENCRYPTION_KEY || 'your-secret-key';

// Log a warning if the default key is being used
if (SECRET_KEY === 'your-secret-key') {
  console.warn('Warning: Using default encryption key. Set ENCRYPTION_KEY in your environment.');
}

// Encrypt data using AES encryption
export const encryptData = (data: string): string => {
  try {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
};

// Decrypt data using AES decryption
export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
};

// Hash a password using bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
  } catch (error) {
    console.error('Password hashing error:', error);
    throw new Error('Failed to hash password');
  }
};

// Verify a password by comparing it to a hashed password
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Password verification error:', error);
    throw new Error('Failed to verify password');
  }
};

// Generate a SHA256 hash of the data
export const generateSHA256Hash = (data: string): string => {
  try {
    return CryptoJS.SHA256(data).toString();
  } catch (error) {
    console.error('SHA256 hash error:', error);
    throw new Error('Failed to generate SHA256 hash');
  }
};

// Generate a SHA512 hash of the data
export const generateSHA512Hash = (data: string): string => {
  try {
    return CryptoJS.SHA512(data).toString();
  } catch (error) {
    console.error('SHA512 hash error:', error);
    throw new Error('Failed to generate SHA512 hash');
  }
};
