const app = require("./app");
const PORT = process.env.PORT || 5000 || 3000;
app.listen(PORT, () => {
  console.log("App Run On Port - " + PORT);
});
