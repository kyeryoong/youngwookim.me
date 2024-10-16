import CryptoJS from 'crypto-js';

export const encryptPassword = (password: string) => {
  return CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_SECRET_KEY ?? '').toString();
};

export const decryptPassword = (password: string) => {
  return CryptoJS.AES.decrypt(password, process.env.NEXT_PUBLIC_SECRET_KEY ?? '').toString(
    CryptoJS.enc.Utf8,
  );
};
