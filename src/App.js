import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    {/* //   <div className="App">
    //     <h1>hi doremon😊</h1>
    //   </div> */}

      <div className="app">
        <Router>
          <Header/>

          <Switch>
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
