
const constructorMethod = (app) => {
  
  app.get("/", (req, res) => {
    res.render("product/screen");
  });

  // app.get("/pendingContributions", (req, res) => {
  //   res.render("contributions/pendingContri", { hasError: false, error: "", title:'Title'});
  // });

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Error code 404: Page not found!" });
  });
};

module.exports = constructorMethod;
