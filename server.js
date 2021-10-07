const ExpressApp = require("./app");
const { APP_CONFIG } = require("./config");
const { DatabaseConnection } = require("./database");

async function main() {
  const { app } = new ExpressApp();

  await DatabaseConnection.connect();

  app.listen(APP_CONFIG.PORT, () => {
    console.log(`App is listening on ${APP_CONFIG.PORT}`);
  });
}

main();
