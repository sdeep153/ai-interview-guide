require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT;
const connnectToDB = require("./src/config/db");
const invokeGeminiAi = require("./src/services/ai.service")

connnectToDB();
invokeGeminiAi();

app.listen(PORT, () => {
  console.log(`Server listening on PORT : ${PORT}`);
});
