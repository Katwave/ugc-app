const getAPI = () =>{
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_DEV_API_URL;
      } else if (process.env.NODE_ENV === "production") {
        return process.env.REACT_APP_PROD_API_URL;
      }
}

export default getAPI;