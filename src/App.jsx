import { Footer } from "./components/Footer";
import {ProductDetails} from "./components/ProductDetails";
import { ProductListing } from "./components/ProductListing";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route path="/" exact Component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              Component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
