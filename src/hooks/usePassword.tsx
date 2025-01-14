import CryptoJS, { AES } from 'crypto-js';

const usePassword = () => {
  const encryptPassword = (password: string) => {
    return AES.encrypt(password, process.env.NEXT_PUBLIC_SECRET_KEY ?? '').toString();
  };

  const decryptPassword = (password: string) => {
    return AES.decrypt(password, process.env.NEXT_PUBLIC_SECRET_KEY ?? '').toString(
      CryptoJS.enc.Utf8,
    );
  };

  return { encryptPassword, decryptPassword };
};

export default usePassword;
