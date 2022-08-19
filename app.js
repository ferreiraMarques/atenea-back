const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;
const db = require("./config/model.config");
//require('./config/routes.config')(app);
const Role = db.role;
let corsOptions = {origin: "http://localhost:4200/"};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./auth/routes/auth.routes')(app);
    require('./users/routes/user.routes')(app);
    require('./category/routes/category.routes')(app);
    require('./questions/routes/question.routes')(app);
    require('./profile/routes/profile.routes')(app);

db.sequelize.sync();

//server on
app.listen(PORT, () => {
  console.log(`Servidor on Puerto: ${PORT}.`);
});

