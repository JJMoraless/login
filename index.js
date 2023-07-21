import app from "./app.js";
import "dotenv/config.js";
import { sequelize } from "./config/sql/conectionDb.js";

const PORT = process.env.PORT || 3500;

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(" *********** conexion exitosa 🧙🦄 ************ ");
    app.listen(PORT, () => {
      console.log("server on port", PORT);
    });
  } catch (error) {
    console.log("********** conexion fallida 💀 *********** ");
    console.log(error);
  }
};

main();
