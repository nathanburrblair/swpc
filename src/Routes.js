import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Plants from "./components/PlantParent/Plants/Plants";
import Designs from "./components/DesignParent/Designs/Designs";
import Containers from "./components/ContainerParent/Containers/Containers";
import MainNav from "./components/MainNav/MainNav";
import Slider from "./components/Slider/Slider";
import LeftArrow from "./components/Arrows/LeftArrow";
import PlantCategories from "./components/PlantParent/PlantCategories/PlantCategories";
import ProductPage from "./components/PlantParent/ProductPage/ProductPage";
import ContainerPage from "./components/ContainerParent/ContainerPage/ContainerPage";
import ContainerCategories from "./components/ContainerParent/ContainerCategories/ContainerCategories";
import DesignCategories from "./components/DesignParent/DesignCategories/DesignCategories";
import DesignPage from "./components/DesignParent/DesignPage/DesignPage";
import Staging from "./components/DesignParent/Staging/Staging";
import PlantCare from "./components/DesignParent/PlantCare/PlantCare";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/plants" component={Plants} />
    <Route
      exact
      path="/plants/:category"
      render={props => (
        <PlantCategories {...props} key={props.match.params.category} />
      )}
    />
    <Route path="/plants/:category/:id" component={ProductPage} />
    <Route exact path="/containers" component={Containers} />
    <Route
      exact
      path="/containers/:category"
      render={props => (
        <ContainerCategories {...props} key={props.match.params.category} />
      )}
    />
    <Route path="/containers/:category/:id" component={ContainerPage} />
    <Route path="/design/staging" component={Staging} />
    <Route path="/design/plant-care" component={PlantCare} />
    <Route exact path="/design" component={Designs} />
    <Route exact path="/design/:category" render={props => (<DesignCategories {...props} key={props.match.params.category} />
    )}
    />
    <Route path="/design/:category/:id" component={DesignPage} />
    <Route path="/mainnav" component={MainNav} />
    <Route path="/slider" component={Slider} />
    <Route path="/leftarrow" component={LeftArrow} />
  </Switch>
);

//gave the category route a unique key -the category name- so the component would re-render when the path changes
