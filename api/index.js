// Required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express_session = require("express-session");
const MongoStore = require("connect-mongo");
const http = require("http").createServer(app);

// Middlewares and configs

// app.use(enforce.HTTPS({ trustProtoHeader: true })); // change to true when deploying

const MidsConfigs = require("./libs/mids-configs");
const mid_configs = new MidsConfigs({
  express_app: app,
  express: express,
  bodyParser: bodyParser,
  mongoose: mongoose,
  express_session: express_session,
});

// Imports cors config
const corsConfig = require("./config/cors");

// Static assests
mid_configs.exp_static("public");

// Enabling CORS
mid_configs.exp_cors({ cred: true, orig: corsConfig() });

// Connecting to MongoDB
mid_configs.mongoose_connector("ttags");
mid_configs.db_behave();

// Body parser middleware
mid_configs.bd_ps_mid();

// Express session
mid_configs.exp_sess(MongoStore, mid_configs.mongoose_uri("ttags"));

// Importing pre-defined routes
const api = require("./routes/api");

// use pre-defined routers
app.use(`/v1/`, api);

// Resource not found 404

app.get("/*", (req, res) => {
  res.json({ err: "That api route is not found" });
});

// Setting up the port
const Port = process.env.PORT || 8000; // change to 5000 when using react.js/deploying

// Listening to the server
http.listen(Port, () => {
  console.log(`Listening on PORT ${Port}...`);
});
