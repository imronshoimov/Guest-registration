const { app, keys } = require("./app");
const chalk = require("chalk");

app.listen(keys.port, () => {
  console.log(
    `${chalk.white.bgGreen(
      "Server is running on "
    )} ${chalk.white.bgBlue.underline(`http://localhost:${keys.port}/`)}`
  );
});
