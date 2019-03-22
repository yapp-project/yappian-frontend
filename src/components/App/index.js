import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Home from "src/components/Home";
import Auth from "src/components/Auth";
import Navigation from "src/components/Navigation";
const App = props => [
  <Navigation key={1} />,

  <PrviateRoutes key={2} />

  // 차후에 사용될 코드이다.
  // props.isLogin ? <PrviateRoutes key={2} /> : <PublicRoutes key={2} />,
  // <Footer key={3} />
];

// isLogin이 True일때 사용되는 Route
const PrviateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

// // isLogin이 Fail일때 사용되는 Route
const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);
export default App;
