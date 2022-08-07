
import instance from "./instance";

export const signup = (datAccount: any) => {
  const url = `/signup`;
  return instance.post(url, datAccount);
};

export const signin = (datAccount: any) => {
  const url = `/signin`;
  return instance.post(url, datAccount);
};