const DEV_PORT = "http://localhost:3000" || "http://192.168.43.14:3000";
const PROD_PORT = "https://www.ttagz-task.com";

const cors = () => {
  if (process.env.NODE_ENV) {
    return PROD_PORT;
  } else {
    return DEV_PORT;
  }
};

module.exports = cors;
