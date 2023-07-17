import bcrypt from "bcryptjs";

export const encrypt = async (pass) => {
  const passHash = await bcrypt.hash(pass, 8);
  return passHash;
};

export const verify = async (pass, passHash) => {
  const isOk = await bcrypt.compare(pass, passHash);
  return isOk;
};