module.exports = {
    HOST: process.env.HOSTDB,
    USER: process.env.USERDB,
    PASSWORD: process.env.PASSWORDDB,
    DB: process.env.DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };