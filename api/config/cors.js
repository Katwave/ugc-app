const DEV_PORT = "http://localhost:3000" || "http://192.168.43.14:3000";
const PROD_PORT = "ugc-app-client-c3pe1na1u-katwave.vercel.app";

const cors = () => {
  if (process.env.NODE_ENV) {
    return PROD_PORT;
  } else {
    return DEV_PORT;
  }
};

module.exports = cors;
