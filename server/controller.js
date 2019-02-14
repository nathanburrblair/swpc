module.exports = {
  getPlants: (req, res) => {
    const db = req.app.get("db");
    db.get_plants()
      .then(plants => {
        res.status(200).send(plants);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getPlantsByCat: (req, res) => {
    const db = req.app.get("db");
    let { product_category } = req.params;
    db.get_plants_by_cat([product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getPlantById: (req, res) => {
    const db = req.app.get("db");
    let { id, product_category } = req.params;
    db.get_plant_by_id([id, product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  addPlant: (req, res) => {
    const db = req.app.get("db");
    let {
      name,
      price,
      product_description,
      product_category,
      product_image
    } = req.body;
    db.add_plant({
        name,
        price,
        product_description,
        product_category,
        product_image
    })
    .then(response => {
        res.status(200).send(response)
    })
  }, 

  addToCart: (req, res) => {
    const db = req.app.get("db")
    
  },

  getContainers: (req, res) => {
    const db = req.app.get("db");
    db.get_containers()
      .then(containers => {
        res.status(200).send(containers);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getContainersByCat: (req, res) => {
    const db = req.app.get("db");
    let { product_category } = req.params;
    db.get_containers_by_cat([product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }, 

  getContainersById: (req, res) => {
    const db = req.app.get("db");
    let { id, product_category } = req.params;
    db.get_containers_by_id([id, product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }, 

  getDesign: (req, res) => {
    const db = req.app.get("db");
    db.get_design()
      .then(design => {
        res.status(200).send(design);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  
  getDesignByCat: (req, res) => {
    const db = req.app.get("db");
    let { product_category } = req.params;
    db.get_design_by_cat([product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }, 

  getDesignById: (req, res) => {
    const db = req.app.get("db");
    let { id, product_category } = req.params;
    db.get_design_by_id([id, product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  } 
};
