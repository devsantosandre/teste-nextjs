import axios from 'axios';

console.log('process.env :>> ', process.env);

const apisso = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SSO,
});

const ssoSecondary = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SSO_MTI,
});

const apisiseci = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SISECI,
});

apisiseci.defaults.headers.common.Authorization = process.env.NEXT_PUBLIC_API_SISECI_KEY;
apisso.defaults.headers.common.Authorization = process.env.NEXT_PUBLIC_API_SSO_KEY;


export { apisso, apisiseci, ssoSecondary };
