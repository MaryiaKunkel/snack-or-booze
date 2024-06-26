import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

// Main application component. Handles fetching data, routing and state management
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({
    snacks: [],
    drinks: [],
  });
  // A function that adds an item to the food state from submitted form where foodType can be snacks or drinks, newItem is an object of item characteristics.
  const addItem = (foodType, newItem) => {
    setFood((foodObj) => {
      if (foodType === "snacks") {
        return {
          snacks: [...foodObj.snacks, newItem],
          drinks: [...foodObj.drinks],
        };
      } else if (foodType === "drinks") {
        return {
          snacks: [...foodObj.snacks],
          drinks: [...foodObj.drinks, newItem],
        };
      } else {
        return foodObj;
      }
    });
  };
  // Fetches data from the database and updates the state.
  useEffect(() => {
    async function fetchData() {
      let snacks = await SnackOrBoozeApi.getFood("snacks");
      let drinks = await SnackOrBoozeApi.getFood("drinks");
      setFood({
        snacks: snacks,
        drinks: drinks,
      });
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home food={food} />
            </Route>
            <Route exact path="/:foodType">
              <Menu food={food} addItem={addItem} />
            </Route>
            <Route path="/:foodType/:id">
              <Snack food={food} cantFind="/:foodType" />
            </Route>
            <Route path="*">
              {console.log("Unmatched route")}
              <div>
                <p>Hmmm. I can't seem to find what you want.</p>
              </div>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
