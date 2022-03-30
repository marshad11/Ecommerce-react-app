import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
import Search from "./Component/Search";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
