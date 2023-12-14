class MidsConfigs {
  constructor(
    dependencies = {
      express: null,
      express_app: null,
      bodyParser: null,
      mongoose: null,
      express_session: null,
      express_flash: null,
      passport: null,
    }
  ) {
    this.dependencies = dependencies;
  }

  // Express app
  exp_app() {
    if (this.dependencies.express) {
      return this.dependencies.express_app;
    } else {
      throw Error("Mids-Configs Error: Express library not found!");
    }
  }

  // Express static assets
  exp_static(folder) {
    if (this.dependencies.express) {
      return this.exp_app().use(this.dependencies.express.static(`/${folder}`));
    } else {
      throw Error("Mids-Configs Error: Express library not found!");
    }
  }

  // Express cors setup
  exp_cors(options = { cred: false, orig: "*" }) {
    if (this.dependencies.express) {
      const app = this.exp_app();
      app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", options.orig);
        res.header("Access-Control-Allow-Credentials", options.cred);
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization, withCredentials, Content-Disposition"
        );
        res.header(
          "Access-Control-Request-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization, withCredentials, Content-Disposition"
        );
        next();
      });
    } else {
      throw Error("Mids-Configs Error: Express library not found!");
    }
  }

  // Express sessions
  exp_sess(MongoStore, mongoURI) {
    if (this.dependencies.express && this.dependencies.express_session) {
      const app = this.exp_app();
      const express_session = this.dependencies.express_session;
      app.use(
        express_session({
          secret: "secret",
          resave: false,
          saveUninitialized: false,
          store: MongoStore.create({
            mongoUrl: mongoURI,
          }),
        })
      );
    } else {
      throw Error(
        "Mids-Configs Error: Express or Express Session library not found!"
      );
    }
  }

  // Express flash
  exp_flash() {
    if (this.dependencies.express && this.dependencies.express_flash) {
      const app = this.exp_app();
      const flash = this.dependencies.express_flash;
      app.use(flash());
      app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg = req.flash("error_msg");
        res.locals.warning_msg = req.flash("warning_msg");
        res.locals.error = req.flash("error");
        next();
      });
    } else {
      throw Error(
        "Mids-Configs Error: Express or Express flash library not found!"
      );
    }
  }

  // Mongoose setup

  // Mongoose uri
  mongoose_uri(db_name) {
    return process.env.MONGODB_URI || `mongodb://localhost:27017/${db_name}`;
  }

  // Connecting to mongodb
  mongoose_connector(db_name = "users") {
    if (this.dependencies.mongoose) {
      return this.dependencies.mongoose.connect(this.mongoose_uri(db_name), {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      });
    } else {
      throw Error("Mids-Configs Error: Mongoose library not found!");
    }
  }

  // Creating a db connection instance
  db_instance() {
    if (this.dependencies.mongoose) {
      return this.dependencies.mongoose.connection;
    } else {
      throw Error("Mids-Configs Error: Mongoose library not found!");
    }
  }

  // Loggin info when connection passes or fails
  db_behave() {
    if (this.dependencies.mongoose) {
      this.db_instance().on(
        "error",
        console.log.bind(console, "Unable connect to the database...")
      );
      this.db_instance().once("open", () => {
        console.log("Connected to the database...");
      });
    } else {
      throw Error("Mids-Configs Error: Mongoose library not found!");
    }
  }

  // Middleware for body parser
  bd_ps_mid() {
    if (this.dependencies.express_app && this.dependencies.bodyParser) {
      const app = this.exp_app();
      const bodyParser = this.dependencies.bodyParser;
      app.use(bodyParser.json({ limit: "50mb" }));
      app.use(
        bodyParser.urlencoded({
          extended: true,
          limit: "50mb",
        })
      );
    } else {
      throw Error(
        "Mids-Configs Error: Express or Body parser library not found!"
      );
    }
  }

  // Setting up passport middlewares and configs

  // Passport requirer
  run_passport_config(path) {
    const passport = this.dependencies.passport;
    if (this.dependencies.passport) {
      if (path) {
        return require(`../${path}`)(passport);
      } else {
        throw Error("Passport Error: Path to passport config not provided!");
      }
    } else {
      throw Error("Mids-Configs Error: Passport library not found!");
    }
  }

  // Passport middlewares
  passport_mids() {
    if (this.dependencies.express && this.dependencies.passport) {
      const app = this.exp_app();
      const passport = this.dependencies.passport;

      app.use(passport.initialize());
      app.use(passport.session());
    } else {
      throw Error("Mids-Configs Error: Passport or Express library not found!");
    }
  }
}

module.exports = MidsConfigs;
