require ("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller.js");

const app = express();
app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

const { CONNECTION_STRING } = process.env;

const port = 4850;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(port, () => {
    console.log(`The magic be happening on port ${port}`);
  });
}).catch(err => console.log(err) );

app.get("/api/containers", controller.getContainers)
app.get("/api/containers/:product_category", controller.getContainersByCat)
app.get("/api/containers/:product_category/:id", controller.getContainersById)

app.get("/api/plants", controller.getPlants);
app.get("/api/plants/:product_category", controller.getPlantsByCat);
app.get("/api/plants/:product_category/:id", controller.getPlantById);

app.get("/api/design", controller.getDesign);
app.get("/api/design/:product_category", controller.getDesignByCat);
app.get("/api/design/:product_category/:id", controller.getDesignByCat)

app.post("/api/plants/:product_category", controller.addPlant);