require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "postgres",
    ssl: true,
  },
  production: {
    username:"diokyljhhqkfkn",
    password:"9ca02be7e2d2fc9091367f91913d02ef536ba1e217fbd1023aeac3e82dd728a2",
    database:"dj7bsgepbrt70",
    host: "ec2-44-198-82-71.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
